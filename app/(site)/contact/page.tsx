import { ContactForm } from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Praxis Recruitment',
  description: 'Get in touch with Praxis Recruitment. Tell us about the role you need to fill.',
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-white font-semibold max-w-2xl mx-auto leading-relaxed">
            Tell us about the role you need to fill and we&apos;ll get back to you within one business day.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left — contact details */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-primary mb-6">Contact Details</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary">Email</p>
                      <a
                        href="mailto:hello@praxisrecruitment.eu"
                        className="text-gray-600 hover:text-accent transition-colors text-sm"
                      >
                        hello@praxisrecruitment.eu
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-accent transition-colors text-sm"
                      >
                        Praxis Recruitment
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* What to expect */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-4">What to expect</h3>
                <ul className="space-y-3">
                  {[
                    'Reply within 1 business day',
                    'Initial consultation call at your convenience',
                    'No commitment required to discuss your needs',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-primary mb-6">Send us a message</h2>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
