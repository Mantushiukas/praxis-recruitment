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
          <p className={`mt-3 font-light max-w-xl leading-relaxed ${dark ? 'text-gray-200' : 'text-gray-900'}`}>
            We focus on roles that directly impact growth, product, and performance.
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px ${dark ? 'bg-white/[0.06]' : 'bg-black/[0.06]'}`}>
          {specialties.map((item, index) => (
            <div key={index} className={`p-8 group transition-colors duration-200 ${dark ? 'bg-[#16161F] hover:bg-[#1c1c2a]' : 'bg-white hover:bg-gray-50'}`}>
              <span className="text-2xl font-bold text-accent/70 mb-4 block">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className={`text-base font-semibold mb-2 tracking-tight leading-snug ${dark ? 'text-white' : 'text-primary'}`}>
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
