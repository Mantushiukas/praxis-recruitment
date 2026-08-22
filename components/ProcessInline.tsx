'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Define Real Success',
    description: 'We align on what exceptional looks like — technically and culturally — before we source a single candidate.',
  },
  {
    number: '02',
    title: 'Precision Sourcing',
    description: 'We proactively approach qualified professionals with context and credibility, not just job ads.',
  },
  {
    number: '03',
    title: 'Practitioner Screening',
    description: 'Candidates are assessed by someone who has done the work — evaluating depth, thinking, and long-term fit.',
  },
  {
    number: '04',
    title: 'Focused Shortlist',
    description: 'You meet a curated shortlist of candidates who are aligned in competence and expectations.',
  },
  {
    number: '05',
    title: 'Offer & Alignment',
    description: 'We support negotiation and expectation setting to ensure sustainable outcomes for both sides.',
  },
];

export const ProcessInline = () => {
  const [lineWidth, setLineWidth] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(Array(steps.length).fill(false));
  const sectionRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          // Phase 1: draw the line over 800ms
          const lineDuration = 800;
          const lineSteps = 60;
          const lineInterval = lineDuration / lineSteps;
          let lineStep = 0;

          const lineTimer = setInterval(() => {
            lineStep++;
            const progress = 1 - Math.pow(1 - lineStep / lineSteps, 2);
            setLineWidth(Math.min(progress * 100, 100));
            if (lineStep >= lineSteps) clearInterval(lineTimer);
          }, lineInterval);

          // Phase 2: stagger cards in after line starts
          steps.forEach((_, i) => {
            setTimeout(() => {
              setVisibleSteps((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, 400 + i * 150);
          });
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-primary" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Our Approach
          </h2>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
            Structured hiring powered by practitioner insight.
          </p>
        </div>

        <div className="relative">
          {/* Background track */}
          <div
            className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-white/10"
            aria-hidden="true"
          />
          {/* Animated fill line */}
          <div
            className="hidden lg:block absolute top-8 left-0 h-px bg-accent transition-none"
            style={{ width: `${lineWidth}%` }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative text-center lg:text-left transition-all duration-500 ease-out ${
                  visibleSteps[i]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
              >
                <div className="flex flex-col items-center lg:items-start gap-4">
                  <span
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-lg tracking-tight shrink-0 transition-all duration-500 ${
                      visibleSteps[i]
                        ? 'bg-accent text-white shadow-[0_0_20px_rgba(119,86,181,0.5)]'
                        : 'bg-accent/20 border border-accent/30 text-accent'
                    }`}
                  >
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-white font-bold text-base mb-2 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
