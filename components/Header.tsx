'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { useDictionary } from '@/hooks/useDictionary';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dict = useDictionary();

  if (!dict?.nav || !dict?.buttons) {
    return null;
  }

  const navigation = [
    { name: dict.nav.services, href: '/#services' },
    { name: dict.nav.forCandidates, href: '/jobs' },
    { name: 'Process', href: '/process' },
    { name: dict.nav.about, href: '/about' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm overflow-visible transition-all">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 overflow-visible">
          {/* Logo */}
          <Logo variant="header" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-accent transition-all font-semibold relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-600 text-white px-6 py-2 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:scale-105"
            >
              {dict.buttons.getInTouch}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-accent hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-accent transition-colors font-medium px-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {dict.buttons.getInTouch}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
