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
            {tagline ? (
              <p className="text-gray-500 text-sm mt-4 leading-relaxed max-w-[200px]">{tagline}</p>
            ) : (
              <p className="text-gray-500 text-sm mt-4 leading-relaxed max-w-[200px]">
                Specialist recruitment for digital and tech roles.
              </p>
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
                    className="text-gray-500 hover:text-white transition-colors text-sm"
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
                    className="text-gray-500 hover:text-white transition-colors text-sm"
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
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  {contactEmail}
                </a>
              </li>
              {linkedinUrl && (
                <li>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-gray-600" suppressHydrationWarning>
            {copyrightText || `© ${currentYear} Praxis Recruitment. All rights reserved.`}
            {registrationNumber && (
              <span className="ml-3">Reg. {registrationNumber}</span>
            )}
          </p>
          <Link href="/privacy" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
            Privacy Policy
          </Link>
        </div>

      </div>
    </footer>
  );
};
