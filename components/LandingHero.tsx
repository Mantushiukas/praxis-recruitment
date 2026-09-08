'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const LOGOS = [
  { name: 'Amber Grid',           src: '/images/logos/Amber_Grid.png' },
  { name: 'Amstel',               src: '/images/logos/Amstel.png' },
  { name: 'Barclays',             src: '/images/logos/Barclays.png' },
  { name: 'CIDO',                 src: '/images/logos/CIDO.png' },
  { name: 'Coral Travel',         src: '/images/logos/Coraltravel.png' },
  { name: 'Danske Bank',          src: '/images/logos/Danske_Bank.png' },
  { name: 'Dell',                 src: '/images/logos/Dell.png' },
  { name: 'Desperados',           src: '/images/logos/Desperados.png' },
  { name: 'Gedeon Richter',       src: '/images/logos/Gedeon_Richter.png' },
  { name: 'Glenfiddich',          src: '/images/logos/Glenfiddich.png' },
  { name: 'Heineken',             src: '/images/logos/Heineken.png' },
  { name: 'HP',                   src: '/images/logos/HP.png' },
  { name: 'Jack Daniels',         src: '/images/logos/Jack_Daniels.png' },
  { name: 'Kalnapilis',           src: '/images/logos/Kalnapilis_2.png' },
  { name: 'Kauno Grudai',         src: '/images/logos/Kauno_Grudai.png' },
  { name: 'KRKA',                 src: '/images/logos/KRKA.png' },
  { name: 'Lidl',                 src: '/images/logos/Lidl.png' },
  { name: 'Nestlé',               src: '/images/logos/Nestle.png' },
  { name: 'Pepsi',                src: '/images/logos/Pepsi.png' },
  { name: 'Tauras',               src: '/images/logos/Tauras_0_0.png' },
  { name: 'Telia',                src: '/images/logos/Telia.png' },
  { name: 'Tullamore DEW',        src: '/images/logos/Tullamore_DEW.png' },
  { name: 'Vilkmerge',            src: '/images/logos/Vilkmerge.png' },
  { name: 'Volfas Engelman',      src: '/images/logos/Volfas_Engelman_Nealkoholinis.png' },
];

export const LandingHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="flex flex-col lg:block lg:relative lg:min-h-[calc(100vh-5rem)] overflow-hidden">

        {/* ── MOBILE: photo on top ── */}
        <div className={`relative w-full h-[55vw] min-h-[260px] max-h-[420px] lg:hidden transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src="/images/founders.png"
            alt="Praxis Recruitment founders"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Purple tint */}
          <div className="absolute inset-0 bg-[#1a1040]/40" />
          {/* Bottom fade into dark content */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, #16161F 100%)' }} />
        </div>

        {/* ── DESKTOP: full-bleed photo shifted right ── */}
        <div className={`hidden lg:block absolute top-0 bottom-0 transition-opacity duration-1000 delay-200 ${visible ? 'opacity-100' : 'opacity-0'}`}
          style={{ left: '30%', right: '-5%' }}>
          <Image
            src="/images/founders.png"
            alt="Praxis Recruitment founders"
            fill
            priority
            className="object-cover object-center"
            sizes="75vw"
          />
        </div>

        {/* Desktop gradients */}
        <div className="hidden lg:block absolute inset-0" style={{ background: 'linear-gradient(to right, #23232F 0%, #23232F 28%, #23232Ff5 38%, #23232Fcc 50%, #23232F77 65%, transparent 85%)' }} />
        <div className="hidden lg:block absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 70%, #16161F 100%)' }} />

        {/* ── Content (shared) ── */}
        <div className="relative z-10 bg-[#16161F] lg:bg-transparent lg:min-h-[calc(100vh-5rem)] lg:flex lg:items-center pt-8 pb-10 lg:py-20">
          <div className="max-w-lg px-6 sm:px-10 lg:px-16">

            <div className={`transition-all duration-600 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="text-accent font-semibold text-xs uppercase tracking-widest">
                Recruitment by Practitioners
              </span>
            </div>

            <h1 className={`mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] transition-all duration-700 ease-out delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <span className="text-white">We&apos;ve done the job.</span>
              <br />
              <span className="text-accent">Now we find the people who can do it.</span>
            </h1>

            <p className={`mt-5 text-lg md:text-xl text-gray-300 font-light leading-relaxed transition-all duration-700 ease-out delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              Our expertise comes from hands-on experience in{' '}
              <strong className="text-white font-semibold">Digital Marketing &amp; IT Security.</strong>
            </p>

            <div className={`mt-7 flex flex-col sm:flex-row gap-3 transition-all duration-700 ease-out delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <Link
                href="/for-companies"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:scale-105"
              >
                For Companies <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/for-talent"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded-xl transition-all"
              >
                For Talent
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGOS MARQUEE ── */}
      <section className="bg-[#16161F] border-t border-white/5 py-10 overflow-hidden">
        <div className="px-6 sm:px-10 lg:px-16 mb-6">
          <p className="text-accent font-semibold text-sm">
            Personal experience with leading organisations.
          </p>
        </div>

        {/* Running line */}
        <div className="relative flex overflow-hidden">
          {/* Duplicate for seamless loop */}
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex items-center gap-12 animate-marquee whitespace-nowrap flex-shrink-0 px-6"
              aria-hidden={copy === 1}
            >
              {LOGOS.map((logo) => (
                <div key={logo.name} className="relative h-8 w-28 flex-shrink-0">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain opacity-40 hover:opacity-70 transition-opacity"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
