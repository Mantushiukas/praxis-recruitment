import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getJobBySlug, getJobById } from '@/lib/sanity';
import { JobContent } from '@/components/JobContent';
import type { SanityJob } from '@/types/sanity';

export const revalidate = 60;

interface JobDetailPageProps {
  params: Promise<{ slug: string }>;
}

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
  const { salaryMin, salaryMax, salaryCurrency, salaryNote } = job;
  if (salaryMin == null && salaryMax == null) return '';
  const currency = salaryCurrency ?? 'EUR';
  if (salaryMin != null && salaryMax != null) {
    return `${salaryMin}–${salaryMax} ${currency}${salaryNote ? ` (${salaryNote})` : ''}`;
  }
  if (salaryMin != null) return `From ${salaryMin} ${currency}`;
  if (salaryMax != null) return `Up to ${salaryMax} ${currency}`;
  return '';
};

export async function generateMetadata({ params }: JobDetailPageProps) {
  try {
    const resolved = await params;
    const slug = resolved?.slug;
    if (!slug || typeof slug !== 'string') return { title: 'Job Not Found' };
    let job = await getJobBySlug(slug);
    if (!job) job = await getJobById(slug);
    if (!job) return { title: 'Job Not Found' };
    return {
      title: `${job.title} | ${job.company} | Praxis Recruitment`,
      description: job.company ? `${job.title} at ${job.company}. View details and apply.` : job.title,
    };
  } catch {
    return { title: 'Job | Praxis Recruitment' };
  }
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  let job: SanityJob | null = null;
  try {
    const resolved = await params;
    const slug = resolved?.slug;
    if (!slug || typeof slug !== 'string') {
      notFound();
    }
    job = await getJobBySlug(slug);
    if (!job) {
      job = await getJobById(slug);
    }
  } catch (err) {
    console.error('[JobDetailPage] Failed to load job:', err);
    notFound();
  }

  if (!job) {
    notFound();
  }

  const safeStringify = (value: unknown): string | null => {
    try {
      return JSON.stringify(value);
    } catch {
      return null;
    }
  };

  const salaryStr = formatSalary(job);
  const workTypeStr = formatWorkType(job.workType);
  const applyHref = job.applyUrl ?? (job.contactEmail ? `mailto:${job.contactEmail}` : null);

  const title = job.title ?? 'Job';
  const company = job.company ?? 'Company';
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title,
    description: `${title} at ${company}. ${job.location ?? ''}`.trim(),
    hiringOrganization: {
      '@type': 'Organization',
      name: company,
    },
  };
  if (job.location) {
    jsonLd.jobLocation = {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressLocality: job.location },
    };
  }
  if (job.workType) jsonLd.employmentType = job.workType;
  if (job.salaryMin != null || job.salaryMax != null) {
    const value: Record<string, unknown> = { '@type': 'QuantitativeValue' };
    if (job.salaryMin != null) value.minValue = job.salaryMin;
    if (job.salaryMax != null) value.maxValue = job.salaryMax;
    jsonLd.baseSalary = {
      '@type': 'MonetaryAmount',
      currency: job.salaryCurrency ?? 'EUR',
      value,
    };
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Link
          href="/jobs"
          className="inline-block text-accent font-medium hover:underline mb-8 focus:outline-none focus:ring-2 focus:ring-accent rounded"
        >
          ← Back to jobs
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="mt-2 text-xl text-gray-600">{company}</p>
          <ul className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
            {job.location && <li>{job.location}</li>}
            {workTypeStr && <li>{workTypeStr}</li>}
            {salaryStr && <li>{salaryStr}</li>}
          </ul>
        </header>

        <JobContent
          descriptionJson={
            Array.isArray(job.description) && job.description.length > 0
              ? safeStringify(job.description)
              : null
          }
          requirementsJson={
            Array.isArray(job.requirements) && job.requirements.length > 0
              ? safeStringify(job.requirements)
              : null
          }
          benefitsJson={
            Array.isArray(job.benefits) && job.benefits.length > 0
              ? safeStringify(job.benefits)
              : null
          }
        />

        {applyHref && (
          <div className="mt-10 pt-8 border-t border-gray-200">
            <a
              href={applyHref}
              target={job.applyUrl ? '_blank' : undefined}
              rel={job.applyUrl ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-white font-medium hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              {job.applyUrl ? 'Apply now' : 'Contact to apply'}
            </a>
          </div>
        )}
      </div>
    </>
  );
}
