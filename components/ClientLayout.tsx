'use client';

import { ReactNode } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { HomepageContentProvider } from '@/contexts/HomepageContentContext';
import type { HomepageContent } from '@/contexts/HomepageContentContext';
import { Header } from './Header';
import { Footer } from './Footer';

const emptyContent: HomepageContent = {
  siteSettings: null,
  whyPraxis: null,
  pricing: null,
  faq: null,
  services: [],
  statistics: [],
  clientLogos: [],
  testimonials: [],
};

interface ClientLayoutProps {
  children: ReactNode;
  content?: HomepageContent;
}

export const ClientLayout = ({ children, content = emptyContent }: ClientLayoutProps) => {
  return (
    <LanguageProvider>
      <HomepageContentProvider content={content}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </HomepageContentProvider>
    </LanguageProvider>
  );
};
