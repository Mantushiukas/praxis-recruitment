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

const Orbit = ({ spinning }: { spinning: boolean }) => {
  const visibility = spinning ? 'opacity-100' : 'opacity-0';

  return (
    <div className="pointer-events-none absolute -inset-x-5 -inset-y-3" aria-hidden="true">
      <svg
        className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${spinning ? 'animate-spin-slow opacity-100' : 'opacity-0'}`}
        viewBox="0 0 120 72"
        fill="none"
      >
        <ellipse
          cx="60"
          cy="36"
          rx="56"
          ry="30"
          stroke="#7756B5"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          strokeOpacity="0.55"
        />
      </svg>
      <div className={`absolute inset-0 transition-opacity duration-500 ${visibility} ${spinning ? 'animate-spin-medium' : ''}`}>
        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent" />
      </div>
      <div className={`absolute inset-0 transition-opacity duration-500 ${visibility} ${spinning ? 'animate-spin-medium-reverse' : ''}`}>
        <span className="absolute bottom-0 left-1/4 h-1 w-1 rounded-full bg-accent/70" />
      </div>
      <div className={`absolute inset-0 transition-opacity duration-500 ${visibility} ${spinning ? 'animate-spin-slower' : ''}`}>
        <span className="absolute right-1 top-1/3 h-1 w-1 rounded-full bg-accent/40" />
      </div>
    </div>
  );
};

export const AnimatedStat = ({ value, label }: AnimatedStatProps) => {
  const { number: target, suffix } = parseTarget(value);
  const isNumeric = target > 0;

  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!media.matches) return;
    setReducedMotion(true);
    setCount(target);
    setDone(true);
  }, [target]);

  useEffect(() => {
    if (reducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (!started || !isNumeric || reducedMotion) return;

    const steps = 60;
    const interval = DURATION / steps;
    let step = 0;

    const timer = setInterval(() => {
      step += 1;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      setCount(Math.round(eased * target));
      if (step >= steps) {
        clearInterval(timer);
        setCount(target);
        setDone(true);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [started, target, isNumeric, reducedMotion]);

  useEffect(() => {
    if (!started || isNumeric || reducedMotion) return;
    const timer = setTimeout(() => setDone(true), DURATION + 200);
    return () => clearTimeout(timer);
  }, [started, isNumeric, reducedMotion]);

  const display = isNumeric ? `${count}${suffix}` : value;
  const spinning = started && !done && !isNumeric;

  return (
    <div ref={ref} role="group" className="flex flex-col items-center text-center" aria-label={`${value}. ${label}`}>
      <div className="relative mb-2 inline-flex items-center justify-center">
        {!isNumeric && <Orbit spinning={spinning} />}
        <span className="relative z-10 text-5xl font-bold tabular-nums text-accent md:text-6xl" aria-hidden="true">
          {display}
        </span>
      </div>
      <span className="text-sm font-medium text-primary" aria-hidden="true">
        {label}
      </span>
    </div>
  );
};
