'use client';

import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { useDictionary } from '@/hooks/useDictionary';
import { useHomepageContent } from '@/contexts/HomepageContentContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLocalized } from '@/types/sanity';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dict = useDictionary();
  const content = useHomepageContent();
  const { locale } = useLanguage();
  const f = content?.faq;
  const d = dict?.faq as { title?: string; subtitle?: string; items?: { question: string; answer: string }[] } | undefined;

  const title = (f && getLocalized(f.title, locale)) || d?.title;
  const subtitle = (f && getLocalized(f.subtitle, locale)) || d?.subtitle;
  const sanityItems = (f?.items ?? [])
    .map((item) => ({
      question: item && getLocalized(item.question, locale),
      answer: item && getLocalized(item.answer, locale),
    }))
    .filter((item) => item.question);
  const faqs = sanityItems.length > 0 ? sanityItems : (d?.items ?? []);

  if (!title && !d?.title) {
    return null;
  }
  if (faqs.length === 0) {
    return null;
  }

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
                {title}
              </h2>
              {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden transition-all hover:border-accent/30 shadow-sm hover:shadow-lg hover:scale-[1.02]"
                >
                  <button
                    type="button"
                    onClick={() => handleToggle(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                    aria-expanded={openIndex === index}
                  >
                    <span className="text-lg font-bold text-primary pr-8">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openIndex === index && faq.answer && (
                    <div className="px-6 pb-5 pt-2">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
