'use client';

import { useEffect, useRef, useState } from 'react';
import type { SanityProcessStep } from '@/types/sanity';

type Party = 'you' | 'us';

interface StepMeta {
  phase: string;
  outcome: string;
  iconPath: string;
  parts: { party: Party; text: string }[];
}

const stepMeta: StepMeta[] = [
  {
    phase: 'Discover',
    outcome: 'Success criteria agreed before any search starts.',
    iconPath: 'M3 3v18M3 4h13l-2 4 2 4H3',
    parts: [
      { party: 'you', text: 'Share the brief and what great looks like' },
      { party: 'us', text: 'Sharpen it into clear criteria' },
    ],
  },
  {
    phase: 'Source',
    outcome: 'Qualified professionals approached with real context.',
    iconPath: 'M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z',
    parts: [{ party: 'us', text: 'Praxis leads the search end to end' }],
  },
  {
    phase: 'Assess',
    outcome: 'Candidates judged by someone who knows the work.',
    iconPath:
      'M9 12l2 2 4-4M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
    parts: [{ party: 'us', text: 'Praxis screens depth, thinking and fit' }],
  },
  {
    phase: 'Present',
    outcome: 'A focused shortlist — no noise.',
    iconPath:
      'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    parts: [
      { party: 'us', text: 'Present only aligned candidates' },
      { party: 'you', text: 'Meet the shortlist' },
    ],
  },
  {
    phase: 'Close',
    outcome: 'An accepted offer with expectations aligned.',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    parts: [
      { party: 'us', text: 'Support negotiation and alignment' },
      { party: 'you', text: 'Make the final decision' },
    ],
  },
];

const partyLabel: Record<Party, string> = { you: 'Your part', us: 'Our part' };

const partyPill: Record<Party, string> = {
  you: 'border border-accent/40 bg-white text-accent',
  us: 'border border-accent bg-accent text-white',
};

const cardPlacement = [
  'lg:col-start-1 lg:pr-16',
  'lg:col-start-2 lg:pl-16',
];

interface ProcessTimelineProps {
  steps: SanityProcessStep[];
  outcome: string;
}

export const ProcessTimeline = ({ steps, outcome }: ProcessTimelineProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setActiveIndex(Number((entry.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );

    stepRefs.current.forEach((element) => element && observer.observe(element));
    return () => observer.disconnect();
  }, [steps.length]);

  const handleToggleDetails = (index: number) => {
    setOpenIndexes((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  };

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-3 text-xs font-semibold" aria-label="Legend">
        <span className={`rounded-full px-3 py-1 ${partyPill.you}`}>Your part</span>
        <span className={`rounded-full px-3 py-1 ${partyPill.us}`}>Our part</span>
      </div>

      <ol className="relative">
        {steps.map((step, index) => {
          const meta = stepMeta[index];
          const isActive = index === activeIndex;
          const isDone = index < activeIndex;
          const isOpen = openIndexes.includes(index);
          const hasDetails = Boolean(step.description) || (step.items ?? []).length > 0;
          const detailsId = `step-details-${index + 1}`;
          const stepNumber = String(step.stepNumber ?? index + 1).padStart(2, '0');

          return (
            <li
              key={step.title ?? index}
              ref={(element) => {
                stepRefs.current[index] = element;
              }}
              data-index={index}
              id={`step-${index + 1}`}
              className="relative pb-8 pl-14 lg:grid lg:grid-cols-2 lg:pl-0"
            >
              {/* Progress rail */}
              <span
                className={`absolute bottom-0 left-[18px] top-10 w-1 rounded-full transition-colors duration-500 lg:left-1/2 lg:-ml-0.5 ${
                  isDone ? 'bg-accent' : 'bg-accent/20'
                }`}
                aria-hidden="true"
              />

              {/* Marker */}
              <span
                className={`absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-bold tracking-wide transition-all duration-300 lg:left-1/2 lg:-ml-5 ${
                  isActive
                    ? 'scale-110 border-accent bg-accent text-white shadow-[0_0_0_6px_rgba(119,86,181,0.18)]'
                    : isDone
                      ? 'border-accent bg-white text-accent'
                      : 'border-accent/30 bg-white text-accent/60'
                }`}
                aria-current={isActive ? 'step' : undefined}
              >
                {stepNumber}
              </span>

              {/* Card */}
              <div className={cardPlacement[index % 2]}>
                <div
                  className={`relative overflow-hidden rounded-lg border bg-white p-6 transition-colors duration-300 ${
                    isActive ? 'border-accent/45' : 'border-black/[0.06]'
                  }`}
                >
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-accent/70" aria-hidden="true" />

                  <div className="mb-3 flex items-center justify-between gap-4">
                    <p className="eyebrow">{meta?.phase ?? `Step ${stepNumber}`}</p>
                    {meta && (
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={meta.iconPath} />
                        </svg>
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-primary">{step.title}</h3>
                  <p className="mt-1.5 text-sm font-light leading-relaxed text-gray-900">
                    {meta?.outcome ?? step.description}
                  </p>

                  {meta && (
                    <ul className="mt-4 space-y-2">
                      {meta.parts.map((part) => (
                        <li key={part.text} className="flex items-start gap-3 text-sm font-light text-gray-900">
                          <span
                            className={`mt-0.5 w-[4.75rem] flex-shrink-0 rounded-full px-2 py-0.5 text-center text-[11px] font-semibold ${partyPill[part.party]}`}
                          >
                            {partyLabel[part.party]}
                          </span>
                          {part.text}
                        </li>
                      ))}
                    </ul>
                  )}

                  {hasDetails && (
                    <>
                      <button
                        type="button"
                        onClick={() => handleToggleDetails(index)}
                        aria-expanded={isOpen}
                        aria-controls={detailsId}
                        aria-label={`${isOpen ? 'Hide' : 'Show'} details for ${step.title}`}
                        className="mt-5 inline-flex items-center gap-2 rounded text-sm font-semibold text-accent transition-colors hover:text-accent-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                      >
                        {isOpen ? 'Hide details' : 'View details'}
                        <svg
                          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isOpen && (
                        <div id={detailsId} className="mt-4 border-t border-black/[0.06] pt-4">
                          {step.description && meta && (
                            <p className="text-sm font-light leading-relaxed text-gray-900">{step.description}</p>
                          )}
                          {(step.items ?? []).length > 0 && (
                            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                              {(step.items ?? []).map((item) => (
                                <li
                                  key={item}
                                  className="flex items-center gap-2 rounded-md bg-accent-50 px-3 py-2 text-sm font-medium text-primary"
                                >
                                  <svg
                                    className="h-4 w-4 flex-shrink-0 text-accent"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                  </svg>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </li>
          );
        })}

        {/* Outcome — final marker on the rail */}
        <li
          ref={(element) => {
            stepRefs.current[steps.length] = element;
          }}
          data-index={steps.length}
          id="step-outcome"
          className="relative pl-14 lg:grid lg:grid-cols-2 lg:pl-0"
        >
          <span
            className={`absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 lg:left-1/2 lg:-ml-5 ${
              activeIndex === steps.length
                ? 'scale-110 border-accent bg-accent text-white shadow-[0_0_0_6px_rgba(119,86,181,0.18)]'
                : 'border-accent/30 bg-white text-accent/60'
            }`}
            aria-hidden="true"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </span>

          <div className="lg:col-span-2 lg:pt-14 lg:text-center">
            <div className="relative overflow-hidden rounded-lg border border-accent/40 bg-white p-6 lg:mx-auto lg:max-w-xl">
              <span className="absolute inset-x-0 top-0 h-0.5 bg-accent" aria-hidden="true" />
              <p className="eyebrow mb-2">The outcome</p>
              <p className="text-lg font-semibold leading-snug tracking-tight text-primary">{outcome}</p>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};
