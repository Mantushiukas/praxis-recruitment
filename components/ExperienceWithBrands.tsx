'use client';

const differentiators = [
  {
    label: 'Practitioners, not generalists',
    detail: 'Our consultants have worked in the roles they recruit for — marketing, tech, product.',
  },
  {
    label: 'No templated shortlists',
    detail: 'Every candidate is individually reviewed and assessed for your specific context.',
  },
  {
    label: 'Full transparency',
    detail: 'You always know who we approached, what we found, and why we recommend each candidate.',
  },
  {
    label: 'Long-term accountability',
    detail: 'We care about outcomes after placement, not just filling the role.',
  },
];

export const ExperienceWithBrands = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Statement */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-6">
              We recruit for roles{' '}
              <span className="text-accent">we understand</span>
            </h2>
            <p className="text-gray-500 font-light text-lg leading-relaxed mb-8">
              Hiring Digital and IT talent requires insider perspective. That is what Praxis provides — we do not recruit for roles we cannot evaluate.
            </p>
            <a
              href="/how-we-work"
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
              aria-label="See how we work"
            >
              See how we work
              <span>→</span>
            </a>
          </div>

          {/* Right: Differentiators */}
          <div className="space-y-5">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 bg-white rounded-2xl p-5 border border-gray-100 hover:border-accent/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <p className="font-semibold text-primary text-sm tracking-tight">
                    {item.label}
                  </p>
                  <p className="text-gray-500 text-sm font-light mt-1 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
