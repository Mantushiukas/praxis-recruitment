'use client';

import Link from 'next/link';
import { useDictionary } from '@/hooks/useDictionary';
import { useHomepageContent } from '@/contexts/HomepageContentContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLocalized } from '@/types/sanity';

export const FinalCTA = () => {
  const dict = useDictionary();
  const content = useHomepageContent();
  const { locale } = useLanguage();
  const s = content?.siteSettings;

  const title =
    (s && getLocalized(s.finalCtaTitle, locale)) ||
    (dict?.finalCta as { title?: string })?.title;
  const subtitle =
    (s && getLocalized(s.finalCtaSubtitle, locale)) ||
    (dict?.finalCta as { subtitle?: string })?.subtitle;
  const contactEmail = s?.contactEmail ?? 'hello@praxisrecruitment.com';

  if (!title && !(dict?.finalCta as { title?: string })?.title) {
    return null;
  }
  if (!dict?.buttons) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight tracking-tight">
            {title}
          </h2>
          {subtitle && <p className="text-xl text-gray-600 mb-10">{subtitle}</p>}

          <Link
            href="/contact"
            className="group inline-block relative bg-accent hover:bg-accent-600 text-white px-12 py-5 rounded-xl font-semibold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-110 overflow-hidden"
          >
            <span className="relative z-10">{dict.buttons.bookCall}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>

          {contactEmail && (
            <div className="mt-8">
              <a
                href={`mailto:${contactEmail}`}
                className="text-lg text-gray-600 hover:text-accent transition-colors"
              >
                {contactEmail}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
