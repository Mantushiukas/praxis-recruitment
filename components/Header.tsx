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
                    className={`relative px-3 py-2 text-sm font-medium rounded transition-colors duration-150
                      ${active
                        ? 'text-primary'
                        : 'text-gray-500 hover:text-primary'}`}
                  >
                    {item.name}
                    {active && (
                      <span className="absolute bottom-0 left-3 right-3 h-px bg-accent rounded-full" />
                    )}
                  </Link>
                );
              })}
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
