'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const LandingHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="min-h-[calc(100vh-4rem)] bg-[#2e2d3a] flex flex-col lg:flex-row overflow-hidden">

      {/* LEFT — content */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-0">

        <div className={`transition-all duration-600 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-accent font-semibold text-xs uppercase tracking-widest">
            Recruitment by Practitioners
          </span>
        </div>

        <h1 className={`mt-5 text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-5xl font-bold text-white tracking-tight leading-[1.15] transition-all duration-700 ease-out delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          We hire digital & tech talent that{' '}
          <span className="text-accent">drives results.</span>
        </h1>

        <p className={`mt-6 text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-md transition-all duration-700 ease-out delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          Built by practitioners with 25+ years of combined experience.
          <br />
          We know what great looks like — because we&apos;ve done the job.
        </p>

        <div className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-700 ease-out delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <Link
            href="/for-companies"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:scale-105"
          >
            For Companies
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/for-talent"
            className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded-xl transition-all"
          >
            For Talent
          </Link>
        </div>

        <p className={`mt-10 text-xs text-gray-500 font-light transition-all duration-700 ease-out delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          Trusted by companies across Europe
        </p>
      </div>

      {/* RIGHT — photo */}
      <div className={`relative w-full lg:w-[55%] min-h-[340px] lg:min-h-full shrink-0 transition-opacity duration-1000 ease-out delay-200 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <Image
          src="/images/founders.png"
          alt="Praxis Recruitment founders"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 55vw"
        />
        {/* Smooth left blend */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #2e2d3a 0%, #2e2d3aCC 10%, #2e2d3a88 25%, #2e2d3a33 45%, transparent 65%)' }}
        />
        {/* Top & bottom soft vignette */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #2e2d3a22 0%, transparent 20%, transparent 80%, #2e2d3a44 100%)' }} />
      </div>

    </section>
  );
};
