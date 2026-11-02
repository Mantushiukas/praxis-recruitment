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
          <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl">
            Our Approach
          </h2>
          <p className="mt-3 max-w-md text-base font-light leading-relaxed text-gray-200">
            Structured hiring powered by practitioner insight.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="group relative overflow-hidden rounded-lg border border-white/[0.1] bg-[#1e1d2b] p-8 transition-all duration-500 ease-out hover:border-accent/45 hover:bg-[#242333]"
              style={{
                transitionDelay: visible ? `${i * 90}ms` : '0ms',
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(12px)',
              }}
            >
              <span className="absolute inset-x-0 top-0 h-0.5 bg-accent/70" aria-hidden="true" />
              <span className="mb-4 block text-2xl font-bold text-accent">
                {step.number}
              </span>
              <h3 className="mb-2 text-base font-semibold leading-snug tracking-tight text-white">
                {step.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-gray-200">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
