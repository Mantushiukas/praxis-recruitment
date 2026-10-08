'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { useHomepageContent } from '@/contexts/HomepageContentContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLocalized } from '@/types/sanity';

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  useEffect(() => { setCurrentYear(new Date().getFullYear()); }, []);

  const content = useHomepageContent();
  const { locale } = useLanguage();
  const s = content?.siteSettings;
  const copyrightText = s && getLocalized(s.footerCopyright, locale);
  const tagline = s && getLocalized(s.footerTagline, locale);
  const contactEmail = s?.contactEmail ?? 'hello@praxisrecruitment.eu';
  const linkedinUrl = s?.linkedinUrl;
  const registrationNumber = s?.showRegistrationNumber ? s?.companyRegistrationNumber : null;

  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'How We Work', href: '/how-we-work' },
    { name: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { name: 'For Companies', href: '/for-companies' },
    { name: 'For Talent', href: '/for-talent' },
    { name: 'Browse Jobs', href: '/jobs' },
  ];

  return (
    <footer className="bg-[#16161F] border-t border-white/[0.06]">
      <div className="site-container py-16">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="footer" />
            {tagline && (
              <p className="text-gray-500 text-sm mt-4 leading-relaxed max-w-[200px]">{tagline}</p>
            )}
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={linkedinUrl ?? 'https://www.linkedin.com/company/praxis-recruitment'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Praxis Recruitment on LinkedIn"
                  className="inline-flex items-center justify-center w-9 h-9 rounded border border-white/10 text-gray-300 hover:text-white hover:border-white/30 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-gray-400" suppressHydrationWarning>
            {copyrightText || `© ${currentYear} Praxis Recruitment. All rights reserved.`}
            {registrationNumber && (
              <span className="ml-3">Reg. {registrationNumber}</span>
            )}
          </p>
          <Link href="/privacy" className="text-xs text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>

      </div>
    </footer>
  );
};
