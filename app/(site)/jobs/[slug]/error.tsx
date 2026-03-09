'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function JobError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[Job detail] Error:', error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Link
        href="/jobs"
        className="inline-block text-accent font-medium hover:underline mb-8 focus:outline-none focus:ring-2 focus:ring-accent rounded"
      >
        ← Back to jobs
      </Link>
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
        <h1 className="text-xl font-bold text-gray-900 mb-2">Couldn’t load this job</h1>
        <p className="text-gray-600 mb-6">
          Something went wrong loading the job details. You can try again or browse other jobs.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            type="button"
            onClick={reset}
            className="px-6 py-3 bg-accent hover:bg-accent-600 text-white font-medium rounded-xl transition-colors"
          >
            Try again
          </button>
          <Link
            href="/jobs"
            className="px-6 py-3 border-2 border-gray-200 text-gray-700 font-medium rounded-xl hover:border-accent hover:text-accent transition-colors"
          >
            View all jobs
          </Link>
        </div>
      </div>
    </div>
  );
}
