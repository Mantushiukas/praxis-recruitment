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
  const intro = data?.intro ?? 'Hiring Digital and IT professionals requires structure — and insight.';
  const steps = (data?.steps ?? []).length > 0 ? (data?.steps ?? []) : defaultSteps;

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-primary pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 text-center">
            Our Process
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 text-center">
            {headline}
          </h1>
          {intro && (
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed text-center">
              {intro}
            </p>
          )}
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px bg-accent/20 hidden md:block"
              aria-hidden="true"
            />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-8">
                  {/* Step number bubble */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-white font-bold text-lg flex items-center justify-center z-10 shadow-md">
                    {step.stepNumber ?? index + 1}
                  </div>

                  {/* Content */}
                  <div className="pb-2 flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-primary mb-2 tracking-tight">
                      {step.title}
                    </h2>
                    {step.description && (
                      <p className="text-gray-500 font-light leading-relaxed mb-3">
                        {step.description}
                      </p>
                    )}
                    {(step.items ?? []).length > 0 && (
                      <ul className="space-y-2">
                        {(step.items ?? []).map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight mb-4">
            Ready to start?
          </h2>
          <p className="text-gray-500 font-light mb-8">
            Tell us about your role. We will get back to you within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:scale-105"
          >
            Get in Touch
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
