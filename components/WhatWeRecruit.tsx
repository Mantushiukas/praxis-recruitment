'use client';

const specialties = [
  {
    title: 'Cyber Security & Compliance',
    description: 'DevSecOps specialists, security architects, compliance managers.',
  },
  {
    title: 'Delivery & Change Leadership',
    description: 'Program directors, portfolio managers, PMO & change specialists.',
  },
  {
    title: 'Marketing & Growth',
    description: 'Performance marketers, growth specialists, paid media experts.',
  },
  {
    title: 'Product & Design',
    description: 'Product managers, UX/UI designers, product leaders.',
  },
];

interface WhatWeRecruitProps {
  dark?: boolean;
}

export const WhatWeRecruit = ({ dark = false }: WhatWeRecruitProps) => {
  return (
    <section className={`section-gap ${dark ? 'bg-[#16161F] border-t border-white/[0.06]' : 'bg-white border-t border-black/[0.06]'}`}>
      <div className="site-container">

        <div className="mb-14">
          <p className="eyebrow mb-3">Specialisations</p>
          <h2 className={`text-3xl md:text-4xl font-bold tracking-tighter ${dark ? 'text-white' : 'text-primary'}`}>
            What We Recruit
          </h2>
          <p className={`mt-3 max-w-xl text-base font-light leading-relaxed ${dark ? 'text-gray-200' : 'text-gray-900'}`}>
            We focus on roles that directly impact growth, product, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-lg p-8 transition-colors duration-200 ${
                dark
                  ? 'border border-white/[0.1] bg-[#1e1d2b] hover:border-accent/45 hover:bg-[#242333]'
                  : 'border border-black/[0.06] bg-accent-50 hover:border-accent/30'
              }`}
            >
              <span className="absolute inset-x-0 top-0 h-0.5 bg-accent/70" aria-hidden="true" />
              <span className="mb-4 block text-2xl font-bold text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className={`mb-2 text-base font-semibold leading-snug tracking-tight ${dark ? 'text-white' : 'text-primary'}`}>
                {item.title}
              </h3>
              <p className={`text-sm font-light leading-relaxed ${dark ? 'text-gray-200' : 'text-gray-900'}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
