'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const LOGOS = [
  { name: 'Amber Grid',      src: '/images/logos/Amber_Grid.png' },
  { name: 'Amstel',          src: '/images/logos/Amstel.png' },
  { name: 'Barclays',        src: '/images/logos/Barclays.png' },
  { name: 'CIDO',            src: '/images/logos/CIDO.png' },
  { name: 'Coral Travel',    src: '/images/logos/Coraltravel.png' },
  { name: 'Danske Bank',     src: '/images/logos/Danske_Bank.png' },
  { name: 'Dell',            src: '/images/logos/Dell.png' },
  { name: 'Desperados',      src: '/images/logos/Desperados.png' },
  { name: 'Gedeon Richter',  src: '/images/logos/Gedeon_Richter.png' },
  { name: 'Glenfiddich',     src: '/images/logos/Glenfiddich.png' },
  { name: 'Heineken',        src: '/images/logos/Heineken.png' },
  { name: 'HP',              src: '/images/logos/HP.png' },
  { name: 'Jack Daniels',    src: '/images/logos/Jack_Daniels.png' },
  { name: 'Kalnapilis',      src: '/images/logos/Kalnapilis_2.png' },
  { name: 'Kauno Grudai',    src: '/images/logos/Kauno_Grudai.png' },
  { name: 'KRKA',            src: '/images/logos/KRKA.png' },
  { name: 'Lidl',            src: '/images/logos/Lidl.png' },
  { name: 'Nestlé',          src: '/images/logos/Nestle.png' },
  { name: 'Pepsi',           src: '/images/logos/Pepsi.png' },
  { name: 'Tauras',          src: '/images/logos/Tauras_0_0.png' },
  { name: 'Telia',           src: '/images/logos/Telia.png' },
  { name: 'Tullamore DEW',   src: '/images/logos/Tullamore_DEW.png' },
  { name: 'Vilkmerge',       src: '/images/logos/Vilkmerge.png' },
  { name: 'Volfas Engelman', src: '/images/logos/Volfas_Engelman_Nealkoholinis.png' },
];

export const LandingHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#16161F] relative overflow-hidden" style={{ minHeight: 'calc(100vh - 72px)' }}>

        {/* Desktop photo — absolute, right half */}
        <div
          className={`hidden lg:block absolute inset-y-0 right-0 w-[50%] transition-opacity duration-1000 delay-100 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src="/images/founders.png"
            alt="Praxis Recruitment founders"
            fill priority
            className="object-cover object-center"
            sizes="50vw"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to right, #16161F 0%, #16161Fdd 8%, #16161F99 22%, #16161F44 45%, transparent 70%)'
          }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, #16161F 100%)' }} />
        </div>

        {/* Mobile photo */}
        <div className={`relative w-full lg:hidden overflow-hidden transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
          style={{ height: 'min(56vw, 380px)' }}>
          <Image
            src="/images/founders.png"
            alt="Praxis Recruitment founders"
            fill priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 45%, #16161F 100%)' }} />
        </div>

        {/* ── Content — same site-container as header & footer ── */}
        <div className="site-container relative z-10 flex items-center" style={{ minHeight: 'calc(100vh - 72px)' }}>
          <div className="max-w-[520px] py-16 lg:py-0">

            <p className={`eyebrow mb-6 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              Recruitment by Practitioners
            </p>

            <h1 className={`text-[2rem] sm:text-4xl lg:text-[2.6rem] font-bold text-white leading-[1.08] tracking-[-0.04em] transition-all duration-700 delay-75 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              We&apos;ve done the job. <span className="text-accent">Now we find the people who can do it.</span>
            </h1>

            <p className={`mt-6 text-base text-gray-200 leading-relaxed transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Our expertise comes from hands-on experience in{' '}
                <span className="text-white font-medium">Digital Marketing &amp; IT Security.</span>
            </p>

            <div className={`mt-8 flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Link href="/for-companies" className="btn-primary px-7 py-3.5 text-sm justify-center sm:justify-start">
                For Companies <span aria-hidden="true" className="ml-1">→</span>
              </Link>
              <Link href="/for-talent" className="btn-ghost-dark px-7 py-3.5 text-sm justify-center sm:justify-start">
                For Talent
              </Link>
            </div>

          </div>
        </div>

      </section>

      {/* ── LOGOS STRIP ── */}
      <section className="bg-[#0f0f18] py-10 overflow-hidden">
        <div className="site-container mb-6 flex items-center gap-4">
          <span className="w-6 h-px bg-accent flex-shrink-0" />
          <p className="text-xs font-semibold text-accent uppercase tracking-widest">
            Personal experience with leading organisations
          </p>
        </div>

        {/* Marquee */}
        <div className="relative flex overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #0f0f18, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #0f0f18, transparent)' }} />

          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex items-center gap-14 animate-marquee whitespace-nowrap flex-shrink-0 px-7"
              aria-hidden={copy === 1}
            >
              {LOGOS.map((logo) => (
                <div key={logo.name} className="relative h-8 w-28 flex-shrink-0 opacity-50 hover:opacity-90 transition-opacity duration-300">
                  <Image src={logo.src} alt={logo.name} fill className="object-contain" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
