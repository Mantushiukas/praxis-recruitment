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

interface ExperienceWithBrandsProps {
  dark?: boolean;
}

export const ExperienceWithBrands = ({ dark = true }: ExperienceWithBrandsProps) => {
  return (
    <section className={`section-gap ${dark ? 'bg-[#16161F] border-t border-white/[0.06]' : 'bg-white border-t border-black/[0.06]'}`}>
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow mb-4">Why Praxis</p>
            <h2 className={`text-3xl md:text-4xl font-bold tracking-tighter mb-5 ${dark ? 'text-white' : 'text-primary'}`}>
              We recruit for roles{' '}
              <span className="text-accent">we understand</span>
            </h2>
            <p className={`font-light text-base leading-relaxed mb-8 max-w-md ${dark ? 'text-gray-200' : 'text-gray-900'}`}>
              Hiring Digital and IT talent requires insider perspective. That is what Praxis provides — we do not recruit for roles we cannot evaluate.
            </p>
            <a
              href="/how-we-work"
              className={`text-sm font-semibold inline-flex items-center gap-2 transition-colors group ${dark ? 'text-white/70 hover:text-white' : 'text-gray-500 hover:text-primary'}`}
            >
              See how we work
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right */}
          <div className={`divide-y ${dark ? 'divide-white/[0.06]' : 'divide-black/[0.06]'}`}>
            {differentiators.map((item, index) => (
              <div key={index} className="py-6 first:pt-0 last:pb-0">
                <p className={`text-sm font-semibold mb-1.5 tracking-tight ${dark ? 'text-white' : 'text-primary'}`}>
                  {item.label}
                </p>
                <p className={`text-sm font-light leading-relaxed ${dark ? 'text-gray-200' : 'text-gray-900'}`}>
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
