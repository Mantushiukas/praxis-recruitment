'use client';

import { AnimatedSection } from './AnimatedSection';
import { useDictionary } from '@/hooks/useDictionary';
import { useHomepageContent } from '@/contexts/HomepageContentContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLocalized } from '@/types/sanity';

export const WhyPraxis = () => {
  const dict = useDictionary();
  const content = useHomepageContent();
  const { locale } = useLanguage();
  const wp = content?.whyPraxis;
  const d = dict?.whyPraxis as Record<string, string> | undefined;

  const title = (wp && getLocalized(wp.title, locale)) || d?.title;
  const subtitle1 = (wp && getLocalized(wp.subtitle1, locale)) || d?.subtitle1;
  const subtitle2 = (wp && getLocalized(wp.subtitle2, locale)) || d?.subtitle2;
  const foundersTitle = (wp && getLocalized(wp.foundersTitle, locale)) || d?.foundersTitle;
  const founder1 = (wp && getLocalized(wp.founder1, locale)) || d?.founder1;
  const founder2 = (wp && getLocalized(wp.founder2, locale)) || d?.founder2;
  const message1 = (wp && getLocalized(wp.message1, locale)) || d?.message1;
  const message2 = (wp && getLocalized(wp.message2, locale)) || d?.message2;
  const message3 = (wp && getLocalized(wp.message3, locale)) || d?.message3;

  if (!title && !d?.title) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
                {title}
              </h2>
              {subtitle1 && (
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{subtitle1}</p>
              )}
              {subtitle2 && (
                <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
                  {subtitle2}
                </p>
              )}
            </div>

            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl border-2 border-gray-200 p-8 md:p-12 mb-8 shadow-lg hover:shadow-xl transition-all group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                {foundersTitle && (
                  <h3 className="text-xl font-bold text-primary mb-6">{foundersTitle}</h3>
                )}
                <div className="space-y-6">
                  {founder1 && (
                    <div className="flex items-start gap-4 group/item">
                      <div className="flex-shrink-0 w-3 h-3 bg-accent rounded-full mt-2 transition-transform group-hover/item:scale-125" />
                      <p className="text-lg text-gray-800 transition-colors group-hover/item:text-primary">
                        {founder1}
                      </p>
                    </div>
                  )}
                  {founder2 && (
                    <div className="flex items-start gap-4 group/item">
                      <div className="flex-shrink-0 w-3 h-3 bg-accent rounded-full mt-2 transition-transform group-hover/item:scale-125" />
                      <p className="text-lg text-gray-800 transition-colors group-hover/item:text-primary">
                        {founder2}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4 text-center">
              {message1 && (
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{message1}</p>
              )}
              {message2 && (
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{message2}</p>
              )}
              {message3 && (
                <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed">
                  {message3}
                </p>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
