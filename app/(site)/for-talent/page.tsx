import { TalentForm } from '@/components/TalentForm';
import { WaveBackground } from '@/components/WaveBackground';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Talent — Praxis Recruitment',
  description: 'Join the Praxis network of digital and tech professionals. We connect you with companies that understand what you do.',
};

const benefits = [
  {
    title: 'Assessed by practitioners',
    description: 'You will be evaluated by someone who has done the work — not a recruiter reading a checklist.',
  },
  {
    title: 'Honest communication',
    description: 'We tell you exactly what the role involves, how the company works, and what the realistic expectation is.',
  },
  {
    title: 'Relevant opportunities',
    description: 'We only reach out when there is a genuine match — not to fill quotas or tick KPI boxes.',
  },
  {
    title: 'Confidential by default',
    description: 'Your details are never shared without your explicit consent.',
  },
];

const fields = [
  'Digital Marketing',
  'Performance Marketing',
  'Paid Media & Social Media',
  'Growth & User Acquisition',
  'E-commerce',
  'SEO & Content Marketing',
  'Change Management & Adoption',
  'Cyber Security & Compliance',
  'Business & Digital Transformation',
  'AI, Data & Analytics',
  'Technology & Software Engineering',
  'Programme, Project & Portfolio Management',
];

export default function ForTalentPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#16161F] pt-20 pb-24">
        <WaveBackground />
        <div className="site-container">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">For Talent</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tightest leading-[1.02] mb-6">
              Work with recruiters who&apos;ve actually done the job
            </h1>
            <p className="max-w-2xl text-lg font-light leading-relaxed text-gray-200">
              We&apos;re not just recruiters. We come from digital marketing and IT<br />
              security — so we understand the roles, the skills and what makes a great fit.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-gap border-t border-accent/10 bg-accent-50">
        <div className="site-container">

          <div className="mb-14">
            <h2 className="text-3xl font-bold tracking-tighter text-primary md:text-4xl">
              A different kind of recruitment experience
            </h2>
            <p className="mt-3 max-w-lg text-base font-light leading-relaxed text-gray-900">
              We&apos;re not a CV board. We&apos;re people who understand your work, value your experience, and take your next career move seriously.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {benefits.map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-lg border border-black/[0.06] bg-white p-6 transition-colors duration-200 hover:border-accent/35"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 bg-accent/70" aria-hidden="true" />
                <span className="mb-4 block text-2xl font-bold text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-2 text-base font-semibold leading-snug tracking-tight text-primary">
                  {item.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-gray-900">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Fields */}
      <section className="section-gap-sm bg-[#16161F] border-t border-white/[0.06]">
        <div className="site-container">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tighter mb-2">
              Fields we recruit in
            </h2>
            <p className="text-gray-200 font-light text-sm">Roles where experience and depth matter.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {fields.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-accent/55 bg-accent/20 px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_24px_rgba(119,86,181,0.12)] transition-colors duration-200 hover:border-accent/80 hover:bg-accent/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-gap bg-white border-t border-black/[0.06]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow mb-4">Join the Network</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tighter mb-4">
                Join our network
              </h2>
              <p className="text-gray-900 font-light text-base leading-relaxed mb-2">
                Tell us who you are and what you are looking for. We will reach out when there is a relevant match.
              </p>
              <p className="text-sm text-gray-700">
                Or{' '}
                <Link href="/jobs" className="text-accent hover:underline font-medium">
                  browse open roles
                </Link>{' '}
                directly.
              </p>
            </div>
            <div>
              <TalentForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
