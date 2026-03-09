'use client';

import { AnimatedCounter } from './AnimatedCounter';
import { useHomepageContent } from '@/contexts/HomepageContentContext';

const statIcons = [
  <svg key="icon-0" className="w-8 h-8 mx-auto mb-3 text-accent/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="icon-1" className="w-8 h-8 mx-auto mb-3 text-accent/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  <svg key="icon-2" className="w-8 h-8 mx-auto mb-3 text-accent/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
];


export const TrustStrip = () => {
  const content = useHomepageContent();
  const showStats = content?.siteSettings?.showStatistics !== false;
  const stats = showStats ? (content?.statistics ?? []) : [];
  const showLogos = content?.siteSettings?.showClientLogos === true;
  const logos = showLogos ? (content?.clientLogos ?? []) : [];

  if (stats.length === 0 && logos.length === 0) return null;

  return (
    <section className="bg-white py-16 border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        {stats.length > 0 && (
          <div className={`grid grid-cols-1 gap-12 ${logos.length > 0 ? 'mb-16' : ''} divide-y md:divide-y-0 md:divide-x divide-gray-200 md:grid-cols-${Math.min(stats.length, 4)}`}>
            {stats.map((stat, index) => (
              <div key={stat._id ?? index} className="text-center pt-8 md:pt-0 first:pt-0">
                {statIcons[index % statIcons.length]}
                <AnimatedCounter value={stat.value} />
                <div className="text-base md:text-lg text-gray-600 font-normal mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Trusted By — only shown if logos exist in Sanity */}
        {logos.length > 0 && (
          <div className="text-center">
            <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-8">
              Trusted by Leading Companies
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {logos.map((logo) => (
                logo.website ? (
                  <a
                    key={logo._id}
                    href={logo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={logo.companyName}
                    className="transition-opacity hover:opacity-80"
                  >
                    {logo.logo?.asset?.url ? (
                      <img
                        src={logo.logo.asset.url}
                        alt={logo.companyName}
                        className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                      />
                    ) : (
                      <span className="text-gray-400 font-normal text-sm px-6 py-3 border border-gray-200 rounded-xl bg-gray-50/50">
                        {logo.companyName}
                      </span>
                    )}
                  </a>
                ) : (
                  <div key={logo._id}>
                    {logo.logo?.asset?.url ? (
                      <img
                        src={logo.logo.asset.url}
                        alt={logo.companyName}
                        className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                      />
                    ) : (
                      <span className="text-gray-400 font-normal text-sm px-6 py-3 border border-gray-200 rounded-xl bg-gray-50/50">
                        {logo.companyName}
                      </span>
                    )}
                  </div>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
