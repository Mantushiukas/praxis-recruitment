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
      <section className="bg-[#16161F] flex flex-col lg:block lg:relative overflow-hidden" style={{ minHeight: 'calc(100vh - 72px)' }}>

        {/* Mobile photo — stacked above content */}
        <div className={`relative w-full lg:hidden overflow-hidden transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
          style={{ height: 'min(56vw, 380px)' }}>
          <Image
            src="/images/founders.png"
            alt="Praxis Recruitment founders"
            fill priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* bottom fade into dark */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 45%, #16161F 100%)' }} />
        </div>

        {/* Desktop background photo — shifted right */}
        <div
          className={`hidden lg:block absolute top-0 bottom-0 transition-opacity duration-1000 delay-100 ${visible ? 'opacity-100' : 'opacity-0'}`}
          style={{ left: '42%', right: '-4%' }}
        >
          <Image
            src="/images/founders.png"
            alt="Praxis Recruitment founders"
            fill priority
            className="object-cover object-center"
            sizes="62vw"
          />
          {/* Left-edge blend */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to right, #16161F 0%, #16161Ff0 6%, #16161Fcc 16%, #16161F88 30%, #16161F33 50%, transparent 70%)'
          }} />
          {/* Bottom fade to logo strip */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 65%, #16161F 100%)' }} />
        </div>

        {/* Desktop top & bottom tint */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #16161F14 0%, transparent 12%)' }} />

        {/* ── Content ── */}
        <div className="relative z-10 bg-[#16161F] lg:bg-transparent flex flex-col justify-center"
          style={{ minHeight: 'inherit' }}>
          <div className="px-6 sm:px-8 lg:px-12 py-12 lg:py-0 lg:min-h-[calc(100vh-72px)] lg:flex lg:items-center">
            <div className="max-w-[520px]">

              {/* Eyebrow */}
              <p className={`eyebrow mb-6 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                Recruitment by Practitioners
              </p>

              {/* Headline */}
              <h1 className={`text-[2.6rem] sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.05] tracking-[-0.04em] transition-all duration-700 delay-75 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                We&apos;ve done the job.<br />
                <span className="text-accent">Now we find the people who can do it.</span>
              </h1>

              {/* Subtext */}
              <p className={`mt-6 text-base text-gray-400 leading-relaxed transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Our expertise comes from hands-on experience in{' '}
                <span className="text-gray-200 font-medium">Digital Marketing &amp; IT Security.</span>
              </p>

              {/* CTAs */}
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
        </div>
      </section>

      {/* ── LOGOS STRIP ── */}
      <section className="bg-[#16161F] border-t border-white/[0.06] py-12 overflow-hidden">
        <div className="px-6 sm:px-8 lg:px-12 mb-7">
          <p className="text-xs font-medium text-white/35 uppercase tracking-widest">
            Personal experience with leading organisations
          </p>
        </div>

        {/* Marquee */}
        <div className="relative flex overflow-hidden">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #16161F, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #16161F, transparent)' }} />

          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex items-center gap-14 animate-marquee whitespace-nowrap flex-shrink-0 px-7"
              aria-hidden={copy === 1}
            >
              {LOGOS.map((logo) => (
                <div key={logo.name} className="relative h-7 w-28 flex-shrink-0 opacity-30 hover:opacity-60 transition-opacity duration-300">
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
