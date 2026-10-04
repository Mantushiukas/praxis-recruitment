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
    description: 'You meet a curated shortlist aligned in competence and expectations.',
  },
  {
    number: '05',
    title: 'Offer & Alignment',
    description: 'We support negotiation and expectation setting for sustainable outcomes on both sides.',
  },
];

export const ProcessInline = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-gap bg-[#16161F] border-t border-white/[0.06]" ref={ref}>
      <div className="site-container">

        <div className="mb-14">
          <p className="eyebrow mb-3">Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter">
            Our Approach
          </h2>
          <p className="mt-3 text-gray-400 font-light max-w-md leading-relaxed">
            Structured hiring powered by practitioner insight.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`px-0 sm:px-6 lg:px-7 py-8 sm:py-0 first:pl-0 last:pr-0 transition-all duration-500 ease-out`}
              style={{
                transitionDelay: visible ? `${i * 90}ms` : '0ms',
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(12px)',
              }}
            >
              <span className="text-xs font-semibold text-accent/60 tracking-widest mb-4 block">
                {step.number}
              </span>
              <h3 className="text-sm font-semibold text-white mb-2.5 leading-snug tracking-tight">
                {step.title}
              </h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
