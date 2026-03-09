'use client';

import { createContext, useContext, ReactNode } from 'react';
import type {
  SanitySiteSettings,
  SanityWhyPraxis,
  SanityPricing,
  SanityFaq,
  SanityService,
  SanityStatistic,
  SanityClientLogo,
  SanityTestimonial,
} from '@/types/sanity';

export interface HomepageContent {
  siteSettings: SanitySiteSettings | null;
  whyPraxis: SanityWhyPraxis | null;
  pricing: SanityPricing | null;
  faq: SanityFaq | null;
  services: SanityService[];
  statistics: SanityStatistic[];
  clientLogos: SanityClientLogo[];
  testimonials: SanityTestimonial[];
}

const HomepageContentContext = createContext<HomepageContent | undefined>(undefined);

export const HomepageContentProvider = ({
  content,
  children,
}: {
  content: HomepageContent;
  children: ReactNode;
}) => {
  return (
    <HomepageContentContext.Provider value={content}>
      {children}
    </HomepageContentContext.Provider>
  );
};

export const useHomepageContent = (): HomepageContent | undefined => {
  return useContext(HomepageContentContext);
};
