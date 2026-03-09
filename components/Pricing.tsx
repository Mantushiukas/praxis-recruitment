'use client';

import { AnimatedSection } from './AnimatedSection';
import { useDictionary } from '@/hooks/useDictionary';
import { useHomepageContent } from '@/contexts/HomepageContentContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLocalized } from '@/types/sanity';

export const Pricing = () => {
  const dict = useDictionary();
  const content = useHomepageContent();
  const { locale } = useLanguage();
  const p = content?.pricing;
  const d = dict?.pricing as Record<string, unknown> | undefined;

  const title = (p && getLocalized(p.title, locale)) || (d?.title as string);
  const subtitle = (p && getLocalized(p.subtitle, locale)) || (d?.subtitle as string);
  const fee = (p && getLocalized(p.fee, locale)) || (d?.fee as string);
  const feeDescription =
    (p && getLocalized(p.feeDescription, locale)) || (d?.feeDescription as string);
  const feeNote = (p && getLocalized(p.feeNote, locale)) || (d?.feeNote as string);
  const dependsOnTitle =
    (p && getLocalized(p.dependsOnTitle, locale)) || (d?.dependsOnTitle as string);
  const sanityDependsOn = Array.isArray(p?.dependsOn)
    ? (p.dependsOn
        .map((x) => (x && typeof x === 'object' && ('lt' in x || 'en' in x) ? getLocalized(x, locale) : ''))
        .filter(Boolean) as string[])
    : [];
  const dictDependsOn = Array.isArray(d?.dependsOn) ? (d.dependsOn as string[]) : [];
  const dependsOnList =
    sanityDependsOn.length > 0 ? sanityDependsOn : dictDependsOn;
  const finalDependsOnList =
    dependsOnList.length > 0 ? dependsOnList : dictDependsOn;

  const includedTitle =
    (p && getLocalized(p.includedTitle, locale)) || (d?.includedTitle as string);
  const sanityIncluded = Array.isArray(p?.included)
    ? (p.included
        .map((x) => (x && typeof x === 'object' && ('lt' in x || 'en' in x) ? getLocalized(x, locale) : ''))
        .filter(Boolean) as string[])
    : [];
  const dictIncluded = Array.isArray(d?.included) ? (d.included as string[]) : [];
  const includedList =
    sanityIncluded.length > 0 ? sanityIncluded : dictIncluded;
  const finalIncludedList =
    includedList.length > 0 ? includedList : dictIncluded;

  if (!title && !d?.title) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
                {title}
              </h2>
              {subtitle && <p className="text-lg text-gray-600 mb-6">{subtitle}</p>}
              {(fee || feeDescription) && (
                <div className="inline-block bg-gradient-to-r from-accent/10 to-purple-100/30 rounded-2xl px-8 py-6 mb-8 border-2 border-accent/20 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <p className="text-2xl md:text-3xl font-bold text-primary">
                    {fee}{' '}
                    {feeDescription && (
                      <span className="text-lg text-gray-600 font-normal">{feeDescription}</span>
                    )}
                  </p>
                  {feeNote && <p className="text-sm text-gray-600 mt-2 font-medium">{feeNote}</p>}
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {(dependsOnTitle || finalDependsOnList.length > 0) && (
                <div className="group bg-gradient-to-br from-accent/5 to-purple-50/50 rounded-2xl p-8 border-2 border-accent/30 hover:border-accent/50 shadow-md hover:shadow-xl transition-all hover:scale-105">
                  {dependsOnTitle && (
                    <h3 className="text-xl font-bold text-primary mb-6 group-hover:text-accent transition-colors">
                      {dependsOnTitle}
                    </h3>
                  )}
                  <ul className="space-y-3">
                    {finalDependsOnList.map((factor, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-accent flex-shrink-0 mr-3 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(includedTitle || finalIncludedList.length > 0) && (
                <div className="group bg-gradient-to-br from-accent/5 to-purple-50/50 rounded-2xl p-8 border-2 border-accent/30 hover:border-accent/50 shadow-md hover:shadow-xl transition-all hover:scale-105">
                  {includedTitle && (
                    <h3 className="text-xl font-bold text-primary mb-6 group-hover:text-accent transition-colors">
                      {includedTitle}
                    </h3>
                  )}
                  <ul className="space-y-3">
                    {finalIncludedList.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-accent flex-shrink-0 mr-3 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
