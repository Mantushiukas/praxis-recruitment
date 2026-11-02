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
    <section className={`section-gap ${dark ? 'bg-[#16161F] border-t border-white/[0.06]' : 'bg-accent-50 border-t border-accent/10'}`}>
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow mb-3">Why Praxis</p>
            <h2 className={`mb-0 text-3xl font-bold tracking-tighter md:text-4xl ${dark ? 'text-white' : 'text-primary'}`}>
              We recruit for roles{' '}
              <span className="text-accent">we understand</span>
            </h2>
            <p className={`mb-8 mt-3 max-w-md text-base font-light leading-relaxed ${dark ? 'text-gray-200' : 'text-gray-900'}`}>
              Hiring Digital and IT talent requires insider perspective. That is what Praxis provides — we do not recruit for roles we cannot evaluate.
            </p>
            <a
              href="/how-we-work"
              className={`text-sm font-semibold inline-flex items-center gap-2 transition-colors group ${dark ? 'text-white/70 hover:text-white' : 'text-accent hover:text-accent-600'}`}
            >
              See how we work
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {differentiators.map((item, index) => (
              <div
                key={item.label}
                className={`relative overflow-hidden rounded-lg border p-6 transition-colors duration-200 ${
                  dark
                    ? 'border-white/[0.1] bg-[#1e1d2b] hover:border-accent/45'
                    : 'border-black/[0.06] bg-white hover:border-accent/35'
                }`}
              >
                <span className="absolute inset-x-0 top-0 h-0.5 bg-accent/70" aria-hidden="true" />
                <span className="mb-4 block text-2xl font-bold text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className={`mb-2 text-base font-semibold leading-snug tracking-tight ${dark ? 'text-white' : 'text-primary'}`}>
                  {item.label}
                </h3>
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
