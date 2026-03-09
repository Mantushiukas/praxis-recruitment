'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { getDictionary } from '@/lib/i18n';

export const useDictionary = () => {
  const { locale } = useLanguage();
  return getDictionary(locale);
};
