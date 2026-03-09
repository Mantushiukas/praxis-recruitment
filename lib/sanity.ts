import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type {
  SanityJob,
  SanitySiteSettings,
  SanityWhyPraxis,
  SanityPricing,
  SanityFaq,
  SanityService,
  SanityStatistic,
  SanityClientLogo,
  SanityAboutPage,
  SanityProcessPage,
  SanityTestimonial,
} from '@/types/sanity';
import {
  jobsListQuery,
  jobBySlugQuery,
  jobByIdQuery,
  recentJobsQuery,
  siteSettingsQuery,
  whyPraxisQuery,
  pricingQuery,
  faqQuery,
  servicesQuery,
  statisticsQuery,
  clientLogosQuery,
  aboutPageQuery,
  processPageQuery,
  testimonialsQuery,
} from './sanity.queries';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01';

if (!projectId) {
  console.warn('Missing NEXT_PUBLIC_SANITY_PROJECT_ID. Sanity queries will fail.');
}

export const client = createClient({
  projectId: projectId ?? '',
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: Parameters<typeof builder.image>[0]) => builder.image(source);

export const sanityConfig = {
  projectId: projectId ?? '',
  dataset,
  apiVersion,
};

const revalidate = 60;

const safeFetch = async <T>(fn: () => Promise<T>, fallback: T): Promise<T> => {
  try {
    return await fn();
  } catch (err) {
    console.error('[Sanity] fetch failed:', err);
    return fallback;
  }
};

export async function getJobs(): Promise<SanityJob[]> {
  return safeFetch(
    () => client.fetch<SanityJob[]>(jobsListQuery, {}, { next: { revalidate } }),
    []
  );
}

export async function getJobBySlug(slug: string): Promise<SanityJob | null> {
  return safeFetch(
    () => client.fetch<SanityJob | null>(jobBySlugQuery, { slug }, { next: { revalidate } }),
    null
  );
}

export async function getJobById(id: string): Promise<SanityJob | null> {
  return safeFetch(
    () => client.fetch<SanityJob | null>(jobByIdQuery, { id }, { next: { revalidate } }),
    null
  );
}

export async function getRecentJobs(): Promise<SanityJob[]> {
  return safeFetch(
    () => client.fetch<SanityJob[]>(recentJobsQuery, {}, { next: { revalidate } }),
    []
  );
}

export async function getSiteSettings(): Promise<SanitySiteSettings | null> {
  return safeFetch(
    () => client.fetch<SanitySiteSettings | null>(siteSettingsQuery, {}, { next: { revalidate } }),
    null
  );
}

export async function getWhyPraxis(): Promise<SanityWhyPraxis | null> {
  return safeFetch(
    () => client.fetch<SanityWhyPraxis | null>(whyPraxisQuery, {}, { next: { revalidate } }),
    null
  );
}

export async function getPricing(): Promise<SanityPricing | null> {
  return safeFetch(
    () => client.fetch<SanityPricing | null>(pricingQuery, {}, { next: { revalidate } }),
    null
  );
}

export async function getFaq(): Promise<SanityFaq | null> {
  return safeFetch(
    () => client.fetch<SanityFaq | null>(faqQuery, {}, { next: { revalidate } }),
    null
  );
}

export async function getServices(): Promise<SanityService[]> {
  return safeFetch(
    () => client.fetch<SanityService[]>(servicesQuery, {}, { next: { revalidate } }),
    []
  );
}

export async function getStatistics(): Promise<SanityStatistic[]> {
  return safeFetch(
    () => client.fetch<SanityStatistic[]>(statisticsQuery, {}, { next: { revalidate } }),
    []
  );
}

export async function getClientLogos(): Promise<SanityClientLogo[]> {
  return safeFetch(
    () => client.fetch<SanityClientLogo[]>(clientLogosQuery, {}, { next: { revalidate } }),
    []
  );
}

export async function getAboutPage(): Promise<SanityAboutPage | null> {
  return safeFetch(
    () => client.fetch<SanityAboutPage | null>(aboutPageQuery, {}, { next: { revalidate } }),
    null
  );
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  return safeFetch(
    () => client.fetch<SanityTestimonial[]>(testimonialsQuery, {}, { next: { revalidate } }),
    []
  );
}

export async function getProcessPage(): Promise<SanityProcessPage | null> {
  return safeFetch(
    () => client.fetch<SanityProcessPage | null>(processPageQuery, {}, { next: { revalidate } }),
    null
  );
}
