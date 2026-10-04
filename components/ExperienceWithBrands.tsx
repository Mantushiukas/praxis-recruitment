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
    <section className="section-gap bg-[#16161F]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow mb-4">Why Praxis</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-5">
              We recruit for roles{' '}
              <span className="text-accent">we understand</span>
            </h2>
            <p className="text-gray-400 font-light text-base leading-relaxed mb-8 max-w-md">
              Hiring Digital and IT talent requires insider perspective. That is what Praxis provides — we do not recruit for roles we cannot evaluate.
            </p>
            <a
              href="/how-we-work"
              className="text-sm font-semibold text-white/70 hover:text-white inline-flex items-center gap-2 transition-colors group"
            >
              See how we work
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right */}
          <div className="divide-y divide-white/[0.06]">
            {differentiators.map((item, index) => (
              <div key={index} className="py-6 first:pt-0 last:pb-0">
                <p className="text-sm font-semibold text-white mb-1.5 tracking-tight">
                  {item.label}
                </p>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
