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

export const WhatWeRecruit = () => {
  return (
    <section className="section-gap bg-white border-t border-black/[0.06]">
      <div className="site-container">

        <div className="mb-14">
          <p className="eyebrow mb-3">Specialisations</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tighter">
            What We Recruit
          </h2>
          <p className="mt-3 text-gray-500 font-light max-w-xl leading-relaxed">
            We focus on roles that directly impact growth, product, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/[0.06]">
          {specialties.map((item, index) => (
            <div key={index} className="bg-white p-8 group hover:bg-gray-50 transition-colors duration-200">
              <span className="text-xs font-semibold text-accent/70 uppercase tracking-widest mb-4 block">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-base font-semibold text-primary mb-2 tracking-tight leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
