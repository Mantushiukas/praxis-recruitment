'use client';

import { AnimatedSection } from './AnimatedSection';
import { useHomepageContent } from '@/contexts/HomepageContentContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLocalized } from '@/types/sanity';
import type { SanityService } from '@/types/sanity';

export const Services = () => {
  const content = useHomepageContent();
  const { locale } = useLanguage();
  const s = content?.siteSettings;
  const sectionTitle = s ? getLocalized(s.sectionWhatWeDo, locale) : '';
  const sectionSubtitle = s ? getLocalized(s.sectionWhatWeDoSubtitle, locale) : '';

  const services = (content?.services ?? [])
    .map((svc: SanityService) => ({
      title: getLocalized(svc.title, locale),
      description: getLocalized(svc.description, locale),
      items: (svc.items ?? []).map((item) => getLocalized(item, locale)).filter(Boolean),
    }))
    .filter((s) => s.title);

  if (services.length === 0) {
    return null;
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
            {sectionTitle}
          </h2>
          {sectionSubtitle && (
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-normal">
              {sectionSubtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <AnimatedSection key={index}>
              <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-accent/30 hover:scale-105"
              >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-all">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={index === 0 ? "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" : "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"} />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3 tracking-tight group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              {service.description && (
                <p className="text-gray-600 mb-6 font-normal leading-relaxed">
                  {service.description}
                </p>
              )}
              <ul className="space-y-3">
                {(service.items ?? []).map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
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
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
