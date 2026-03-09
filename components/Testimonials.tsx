'use client';

import { useHomepageContent } from '@/contexts/HomepageContentContext';

export const Testimonials = () => {
  const content = useHomepageContent();
  const show = content?.siteSettings?.showTestimonials === true;
  const testimonials = show ? (content?.testimonials ?? []) : [];

  if (!show || testimonials.length === 0) return null;

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-3">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-lg font-normal">
            Real results from real partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t._id}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Quote mark */}
              <div className="text-accent text-5xl font-bold leading-none mb-4 select-none">&ldquo;</div>

              {/* Quote */}
              <p className="text-gray-700 font-normal leading-relaxed flex-1 mb-6">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                {t.photo?.asset?.url ? (
                  <img
                    src={t.photo.asset.url}
                    alt={t.authorName}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold flex-shrink-0">
                    {t.authorName.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-primary text-sm">{t.authorName}</p>
                  {(t.authorRole || t.authorCompany) && (
                    <p className="text-gray-500 text-xs">
                      {[t.authorRole, t.authorCompany].filter(Boolean).join(' · ')}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
