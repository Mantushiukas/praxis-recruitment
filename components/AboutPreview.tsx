import Link from 'next/link';

export const AboutPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6 tracking-tight">
              About Praxis Recruitment
            </h2>
            <div className="prose prose-lg mx-auto text-gray-500">
              <p className="mb-4 font-normal leading-relaxed">
                Praxis Recruitment is built on a foundation of real-world experience. 
                Our team consists of seasoned professionals who have worked across Technology, 
                Digital Marketing, and HR sectors, giving us unique insight into what makes 
                great hires.
              </p>
              <p className="mb-6 font-normal leading-relaxed">
                We don&apos;t just match resumes to job descriptions. We understand the nuances of 
                each role, the culture of your organization, and the aspirations of candidates. 
                This practitioner&apos;s perspective means faster placements, better fits, and 
                long-term success for both employers and candidates.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center text-accent hover:text-accent-600 font-medium transition-colors"
            >
              Learn more about us
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
