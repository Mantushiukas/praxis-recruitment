'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useDictionary } from '@/hooks/useDictionary';
import { useHomepageContent } from '@/contexts/HomepageContentContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLocalized } from '@/types/sanity';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const dict = useDictionary();
  const content = useHomepageContent();
  const { locale } = useLanguage();
  const s = content?.siteSettings;
  const copyrightText =
    (s && getLocalized(s.footerCopyright, locale)) ||
    (dict?.footer as { copyright?: string })?.copyright;
  const tagline =
    (s && getLocalized(s.footerTagline, locale)) ||
    (dict?.footer as { tagline?: string })?.tagline;
  const contactEmail = s?.contactEmail ?? 'hello@praxisrecruitment.com';
  const linkedinUrl = s?.linkedinUrl;
  const registrationNumber = s?.showRegistrationNumber ? s?.companyRegistrationNumber : null;

  if (!dict?.nav || !dict?.buttons || !dict?.footer) {
    return null;
  }

  const links = {
    company: [
      { name: dict.nav.about, href: '/about' },
      { name: dict.nav.services, href: '/#services' },
      { name: dict.nav.contact, href: '/contact' },
    ],
    candidates: [
      { name: dict.buttons.browseJobs, href: '/jobs' },
      { name: dict.buttons.learnHow, href: '/process' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
    ],
  };

  return (
    <footer className="bg-primary text-white overflow-visible">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 overflow-visible">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-4">
          {/* Logo and Description */}
          <div className="md:col-span-1 overflow-visible">
            <Link href="/" className="inline-block transition-all hover:scale-105">
              <Image
                src="/images/logo-light.png"
                alt="Praxis Recruitment - Recruitment by Practitioners"
                width={318}
                height={187}
                className="h-auto w-auto max-h-[187px] -my-16 transition-all"
              />
            </Link>
            {tagline && (
              <p className="text-gray-400 text-sm mt-2 max-w-[200px]">{tagline}</p>
            )}
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold mb-4 text-white tracking-tight">{dict.footer.company}</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent-light transition-all text-sm hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Candidates */}
          <div>
            <h3 className="font-bold mb-4 text-white tracking-tight">{dict.footer.forCandidates}</h3>
            <ul className="space-y-2">
              {links.candidates.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent-light transition-all text-sm hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-white tracking-tight">{dict.footer.getInTouch}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-gray-300 hover:text-accent-light transition-all hover:underline inline-flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {contactEmail}
                </a>
              </li>
              {linkedinUrl && (
                <li>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-accent-light transition-all hover:underline inline-flex items-center gap-2 group"
                  >
                    <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              {copyrightText || `© ${currentYear} Praxis Recruitment. All rights reserved.`}
              {registrationNumber && (
                <span className="ml-3 text-gray-500">Reg. {registrationNumber}</span>
              )}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {links.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-accent-light transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
