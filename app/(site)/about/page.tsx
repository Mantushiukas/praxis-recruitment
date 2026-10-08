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
  const philosophyItems = (about?.philosophyItems ?? []).map((line) =>
    line.replace('Digital and IT talent requires', 'Digital Marketing and IT Security talent requires')
  );

  type DefaultFounder = {
    name: string;
    role: string;
    title: string;
    experienceHeading: string;
    experienceItems: string[];
    seniorityLevels: string[];
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
      seniorityLevels: ['Specialists', 'Managers', 'Leads', 'Heads'],
      quote: 'With 12+ years of hands-on experience in digital marketing, specialising in Performance Marketing, Paid Media, Social Media and Digital Strategy, I bring a practitioner\'s perspective to recruitment. At Praxis Recruitment, I help companies identify and hire exceptional Digital Marketing talent — from Specialists and Managers to Leads and Heads of Marketing.',
      photoUrl: '/images/zygimantas.png',
      email: 'zygimantas@praxisrecruitment.eu',
    },
    {
      name: 'Mantas Vaitekūnas',
      role: 'Co-Founder',
      title: 'P3O Certified Transformation Leader — 15+ Years Experience',
      experienceHeading: 'Fields I recruit in:',
      experienceItems: [
        'Change Management & Adoption',
        'Cyber Security & Compliance',
        'Business & Digital Transformation',
        'AI, Data & Analytics',
        'Technology & Software Engineering',
        'Programme, Project & Portfolio Management',
      ],
      seniorityLevels: ['Specialists', 'Managers', 'Leads', 'Heads'],
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
    seniorityLevels: string[] | null | undefined,
    quote: string,
    photoSrc: string | null | undefined,
    index: number,
    email?: string
  ) => (
    <div key={index} className="bg-[#1c1b26] border border-white/[0.07] overflow-hidden flex flex-col sm:flex-row group transition-colors duration-300 hover:border-white/[0.12]">

      {/* Photo — left column, full height */}
      <div className="relative sm:w-[38%] h-64 sm:h-auto flex-shrink-0 overflow-hidden">
        {photoSrc ? (
          <>
            <Image
              src={photoSrc}
              alt={name}
              fill
              className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            {/* Gradient right-edge fade into card */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1c1b26] hidden sm:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b26] via-transparent to-transparent sm:hidden" />
          </>
        ) : (
          <div className="w-full h-full bg-accent/10 flex items-center justify-center text-accent font-bold text-5xl">
            {name.charAt(0)}
          </div>
        )}
      </div>

      {/* Content — right column */}
      <div className="flex flex-col flex-1 p-7">

        {/* Name / role / title / email */}
        <div className="mb-5">
          <h2 className="text-xl font-bold text-white">{name}</h2>
          <p className="text-accent font-semibold text-sm mt-0.5">{role}</p>
          <div className="flex items-center gap-2 mt-2">
            <svg className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-200 text-sm">{title}</p>
          </div>
          {email && (
            <a href={`mailto:${email}`} className="inline-flex items-center gap-2 text-gray-500 hover:text-accent transition-colors text-sm mt-1.5">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {email}
            </a>
          )}
        </div>

        {/* Fields list — 2 columns */}
        {experienceItems.length > 0 && (
          <div className="mb-5">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">{experienceHeading}</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 items-start">
              {experienceItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-white text-sm">
                  <svg className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Seniority ladder */}
        {(seniorityLevels ?? []).length > 0 && (
          <div className="mb-5">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Seniority levels we hire at:</p>
            <div className="flex flex-wrap items-center gap-2">
              {(seniorityLevels ?? []).map((level, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full border border-accent/20">{level}</span>
                  {i < (seniorityLevels ?? []).length - 1 && (
                    <svg className="w-3 h-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quote */}
        {quote && (
          <div className="mt-auto border-l-2 border-accent/40 pl-4 pt-4">
              <p className="text-gray-200 italic text-sm leading-relaxed">{quote}</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-[#16161F] pt-20 pb-24 border-b border-white/[0.06]">
        <div className="site-container">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">About Us</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tightest leading-[1.02] mb-6">
              {headline}
            </h1>
            {intro && (
              <p className="text-lg text-gray-200 font-light leading-relaxed max-w-lg">
                {intro}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Founders — LIGHT */}
      <section className="section-gap-sm bg-white border-t border-black/[0.06]">
        <div className="site-container">
          <div className="mb-14">
            <p className="eyebrow mb-3">About Praxis</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tighter mb-3">Meet the Founders</h2>
            <p className="text-gray-900 font-light max-w-lg leading-relaxed">
              We&apos;ve worked in digital marketing and IT security for over 27 years combined.
              Now we use that experience to connect great companies with exceptional talent.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {useSanityFounders
              ? sanityFounders.map((f, i) =>
                  founderCard(
                    f.name ?? '',
                    f.role ?? '',
                    f.title ?? '',
                    f.experienceHeading ?? 'Hands-on experience in:',
                    f.experienceItems ?? [],
                    ['Specialists', 'Managers', 'Leads', 'Heads'],
                    f.quote ?? '',
                    f.photo?.asset?.url,
                    i,
                    f._email
                  )
                )
              : defaultFounders.map((f, i) =>
                  founderCard(f.name, f.role, f.title, f.experienceHeading, f.experienceItems, f.seniorityLevels, f.quote, f.photoUrl, i, f.email)
                )}
          </div>
        </div>
      </section>

      {/* Philosophy — DARK */}
      {philosophyItems.length > 0 && (
        <section className="section-gap bg-[#16161F] border-t border-white/[0.06]">
          <div className="site-container">
            <div className="max-w-xl">
              <p className="eyebrow mb-4">Our Belief</p>
              <h2 className="text-3xl font-bold text-white mb-8 tracking-tighter">
                {philosophyTitle}
              </h2>
              <ul className="divide-y divide-white/[0.06]">
                {philosophyItems.map((line, i) => (
                  <li key={i} className="py-5 text-base text-gray-400 font-light leading-relaxed">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* CTA — LIGHT */}
      <section className="section-gap-sm bg-white border-t border-black/[0.06]">
        <div className="site-container">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-primary tracking-tight mb-1">
                Work with us
              </h2>
              <p className="text-gray-900 font-light text-sm">
                Whether you are hiring or looking for your next role — we would like to hear from you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a href="/for-companies" className="btn-primary px-7 py-3.5">
                Hire with Praxis <span aria-hidden="true">→</span>
              </a>
              <a href="/for-talent" className="btn-ghost-dark px-7 py-3.5">
                Join the Network
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
