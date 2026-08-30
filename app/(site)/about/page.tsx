import { getAboutPage } from '@/lib/sanity';
import Image from 'next/image';
import type { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'About — Praxis Recruitment',
  description: 'Praxis Recruitment was founded by practitioners in digital marketing and technology to change how specialist hiring works.',
};

export default async function AboutPage() {
  const about = await getAboutPage();

  const headline = about?.headline ?? 'Built by Practitioners';
  const intro = about?.intro ?? 'Praxis Recruitment was founded to change how Digital and IT hiring works.';
  const philosophyTitle = about?.philosophyTitle ?? 'Our Philosophy';
  const philosophyItems = about?.philosophyItems ?? [];

  type DefaultFounder = {
    name: string;
    role: string;
    title: string;
    experienceHeading: string;
    experienceItems: string[];
    quote: string;
    photoUrl: string | null;
  };

  const defaultFounders: DefaultFounder[] = [
    {
      name: 'Žygimantas Pocius',
      role: 'Co-Founder',
      title: 'Digital Marketer — 12+ Years Experience',
      experienceHeading: 'Hands-on experience in:',
      experienceItems: [
        'Performance marketing',
        'PPC strategy',
        'Growth scaling',
        'Analytics',
        'Team development',
      ],
      quote: 'I evaluate candidates the way I would evaluate someone joining my own team.',
      photoUrl: '/images/zygimantas.png',
    },
    {
      name: 'Mantas Vaitekunas',
      role: 'Co-Founder',
      title: 'P3O Certified Transformation Leader — 15+ Years Experience',
      experienceHeading: 'Hands-on experience in:',
      experienceItems: [
        'Change management & portfolio governance (P3O)',
        'Cybersecurity & TPRM transformations',
        'End-to-end project execution & roadmap planning',
        'Security maturity assessments (NIST framework)',
        'AI adoption & infrastructure implementation',
      ],
      quote: 'I evaluate candidates through the eyes of a certified practitioner who has led large-scale portfolio transformations and delivered critical change from the inside.',
      photoUrl: '/images/mantas.png',
    },
  ];

  // Local photo fallbacks keyed by first name
  const localPhotos: Record<string, string> = {
    'Žygimantas': '/images/zygimantas.png',
    'Mantas': '/images/mantas.png',
  };

  const useSanityFounders = (about?.founders ?? []).length >= 2;
  const sanityFounders = (about?.founders ?? []).map((f) => {
    if (f.photo?.asset?.url) return f;
    const firstName = f.name?.split(' ')[0] ?? '';
    const localPhoto = localPhotos[firstName];
    return localPhoto
      ? { ...f, photo: { asset: { url: localPhoto } } }
      : f;
  });

  const founderCard = (
    name: string,
    role: string,
    title: string,
    experienceHeading: string,
    experienceItems: string[],
    quote: string,
    photoSrc: string | null | undefined,
    index: number
  ) => (
    <div key={index} className="bg-[#1c1b26] rounded-2xl overflow-hidden shadow-xl flex flex-col group hover:shadow-accent/20 transition-shadow duration-300">
      {/* Photo */}
      {photoSrc ? (
        <div className="relative w-full h-80 overflow-hidden">
          <Image
            src={photoSrc}
            alt={name}
            fill
            className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b26] via-[#1c1b26]/20 to-transparent" />
        </div>
      ) : (
        <div className="w-full h-80 bg-accent/10 flex items-center justify-center text-accent font-bold text-4xl">
          {name.charAt(0)}
        </div>
      )}

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <div className="mb-5">
          <h2 className="text-xl font-bold text-white">{name}</h2>
          <p className="text-accent font-semibold text-sm mt-0.5">{role}</p>
          <p className="text-gray-400 text-sm mt-1">{title}</p>
        </div>

        {experienceItems.length > 0 && (
          <div className="mb-6">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">{experienceHeading}</p>
            <ul className="space-y-2">
              {experienceItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {quote && (
          <div className="mt-6 pt-6 border-t border-white/10">
            <svg className="w-8 h-8 text-accent/40 mb-2" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7c0-1.654 1.346-3 3-3V8zm18 0c-3.314 0-6 2.686-6 6v10h10V14h-7c0-1.654 1.346-3 3-3V8z" />
            </svg>
            <p className="text-gray-300 italic text-sm leading-relaxed">{quote}</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <main className="bg-[#16161F]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary to-[#16161F] pt-16 pb-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            {headline}
          </h1>
          {intro && (
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
              {intro}
            </p>
          )}
        </div>
      </section>

      {/* Founders */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">The Team</p>
            <h2 className="text-3xl font-bold text-white tracking-tight">Meet the Founders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useSanityFounders
              ? sanityFounders.map((f, i) =>
                  founderCard(
                    f.name ?? '',
                    f.role ?? '',
                    f.title ?? '',
                    f.experienceHeading ?? 'Hands-on experience in:',
                    f.experienceItems ?? [],
                    f.quote ?? '',
                    f.photo?.asset?.url,
                    i
                  )
                )
              : defaultFounders.map((f, i) =>
                  founderCard(f.name, f.role, f.title, f.experienceHeading, f.experienceItems, f.quote, f.photoUrl, i)
                )}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      {philosophyItems.length > 0 && (
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Our Belief</p>
            <h2 className="text-3xl font-bold text-white mb-10 tracking-tight">
              {philosophyTitle}
            </h2>
            <ul className="space-y-5">
              {philosophyItems.map((line, i) => (
                <li key={i} className="text-lg text-gray-300 font-light leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
            Work with us
          </h2>
          <p className="text-gray-400 font-light mb-8">
            Whether you are hiring or looking for your next role — we would like to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/for-companies"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              Hire with Praxis
            </a>
            <a
              href="/for-talent"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-accent hover:text-accent text-white font-semibold px-7 py-3.5 rounded-xl transition-all"
            >
              Join the Network
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
