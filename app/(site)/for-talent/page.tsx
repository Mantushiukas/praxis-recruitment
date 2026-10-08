import { TalentForm } from '@/components/TalentForm';
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
      <section className="bg-[#16161F] pt-20 pb-24">
        <div className="site-container">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">For Talent</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tightest leading-[1.02] mb-6">
              Work with recruiters who&apos;ve actually done the job
            </h1>
            <p className="text-lg text-gray-200 font-light leading-relaxed max-w-lg">
              We&apos;re not just recruiters. We come from digital marketing and IT security — so we understand the roles, the skills and what makes a great fit.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-gap bg-white border-t border-black/[0.06]">
        <div className="site-container">

          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tighter mb-3">
              A different kind of recruitment experience
            </h2>
            <p className="text-base text-gray-900 font-light max-w-lg leading-relaxed">
              We&apos;re not a CV board. We&apos;re people who understand your work, value your experience, and take your next career move seriously.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/[0.06]">
            {benefits.map((item, index) => (
              <div key={index} className="bg-white p-8 group hover:bg-gray-50 transition-colors duration-200">
                <span className="text-xs font-semibold text-accent/60 uppercase tracking-widest mb-4 block">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-base font-semibold text-primary mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-900 font-light leading-relaxed">
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
          <div className="flex flex-wrap gap-2">
            {fields.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 border border-white/10 text-gray-300 text-sm font-medium rounded-md hover:border-accent/50 hover:text-white transition-colors"
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
