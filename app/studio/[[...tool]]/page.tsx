import Link from 'next/link';

export default function StudioPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 bg-gray-50">
      <h1 className="text-xl font-semibold text-gray-800">Sanity Studio</h1>
      <p className="text-gray-600 text-center max-w-md">
        Run the CMS locally with: <code className="bg-gray-200 px-2 py-1 rounded text-sm">cd sanity && npx sanity dev</code>
      </p>
      <p className="text-sm text-gray-500">
        Or deploy Studio to{' '}
        <a
          href="https://www.sanity.io/docs/deployment"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Sanity hosting
        </a>
        .
      </p>
      <Link
        href="/"
        className="text-accent font-medium hover:underline"
      >
        ← Back to site
      </Link>
    </div>
  );
}
