import Link from 'next/link';
import { WhatWeRecruit } from '@/components/WhatWeRecruit';
import { ExperienceWithBrands } from '@/components/ExperienceWithBrands';
import { ProcessInline } from '@/components/ProcessInline';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Companies — Praxis Recruitment',
  description: 'Hire specialists in digital marketing, technology, and product. Recruitment by practitioners who understand your roles.',
};

export default function ForCompaniesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#16161F] pt-20 pb-24">
        <div className="site-container">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">For Companies</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tightest leading-[1.02] mb-6">
              Build your digital and tech team — with confidence
            </h1>
            <p className="text-lg text-gray-200 font-light leading-relaxed mb-10 max-w-lg">
              Praxis recruits marketing, technology, and product specialists for companies that cannot afford to hire the wrong person.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary px-7 py-3.5">
                Start Hiring <span aria-hidden="true">→</span>
              </Link>
              <Link href="/how-we-work" className="btn-ghost-dark px-7 py-3.5">
                How We Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats — LIGHT */}
      <div className="bg-white border-t border-black/[0.06]">
        <div className="site-container py-16">
          <div className="grid grid-cols-3 gap-8">
            {[
              { value: '27+', label: 'Years combined experience' },
              { value: '100%', label: 'Practitioner-assessed roles' },
              { value: 'EU', label: 'European market coverage' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <span className="text-5xl md:text-6xl font-bold text-accent mb-2">{stat.value}</span>
                <span className="text-sm font-medium text-primary">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specialisations — DARK */}
      <WhatWeRecruit dark />

      {/* Why Praxis — LIGHT */}
      <ExperienceWithBrands dark={false} />

      {/* Process — DARK (default) */}
      <ProcessInline />

      {/* CTA — LIGHT */}
      <section className="section-gap bg-white border-t border-black/[0.06]">
        <div className="site-container">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tighter mb-4">
              Ready to find your next hire?
            </h2>
            <p className="text-gray-900 font-light text-base leading-relaxed mb-8">
              Tell us about the role. We will come back to you within 24 hours with an honest assessment of how we can help.
            </p>
            <Link href="/contact" className="btn-primary px-7 py-3.5">
              Get in Touch <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
