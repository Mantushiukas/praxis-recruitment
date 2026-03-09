import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { WhyPraxis } from '@/components/WhyPraxis';
import { Testimonials } from '@/components/Testimonials';
import { Services } from '@/components/Services';
import { RecentJobs } from '@/components/RecentJobs';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { getRecentJobs } from '@/lib/sanity';
import { getDictionary } from '@/lib/i18n';
import type { SanityJob } from '@/types/sanity';

export const revalidate = 60;

const defaultSections = {
  recentJobs: 'Recent Job Openings',
  recentJobsSubtitle: 'Explore our latest opportunities',
};
const defaultButtons = { viewAllJobs: 'View All Jobs' };

export default async function Home() {
  let recentJobs: SanityJob[] = [];
  let sections = defaultSections;
  let buttons = defaultButtons;

  try {
    const dict = getDictionary('en');
    sections = (dict?.sections as typeof defaultSections) ?? defaultSections;
    buttons = (dict?.buttons as typeof defaultButtons) ?? defaultButtons;
    recentJobs = await getRecentJobs();
  } catch (err) {
    console.error('[Home] Data fetch failed:', err);
  }

  return (
    <>
      <Hero />
      <TrustStrip />
      <WhyPraxis />
      <Testimonials />
      <Services />
      <RecentJobs
        jobs={recentJobs}
        title={sections.recentJobs}
        subtitle={sections.recentJobsSubtitle}
        viewAllLabel={buttons.viewAllJobs}
      />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
