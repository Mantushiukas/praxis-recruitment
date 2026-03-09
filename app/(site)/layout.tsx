import { ClientLayout } from '@/components/ClientLayout';
import type { HomepageContent } from '@/contexts/HomepageContentContext';
import {
  getSiteSettings,
  getWhyPraxis,
  getPricing,
  getFaq,
  getServices,
  getStatistics,
  getClientLogos,
  getTestimonials,
} from '@/lib/sanity';

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

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let content: HomepageContent = emptyContent;
  try {
    const [siteSettings, whyPraxis, pricing, faq, services, statistics, clientLogos, testimonials] = await Promise.all([
      getSiteSettings(),
      getWhyPraxis(),
      getPricing(),
      getFaq(),
      getServices(),
      getStatistics(),
      getClientLogos(),
      getTestimonials(),
    ]);
    content = {
      siteSettings: siteSettings ?? null,
      whyPraxis: whyPraxis ?? null,
      pricing: pricing ?? null,
      faq: faq ?? null,
      services: services ?? [],
      statistics: statistics ?? [],
      clientLogos: clientLogos ?? [],
      testimonials: testimonials ?? [],
    };
  } catch (err) {
    console.error('[SiteLayout] Sanity fetch failed:', err);
  }

  return <ClientLayout content={content}>{children}</ClientLayout>;
}
