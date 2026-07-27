'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export const LandingHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="min-h-[calc(100vh-4rem)] bg-primary flex flex-col items-center justify-center px-6 py-8">

      {/* Headline */}
      <div
        className={`text-center mb-8 max-w-2xl transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
          Recruitment by Practitioners
        </h1>
        <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
          Connecting high-performing talent with companies building digital and tech teams.
        </p>
      </div>

      {/* Two paths */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">

        {/* For Companies */}
        <div
          className={`transition-all duration-700 ease-out delay-150 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link
            href="/for-companies"
            aria-label="For Companies — hire specialists"
            className="group relative block rounded-2xl p-px overflow-hidden
              bg-gradient-to-br from-accent/60 via-white/5 to-transparent
              hover:from-accent hover:via-accent/60 hover:to-accent/20
              transition-all duration-300 hover:shadow-[0_0_32px_rgba(119,86,181,0.35)] hover:scale-105"
          >
            <div className="relative bg-primary rounded-2xl p-8 text-center group-hover:bg-[#1e1e2a] transition-colors duration-300">
              <div className="w-14 h-14 rounded-xl bg-accent/20 group-hover:bg-accent flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                <svg
                  className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">For Companies</h2>
              <p className="text-gray-300 group-hover:text-white/90 font-light text-sm leading-relaxed transition-colors">
                Hire specialists in marketing, technology, product, and data.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-accent group-hover:text-white font-semibold text-sm transition-colors">
                Start Hiring
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* For Talent */}
        <div
          className={`transition-all duration-700 ease-out delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link
            href="/for-talent"
            aria-label="For Talent — join our network"
            className="group relative block rounded-2xl p-px overflow-hidden
              bg-gradient-to-br from-accent/60 via-white/5 to-transparent
              hover:from-accent hover:via-accent/60 hover:to-accent/20
              transition-all duration-300 hover:shadow-[0_0_32px_rgba(119,86,181,0.35)] hover:scale-105"
          >
            <div className="relative bg-primary rounded-2xl p-8 text-center group-hover:bg-[#1e1e2a] transition-colors duration-300">
              <div className="w-14 h-14 rounded-xl bg-accent/20 group-hover:bg-accent flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                <svg
                  className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">For Talent</h2>
              <p className="text-gray-300 group-hover:text-white/90 font-light text-sm leading-relaxed transition-colors">
                Join our network of digital and tech professionals.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-accent group-hover:text-white font-semibold text-sm transition-colors">
                Join Network
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};
