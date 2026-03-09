export interface SanityJob {
  _id: string;
  _type: 'job';
  title: string;
  slug: string;
  company: string;
  location?: string;
  workType?: string;
  salaryMin?: number;
  salaryMax?: number;
  salaryCurrency?: string;
  salaryNote?: string;
  description?: unknown[];
  requirements?: unknown[];
  benefits?: unknown[];
  contactEmail?: string;
  applyUrl?: string;
  isPublished?: boolean;
  publishedAt?: string;
}

export type PortableTextBlock = unknown;

/** Sanity localized field: { lt?, en? } */
export interface LocalizedString {
  lt?: string | null;
  en?: string | null;
}

export interface SanitySiteSettings {
  heroHeadline?: LocalizedString | null;
  heroSubline1?: LocalizedString | null;
  heroSubline2?: LocalizedString | null;
  heroSubline3?: LocalizedString | null;
  sectionWhatWeDo?: LocalizedString | null;
  sectionWhatWeDoSubtitle?: LocalizedString | null;
  finalCtaTitle?: LocalizedString | null;
  finalCtaSubtitle?: LocalizedString | null;
  footerTagline?: LocalizedString | null;
  footerCopyright?: LocalizedString | null;
  contactEmail?: string | null;
  companyRegistrationNumber?: string | null;
  showRegistrationNumber?: boolean | null;
  showClientLogos?: boolean | null;
  showStatistics?: boolean | null;
  showTestimonials?: boolean | null;
  linkedinUrl?: string | null;
}

export interface SanityWhyPraxis {
  title?: LocalizedString | null;
  subtitle1?: LocalizedString | null;
  subtitle2?: LocalizedString | null;
  foundersTitle?: LocalizedString | null;
  founder1?: LocalizedString | null;
  founder2?: LocalizedString | null;
  message1?: LocalizedString | null;
  message2?: LocalizedString | null;
  message3?: LocalizedString | null;
}

export interface SanityPricing {
  title?: LocalizedString | null;
  subtitle?: LocalizedString | null;
  fee?: LocalizedString | null;
  feeDescription?: LocalizedString | null;
  feeNote?: LocalizedString | null;
  dependsOnTitle?: LocalizedString | null;
  dependsOn?: (LocalizedString | null)[] | null;
  includedTitle?: LocalizedString | null;
  included?: (LocalizedString | null)[] | null;
}

export interface SanityFaqItem {
  question?: LocalizedString | null;
  answer?: LocalizedString | null;
}

export interface SanityFaq {
  title?: LocalizedString | null;
  subtitle?: LocalizedString | null;
  items?: (SanityFaqItem | null)[] | null;
}

export interface SanityService {
  _id: string;
  title?: LocalizedString | null;
  description?: LocalizedString | null;
  items?: (LocalizedString | null)[] | null;
  order?: number | null;
}

export interface SanityTestimonial {
  _id: string;
  quote: string;
  authorName: string;
  authorRole?: string | null;
  authorCompany?: string | null;
  photo?: { asset?: { url?: string } } | null;
  order?: number | null;
  isVisible?: boolean | null;
}

export interface SanityProcessStep {
  stepNumber?: number | null;
  title?: string | null;
  description?: string | null;
  items?: string[] | null;
}

export interface SanityProcessPage {
  headline?: string | null;
  intro?: string | null;
  steps?: SanityProcessStep[] | null;
}

export interface SanityFounder {
  name?: string | null;
  role?: string | null;
  title?: string | null;
  experienceHeading?: string | null;
  experienceItems?: string[] | null;
  quote?: string | null;
  photo?: { asset?: { url?: string } } | null;
}

export interface SanityAboutPage {
  headline?: string | null;
  intro?: string | null;
  founders?: SanityFounder[] | null;
  philosophyTitle?: string | null;
  philosophyItems?: string[] | null;
}

export interface SanityStatistic {
  _id: string;
  value: string;
  label: string;
  order?: number | null;
  isVisible?: boolean | null;
}

export interface SanityClientLogo {
  _id: string;
  companyName: string;
  logo?: { asset?: { url?: string } } | null;
  website?: string | null;
  order?: number | null;
}

export type Locale = 'lt' | 'en';

/** Resolve localized string: prefer locale, fallback to other language */
export function getLocalized(
  obj: LocalizedString | null | undefined,
  locale: Locale
): string {
  if (!obj) return '';
  const primary = locale === 'lt' ? obj.lt : obj.en;
  const fallback = locale === 'lt' ? obj.en : obj.lt;
  return primary ?? fallback ?? '';
}
