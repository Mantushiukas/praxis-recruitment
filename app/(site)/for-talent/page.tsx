import { TalentForm } from '@/components/TalentForm';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Talent — Praxis Recruitment',
  description: 'Join the Praxis network of digital and tech professionals. We connect you with companies that understand what you do.',
};

const benefits = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Assessed by practitioners',
    description: 'You will be evaluated by someone who has done the work — not a recruiter reading a checklist.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: 'Honest communication',
    description: 'We tell you exactly what the role involves, how the company works, and what the realistic expectation is.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Relevant opportunities',
    description: 'We only reach out when there is a genuine match — not to fill quotas or tick KPI boxes.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Confidential by default',
    description: 'Your details are never shared without your explicit consent.',
  },
];

export default function ForTalentPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              For Talent
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Work with recruiters who understand your field
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-2xl">
              We build long-term relationships with digital and tech professionals — so when the right role comes along, we already know you.
            </p>
          </div>
        </div>
      </section>

      {/* Why join network */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
              A different kind of recruitment experience
            </h2>
            <p className="text-lg text-gray-500 font-light max-w-xl mx-auto">
              We are not a CV board. We are a network of people who take their work seriously.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-accent/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-primary text-sm mb-1 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles we work with */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight mb-3">
              Fields we recruit in
            </h2>
            <p className="text-gray-500 font-light">Roles where experience and depth matter.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Performance Marketing',
              'PPC & Paid Media',
              'Growth & Analytics',
              'Software Engineering',
              'Machine Learning',
              'Data Engineering',
              'Product Management',
              'UX & Product Design',
              'Engineering Management',
              'AI & LLM',
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-white border border-gray-200 text-primary text-sm font-medium rounded-full hover:border-accent hover:text-accent transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
              Join our network
            </h2>
            <p className="text-gray-500 font-light text-lg">
              Tell us who you are and what you are looking for. We will reach out when there is a relevant match.
            </p>
          </div>
          <TalentForm />
          <p className="text-center text-xs text-gray-400 mt-6">
            Or{' '}
            <Link href="/jobs" className="text-accent hover:underline">
              browse open roles
            </Link>{' '}
            directly.
          </p>
        </div>
      </section>
    </>
  );
}
