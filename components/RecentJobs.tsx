import Link from 'next/link';
import type { SanityJob } from '@/types/sanity';

const formatWorkType = (workType?: string): string => {
  if (!workType) return '';
  const map: Record<string, string> = {
    'full-time': 'Full-time',
    'part-time': 'Part-time',
    contract: 'Contract',
    temporary: 'Temporary',
  };
  return map[workType] ?? workType;
};

const formatSalary = (job: SanityJob): string => {
  const { salaryMin, salaryMax, salaryCurrency } = job;
  if (salaryMin == null && salaryMax == null) return '';
  const currency = salaryCurrency ?? 'EUR';
  if (salaryMin != null && salaryMax != null) return `${salaryMin}–${salaryMax} ${currency}`;
  if (salaryMin != null) return `From ${salaryMin} ${currency}`;
  if (salaryMax != null) return `Up to ${salaryMax} ${currency}`;
  return '';
};

interface RecentJobsProps {
  jobs: SanityJob[];
  title?: string;
  subtitle?: string;
  viewAllLabel?: string;
}

export const RecentJobs = ({
  jobs,
  title = 'Recent Job Openings',
  subtitle = 'Explore our latest opportunities',
  viewAllLabel = 'View All Jobs',
}: RecentJobsProps) => {
  if (!jobs.length) {
    return null;
  }

  return (
    <section className="py-20 bg-white" aria-labelledby="recent-jobs-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="recent-jobs-heading"
            className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight"
          >
            {title}
          </h2>
          <p className="text-lg text-gray-500 font-normal">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {jobs.map((job) => {
            const salaryStr = formatSalary(job);
            const workTypeStr = formatWorkType(job.workType);
            const jobHref = job.slug && String(job.slug).trim() ? `/jobs/${job.slug}` : '/jobs';
            return (
              <Link
                key={job._id}
                href={jobHref}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-accent hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                aria-label={`${job.title} at ${job.company}`}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-primary mb-2 tracking-tight">
                    {job.title}
                  </h3>
                  <p className="text-gray-500 font-normal">{job.company}</p>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  {job.location && (
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                      </svg>
                      {job.location}
                    </div>
                  )}
                  {workTypeStr && (
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {workTypeStr}
                    </div>
                  )}
                  {salaryStr && (
                    <div className="flex items-center font-semibold text-accent">
                      <svg
                        className="w-4 h-4 mr-2 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {salaryStr}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/jobs"
            className="inline-flex items-center bg-accent hover:bg-accent-600 text-white px-8 py-3 rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            {viewAllLabel}
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
