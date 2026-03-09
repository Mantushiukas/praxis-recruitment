import { getAboutPage } from '@/lib/sanity';
import type { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'About | Praxis Recruitment',
};

export default async function AboutPage() {
  const about = await getAboutPage();

  const headline = about?.headline ?? 'Built by Practitioners';
  const intro = about?.intro ?? 'Praxis Recruitment was founded to change how Digital and IT hiring works.';
  const founders = about?.founders ?? [];
  const philosophyTitle = about?.philosophyTitle ?? 'Our Philosophy';
  const philosophyItems = about?.philosophyItems ?? [];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            {headline}
          </h1>
          {intro && (
            <p className="text-xl md:text-2xl text-white font-semibold max-w-2xl mx-auto leading-relaxed">
              {intro}
            </p>
          )}
        </div>
      </section>

      {/* Founders */}
      {founders.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {founders.map((founder, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Avatar / Photo */}
                  <div className="flex items-center gap-4 mb-6">
                    {founder.photo?.asset?.url ? (
                      <img
                        src={founder.photo.asset.url}
                        alt={founder.name ?? ''}
                        className="w-16 h-16 rounded-full object-cover border-2 border-accent/30"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xl flex-shrink-0">
                        {founder.name?.charAt(0) ?? '?'}
                      </div>
                    )}
                    <div>
                      <h2 className="text-xl font-bold text-primary">{founder.name}</h2>
                      {founder.role && (
                        <p className="text-accent font-semibold text-sm">{founder.role}</p>
                      )}
                      {founder.title && (
                        <p className="text-gray-500 text-sm">{founder.title}</p>
                      )}
                    </div>
                  </div>

                  {/* Experience */}
                  {(founder.experienceItems ?? []).length > 0 && (
                    <div className="mb-6">
                      {founder.experienceHeading && (
                        <p className="text-sm font-semibold text-gray-600 mb-3">
                          {founder.experienceHeading}
                        </p>
                      )}
                      <ul className="space-y-2">
                        {(founder.experienceItems ?? []).map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Quote */}
                  {founder.quote && (
                    <blockquote className="border-l-4 border-accent pl-4 mt-4">
                      <p className="text-gray-600 italic text-sm leading-relaxed">
                        &ldquo;{founder.quote}&rdquo;
                      </p>
                    </blockquote>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Philosophy */}
      {philosophyItems.length > 0 && (
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-primary mb-10 tracking-tight">
              {philosophyTitle}
            </h2>
            <ul className="space-y-4">
              {philosophyItems.map((line, i) => (
                <li key={i} className="text-lg text-gray-700 font-light leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
