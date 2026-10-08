'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';

const NAV = [
  { name: 'For Companies', href: '/for-companies' },
  { name: 'For Talent',    href: '/for-talent'    },
  { name: 'How We Work',   href: '/how-we-work'   },
  { name: 'About',         href: '/about'         },
  { name: 'Contact',       href: '/contact'       },
];

export const Header = () => {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname                = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleClose = () => setOpen(false);

  return (
    <>
      {/* ── Desktop / tablet bar ── */}
      <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-[0_1px_0_rgba(0,0,0,0.08)]' : 'border-b border-black/[0.06]'}`}>
        <div className="site-container">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Logo variant="header" />

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {NAV.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-bold rounded transition-colors duration-150
                      ${active
                        ? 'text-accent'
                        : 'text-gray-600 hover:text-accent'}`}
                  >
                    {item.name}
                    {active && (
                      <span className="absolute bottom-0 left-3 right-3 h-px bg-accent rounded-full" />
                    )}
                  </Link>
                );
              })}

              {/* LinkedIn — sits right after nav links */}
              <a
                href="https://www.linkedin.com/company/praxis-recruitment"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Praxis Recruitment on LinkedIn"
                className="ml-2 inline-flex items-center justify-center w-10 h-10 rounded-md bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors duration-150"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden md:inline-flex btn-primary text-sm"
              >
                Book a Call
              </Link>

              <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                className="md:hidden p-2 -mr-1 text-gray-600 hover:text-primary transition-colors"
              >
                {open ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile full-screen overlay ── */}
      <div
        className={`fixed inset-0 z-40 bg-[#16161F] flex flex-col md:hidden transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-white/[0.07]">
          <Logo variant="footer" />
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close menu"
            className="p-2 text-white/50 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col flex-1 justify-center px-8 gap-0" aria-label="Mobile navigation">
          {NAV.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={handleClose}
              className={`group flex items-center justify-between py-5 border-b border-white/[0.06] text-xl font-semibold transition-colors
                ${pathname === item.href ? 'text-white' : 'text-white/60 hover:text-white'}`}
              style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
            >
              {item.name}
              <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={handleClose}
            className="mt-10 btn-primary justify-center py-4 text-base rounded-md"
          >
            Book a Call
          </Link>
        </nav>

        <p className="text-center text-white/20 text-xs pb-8 px-6">
          Praxis Recruitment
        </p>
      </div>
    </>
  );
};
