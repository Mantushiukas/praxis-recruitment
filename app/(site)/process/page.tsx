import { getProcessPage } from '@/lib/sanity';
import type { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Our Process | Praxis Recruitment',
};

const defaultSteps = [
  {
    stepNumber: 1,
    title: 'Define Real Success',
    description: 'We clarify:',
    items: [
      'What success looks like in your company',
      'Required technical and strategic depth',
      'Performance expectations',
    ],
  },
  {
    stepNumber: 2,
    title: 'Precision Sourcing',
    description: 'We proactively approach qualified professionals with context and credibility.',
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
    description: 'You meet candidates who are aligned in competence and expectations.',
    items: [],
  },
  {
    stepNumber: 5,
    title: 'Offer & Alignment',
    description: 'We support negotiation and expectation alignment to ensure sustainable hiring outcomes.',
    items: [],
  },
];

export default async function ProcessPage() {
  const data = await getProcessPage();

  const headline = data?.headline ?? 'Our Approach';
  const intro = data?.intro ?? 'Hiring Digital and IT professionals requires structure — and insight.';
  const steps = (data?.steps ?? []).length > 0 ? (data?.steps ?? []) : defaultSteps;

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            {headline}
          </h1>
          {intro && (
            <p className="text-xl md:text-2xl text-white font-semibold max-w-2xl mx-auto leading-relaxed">
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
            <div className="absolute left-6 top-0 bottom-0 w-px bg-accent/20 hidden md:block" />

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
                      <p className="text-gray-600 font-normal leading-relaxed mb-3">
                        {step.description}
                      </p>
                    )}
                    {(step.items ?? []).length > 0 && (
                      <ul className="space-y-2">
                        {(step.items ?? []).map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
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
    </main>
  );
}
