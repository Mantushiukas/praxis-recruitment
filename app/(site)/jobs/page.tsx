import { getJobs } from '@/lib/sanity';
import { JobsList } from '@/components/JobsList';
import { getDictionary } from '@/lib/i18n';
import Link from 'next/link';

export const revalidate = 60;

export const metadata = {
  title: 'Job Listings | Praxis Recruitment',
  description: 'Browse open positions. Digital Marketing and IT roles.',
};

export default async function JobsPage() {
  const [jobs, dict] = await Promise.all([getJobs(), getDictionary('en')]);
  const sections = dict?.sections;
  const buttons = dict?.buttons;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          {sections?.recentJobs ?? 'Job Listings'}
        </h1>
        <p className="mt-2 text-gray-600">
          {sections?.recentJobsSubtitle ?? 'Browse our open positions.'}
        </p>
      </div>

      {jobs.length === 0 ? (
        <p className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center text-gray-600">
          No open positions at the moment. Check back later.
        </p>
      ) : (
        <JobsList jobs={jobs} />
      )}

      {buttons?.viewAllJobs && (
        <p className="mt-8 text-center">
          <Link
            href="/"
            className="text-accent font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-accent rounded"
          >
            ← {buttons.viewAllJobs}
          </Link>
        </p>
      )}
    </div>
  );
}
