'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'For Companies', href: '/for-companies' },
    { name: 'For Talent', href: '/for-talent' },
    { name: 'How We Work', href: '/how-we-work' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleClose = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm transition-all">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Logo variant="header" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-accent transition-all font-semibold relative group text-[15px]"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                </Link>
              ))}

              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-600 text-white px-7 py-2.5 rounded-xl font-semibold text-[15px] transition-all hover:shadow-lg hover:scale-105"
              >
                Book a Call
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-accent transition-colors z-[60] relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#16161F] flex flex-col transition-all duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Top bar with logo + close */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/10 flex-shrink-0">
          <Logo variant="footer" />
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close menu"
            className="p-2 text-white/60 hover:text-white transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col justify-center flex-1 px-8 gap-2">
          {navigation.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={handleClose}
              className="group flex items-center justify-between py-4 border-b border-white/5 text-2xl font-bold text-white/80 hover:text-white transition-all"
              style={{ transitionDelay: mobileMenuOpen ? `${i * 50}ms` : '0ms' }}
            >
              {item.name}
              <svg className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={handleClose}
            className="mt-8 bg-accent hover:bg-accent-600 text-white text-center font-bold text-lg px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            Book a Call
          </Link>
        </nav>

        {/* Footer note */}
        <p className="text-center text-white/20 text-sm pb-8 px-6">
          Praxis Recruitment — Built by Practitioners
        </p>
      </div>
    </>
  );
};
