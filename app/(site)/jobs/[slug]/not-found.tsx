import Link from 'next/link';

export default function JobNotFound() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-2xl font-bold text-primary mb-2">Job not found</h1>
      <p className="text-gray-600 mb-6">
        This job may have been removed or the link is incorrect. Browse open positions below.
      </p>
      <Link
        href="/jobs"
        className="inline-flex items-center bg-accent hover:bg-accent-600 text-white px-6 py-3 rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      >
        View all jobs
      </Link>
    </div>
  );
}
