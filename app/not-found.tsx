import Link from 'next/link';
import { Logo } from '@/components/Logo';

export default function NotFound() {
  const links = [
    { label: 'For Companies', href: '/for-companies' },
    { label: 'For Talent', href: '/for-talent' },
    { label: 'How We Work', href: '/how-we-work' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <main className="min-h-screen bg-[#16161F] flex flex-col">
      {/* Top bar */}
      <div className="px-8 py-6 border-b border-white/5">
        <Logo variant="footer" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* 404 number */}
        <p className="text-[10rem] md:text-[14rem] font-bold leading-none text-white/5 select-none">
          404
        </p>

        <div className="-mt-8 md:-mt-12 mb-8">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Page not found
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            This page does not exist
          </h1>
          <p className="text-gray-400 font-light max-w-sm mx-auto">
            The link may be broken or the page may have been removed. Head back to where you came from.
          </p>
        </div>

        {/* Primary CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/20 mb-12"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Back to Home
        </Link>

        {/* Secondary nav */}
        <div className="border-t border-white/5 pt-8 w-full max-w-sm">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Or go to</p>
          <div className="flex flex-wrap justify-center gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white border border-white/10 hover:border-accent/50 px-4 py-2 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <p className="text-center text-white/20 text-sm pb-8">
        Praxis Recruitment — Built by Practitioners
      </p>
    </main>
  );
}
