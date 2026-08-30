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
    email: string;
  };

  const defaultFounders: DefaultFounder[] = [
    {
      name: 'Žygimantas Pocius',
      role: 'Co-Founder',
      title: 'Digital Marketer — 12+ Years Experience',
      experienceHeading: 'Fields I recruit in:',
      experienceItems: [
        'Digital Marketing',
        'Performance Marketing',
        'Paid Media & Social Media',
        'Growth & User Acquisition',
        'E-commerce',
        'SEO & Content Marketing',
      ],
      quote: 'With 12+ years of hands-on experience in digital marketing, specialising in Performance Marketing, Paid Media, Social Media and Digital Strategy, I bring a practitioner\'s perspective to recruitment. At Praxis Recruitment, I help companies identify and hire exceptional Digital Marketing talent — from Specialists and Managers to Leads and Heads of Marketing.',
      photoUrl: '/images/zygimantas.png',
      email: 'zygimantas@praxisrecruitment.eu',
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
      quote: 'Having spent 15+ years in the trenches leading major change transformations across IT, telecom, and security, I instantly know the difference between someone who talks governance and change delivery, and someone who actually executes it.',
      photoUrl: '/images/mantas.png',
      email: 'mantas@praxisrecruitment.eu',
    },
  ];

  // Local fallbacks keyed by first name
  const localPhotos: Record<string, string> = {
    'Žygimantas': '/images/zygimantas.png',
    'Mantas': '/images/mantas.png',
  };

  const localEmails: Record<string, string> = {
    'Žygimantas': 'zygimantas@praxisrecruitment.eu',
    'Mantas': 'mantas@praxisrecruitment.eu',
  };

  const useSanityFounders = false;
  const sanityFounders = (about?.founders ?? []).map((f) => {
    const firstName = f.name?.split(' ')[0] ?? '';
    const withPhoto = f.photo?.asset?.url
      ? f
      : { ...f, photo: { asset: { url: localPhotos[firstName] ?? null } } };
    return { ...withPhoto, _email: localEmails[firstName] ?? '' };
  });

  const founderCard = (
    name: string,
    role: string,
    title: string,
    experienceHeading: string,
    experienceItems: string[],
    quote: string,
    photoSrc: string | null | undefined,
    index: number,
    email?: string
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
          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-1.5 text-gray-500 hover:text-accent transition-colors text-sm mt-2"
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {email}
            </a>
          )}
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
          <div className="mt-6 border-l-2 border-accent/50 pl-4">
            <p className="text-gray-400 italic text-sm leading-relaxed">{quote}</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <main className="bg-[#16161F]">
      {/* Hero */}
      <section className="bg-[#23232F] border-b border-white/5 pt-16 pb-14">
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
                    i,
                    f._email
                  )
                )
              : defaultFounders.map((f, i) =>
                  founderCard(f.name, f.role, f.title, f.experienceHeading, f.experienceItems, f.quote, f.photoUrl, i, f.email)
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
