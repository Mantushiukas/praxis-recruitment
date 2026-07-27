import Link from 'next/link';
import { WhatWeRecruit } from '@/components/WhatWeRecruit';
import { ExperienceWithBrands } from '@/components/ExperienceWithBrands';
import { ProcessInline } from '@/components/ProcessInline';
import { AnimatedStat } from '@/components/AnimatedStat';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Companies — Praxis Recruitment',
  description: 'Hire specialists in digital marketing, technology, and product. Recruitment by practitioners who understand your roles.',
};

export default function ForCompaniesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              For Companies
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Build your digital and tech team — with confidence
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-2xl">
              Praxis recruits marketing, technology, and product specialists for companies that cannot afford to hire the wrong person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:scale-105"
              >
                Start Hiring
                <span>→</span>
              </Link>
              <Link
                href="/how-we-work"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-all"
              >
                How We Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { value: '12+', label: 'Years combined industry experience' },
              { value: '100%', label: 'Roles assessed by practitioners' },
              { value: 'EU', label: 'Coverage across European markets' },
            ].map((stat) => (
              <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </div>

      {/* What we recruit */}
      <WhatWeRecruit />

      {/* Why Praxis */}
      <ExperienceWithBrands />

      {/* Process */}
      <ProcessInline />

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-6">
            Ready to find your next hire?
          </h2>
          <p className="text-gray-500 font-light text-lg mb-10">
            Tell us about the role. We will come back to you within 24 hours with an honest assessment of how we can help.
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
    </>
  );
}
