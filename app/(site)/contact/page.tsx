import { ContactForm } from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Praxis Recruitment',
  description: 'Get in touch with Praxis Recruitment. Tell us about the role you need to fill.',
};

export default function ContactPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-[#16161F] pt-20 pb-24">
        <div className="site-container">
          <div className="max-w-xl">
            <p className="eyebrow mb-5">Contact</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tightest leading-[1.02] mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Tell us about the role you need to fill and we&apos;ll get back to you within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-gap border-t border-black/[0.06]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Left — sidebar */}
            <div className="lg:col-span-1 space-y-10">

              {/* Contact details */}
              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-5">Contact Details</h2>
                <ul className="space-y-5">
                  <li>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Email</p>
                    <a
                      href="mailto:hello@praxisrecruitment.eu"
                      className="text-sm font-medium text-primary hover:text-accent transition-colors"
                    >
                      hello@praxisrecruitment.eu
                    </a>
                  </li>
                  <li>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:text-accent transition-colors"
                    >
                      Praxis Recruitment
                    </a>
                  </li>
                </ul>
              </div>

              {/* Divider */}
              <div className="rule-light" />

              {/* What to expect */}
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-5">What to Expect</h3>
                <ul className="space-y-4">
                  {[
                    'Reply within 1 business day',
                    'Initial consultation call at your convenience',
                    'No commitment required to discuss your needs',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-500 font-light">
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right — form */}
            <div className="lg:col-span-2">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-8">Send a Message</h2>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
