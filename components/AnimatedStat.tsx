'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedStatProps {
  value: string;
  label: string;
}

const DURATION = 1200;

const parseTarget = (raw: string): { number: number; suffix: string } => {
  const match = raw.match(/^(\d+)(.*)$/);
  if (!match) return { number: 0, suffix: raw };
  return { number: parseInt(match[1], 10), suffix: match[2] };
};

export const AnimatedStat = ({ value, label }: AnimatedStatProps) => {
  const { number: target, suffix } = parseTarget(value);
  const isNumeric = target > 0;

  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Trigger on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.4 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  // Count-up for numeric stats
  useEffect(() => {
    if (!started || !isNumeric) return;

    const steps = 60;
    const interval = DURATION / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      setCount(Math.round(eased * target));
      if (step >= steps) {
        clearInterval(timer);
        setCount(target);
        setDone(true);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [started, target, isNumeric]);

  // Stop spinner after count-up duration
  useEffect(() => {
    if (!started || isNumeric) return;
    const t = setTimeout(() => setDone(true), DURATION + 200);
    return () => clearTimeout(t);
  }, [started, isNumeric]);

  // --- Non-numeric (EU) with orbit + stars ---
  if (!isNumeric) {
    const spinning = started && !done;

    return (
      <div ref={ref} className="text-center md:text-left">
        <div className="relative inline-flex items-center justify-center mb-1 w-14 h-14">

          {/* Orbit ring */}
          <svg
            className="absolute inset-0 w-full h-full"
            style={{
              animation: spinning ? `spin ${6}s linear infinite` : 'none',
              transition: 'opacity 0.4s',
            }}
            viewBox="0 0 56 56"
            fill="none"
            aria-hidden="true"
          >
            <ellipse
              cx="28" cy="28"
              rx="26" ry="10"
              stroke="#7756B5"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              strokeOpacity="0.5"
            />
          </svg>

          {/* Star 1 */}
          <div
            className="absolute w-1.5 h-1.5 rounded-full bg-accent"
            style={{
              top: '18px',
              left: '0px',
              animation: spinning ? `spin 3s linear infinite` : 'none',
              transformOrigin: '28px 10px',
              opacity: spinning ? 1 : 0,
              transition: 'opacity 0.4s',
            }}
          />
          {/* Star 2 */}
          <div
            className="absolute w-1 h-1 rounded-full bg-accent/60"
            style={{
              top: '34px',
              right: '2px',
              animation: spinning ? `spin 3s linear infinite reverse` : 'none',
              transformOrigin: '-18px -6px',
              opacity: spinning ? 1 : 0,
              transition: 'opacity 0.5s',
            }}
          />
          {/* Star 3 — tiny */}
          <div
            className="absolute w-1 h-1 rounded-full bg-white/40"
            style={{
              top: '14px',
              right: '4px',
              animation: spinning ? `spin 4.5s linear infinite` : 'none',
              transformOrigin: '-16px 14px',
              opacity: spinning ? 1 : 0,
              transition: 'opacity 0.6s',
            }}
          />

          <span className="text-3xl font-bold text-accent relative z-10">{value}</span>
        </div>
        <p className="text-gray-500 text-sm font-light">{label}</p>

        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // --- Numeric stat ---
  return (
    <div ref={ref} className="text-center md:text-left">
      <p className="text-3xl font-bold text-accent mb-1">
        {`${count}${suffix}`}
      </p>
      <p className="text-gray-500 text-sm font-light">{label}</p>
    </div>
  );
};
