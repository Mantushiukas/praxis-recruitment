'use client';

import { createContext, useContext, ReactNode } from 'react';

export type Locale = 'en';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => (
  <LanguageContext.Provider value={{ locale: 'en', setLocale: () => {} }}>
    {children}
  </LanguageContext.Provider>
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
