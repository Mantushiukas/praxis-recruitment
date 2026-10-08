import { getProcessPage } from '@/lib/sanity';
import Link from 'next/link';
import type { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'How We Work — Praxis Recruitment',
  description: 'Our structured, practitioner-led recruitment process for digital and tech roles.',
};

const defaultSteps = [
  {
    stepNumber: 1,
    title: 'Define Real Success',
    description: 'We clarify what success looks like in your company — technically and culturally — before we approach a single candidate.',
    items: [
      'What success looks like in your company',
      'Required technical and strategic depth',
      'Performance expectations',
    ],
  },
  {
    stepNumber: 2,
    title: 'Precision Sourcing',
    description: 'We proactively approach qualified professionals with context and credibility — not just job ads.',
    items: [],
  },
  {
    stepNumber: 3,
    title: 'Practitioner Screening',
    description: 'Candidates are evaluated by someone who understands their daily work. We assess:',
    items: [
      'Technical depth',
      'Strategic thinking',
      'Communication maturity',
      'Long-term fit',
    ],
  },
  {
    stepNumber: 4,
    title: 'Focused Shortlist',
    description: 'You meet candidates who are aligned in competence and expectations. No noise.',
    items: [],
  },
  {
    stepNumber: 5,
    title: 'Offer & Alignment',
    description: 'We support negotiation and expectation alignment to ensure sustainable hiring outcomes for both sides.',
    items: [],
  },
];

export default async function HowWeWorkPage() {
  const data = await getProcessPage();

  const headline = data?.headline ?? 'How We Work';
  const intro    = data?.intro    ?? 'Hiring Digital Marketing and IT Security professionals requires structure — and insight.';
  const steps    = (data?.steps ?? []).length > 0 ? (data?.steps ?? []) : defaultSteps;

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-[#16161F] pt-20 pb-24">
        <div className="site-container">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">Our Process</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tightest leading-[1.02] mb-6">
              {headline}
            </h1>
            {intro && (
              <p className="text-lg text-gray-200 font-light leading-relaxed max-w-lg">
                {intro}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-gap border-t border-black/[0.06]">
        <div className="site-container">
          <div className="max-w-2xl">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-10 pb-14 last:pb-0 relative">

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[19px] top-10 bottom-0 w-px bg-black/[0.07]" aria-hidden="true" />
                )}

                {/* Number */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-accent/30 text-accent flex items-center justify-center text-xs font-bold tracking-wide z-10 bg-white">
                  {String(step.stepNumber ?? index + 1).padStart(2, '0')}
                </div>

                {/* Content */}
                <div className="pt-1.5">
                  <h2 className="text-xl font-semibold text-primary mb-2 tracking-tight">
                    {step.title}
                  </h2>
                  {step.description && (
                    <p className="text-gray-900 font-light leading-relaxed text-base mb-3">
                      {step.description}
                    </p>
                  )}
                  {(step.items ?? []).length > 0 && (
                    <ul className="space-y-1.5 mt-3">
                      {(step.items ?? []).map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-900 font-light">
                          <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gap-sm bg-[#16161F] border-t border-white/[0.06]">
        <div className="site-container">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-1">
                Ready to start?
              </h2>
              <p className="text-gray-200 font-light text-sm">
                Tell us about your role. We will get back to you within 24 hours.
              </p>
            </div>
            <Link href="/contact" className="btn-primary px-7 py-3.5 flex-shrink-0">
              Get in Touch <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
