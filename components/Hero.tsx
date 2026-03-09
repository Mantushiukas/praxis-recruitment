'use client';

import Link from 'next/link';
import { useDictionary } from '@/hooks/useDictionary';
import { useHomepageContent } from '@/contexts/HomepageContentContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLocalized } from '@/types/sanity';

export const Hero = () => {
  const dict = useDictionary();
  const content = useHomepageContent();
  const { locale } = useLanguage();
  const s = content?.siteSettings;

  const headline =
    getLocalized(s?.heroHeadline, locale) || (dict?.hero as { headline?: string })?.headline;
  const subline1 =
    getLocalized(s?.heroSubline1, locale) || (dict?.hero as { subline1?: string })?.subline1;
  const subline2 =
    getLocalized(s?.heroSubline2, locale) || (dict?.hero as { subline2?: string })?.subline2;
  const subline3 =
    getLocalized(s?.heroSubline3, locale) || (dict?.hero as { subline3?: string })?.subline3;

  if (!headline && !dict?.hero) {
    return null;
  }
  if (!dict?.buttons) {
    return null;
  }

  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-12 md:pb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50/50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-purple-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight tracking-tight">
            {headline}
          </h1>
          {subline1 && (
            <p className="text-lg md:text-xl text-gray-600 mb-4 leading-relaxed font-normal max-w-3xl mx-auto">
              {subline1}
            </p>
          )}
          {subline2 && (
            <p className="text-base md:text-lg text-gray-600 mb-2 leading-relaxed font-normal">
              {subline2}
            </p>
          )}
          {subline3 && (
            <p className="text-base md:text-lg text-gray-500 mb-10 leading-relaxed font-normal">
              {subline3}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group bg-accent hover:bg-accent-600 text-white px-8 py-3.5 rounded-xl font-medium text-lg transition-all shadow-md hover:shadow-xl hover:scale-105 w-full sm:w-auto relative overflow-hidden"
            >
              <span className="relative z-10">{dict.buttons.bookCall}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/process"
              className="group bg-white border-2 border-gray-200 text-gray-700 hover:border-accent hover:text-accent px-8 py-3.5 rounded-xl font-medium text-lg transition-all hover:shadow-md hover:scale-105 w-full sm:w-auto"
            >
              {dict.buttons.learnHow}
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
