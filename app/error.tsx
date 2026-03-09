'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[App] Error boundary:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        We couldn’t load this page. This is often temporary.
      </p>
      <button
        type="button"
        onClick={reset}
        className="px-6 py-3 bg-accent hover:bg-accent-600 text-white font-medium rounded-xl transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
