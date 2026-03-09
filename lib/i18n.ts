import lt from '@/dictionaries/lt.json';
import en from '@/dictionaries/en.json';

type Locale = 'lt' | 'en';

export type Dictionary = typeof lt;

const dictionaries: Record<Locale, Dictionary> = {
  lt,
  en: en as unknown as Dictionary,
};

/**
 * Returns the UI dictionary for the given locale. Falls back to Lithuanian if locale is missing.
 */
export const getDictionary = (locale: Locale) => {
  return dictionaries[locale] ?? dictionaries.lt;
};
