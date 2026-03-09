const jobListFields = `
  _id,
  _type,
  title,
  "slug": slug.current,
  company,
  location,
  workType,
  salaryMin,
  salaryMax,
  salaryCurrency,
  salaryNote,
  contactEmail,
  applyUrl,
  isPublished,
  publishedAt
`;

const jobDetailFields = `
  _id,
  _type,
  title,
  "slug": slug.current,
  company,
  location,
  workType,
  salaryMin,
  salaryMax,
  salaryCurrency,
  salaryNote,
  description,
  requirements,
  benefits,
  contactEmail,
  applyUrl,
  isPublished,
  publishedAt
`;

export const jobsListQuery = `*[_type == "job" && isPublished != false] | order(publishedAt desc) {
  ${jobListFields}
}`;

export const jobBySlugQuery = `*[_type == "job" && slug.current == $slug && isPublished != false][0] {
  ${jobDetailFields}
}`;

export const jobByIdQuery = `*[_type == "job" && _id == $id && isPublished != false][0] {
  ${jobDetailFields}
}`;

export const recentJobsQuery = `*[_type == "job" && isPublished != false] | order(publishedAt desc) [0...3] {
  ${jobListFields}
}`;

// Homepage content (singletons)
export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  heroHeadline, heroSubline1, heroSubline2, heroSubline3,
  sectionWhatWeDo, sectionWhatWeDoSubtitle,
  finalCtaTitle, finalCtaSubtitle,
  footerTagline, footerCopyright,
  contactEmail, companyRegistrationNumber, showRegistrationNumber, linkedinUrl, showClientLogos, showStatistics, showTestimonials
}`;

export const whyPraxisQuery = `*[_type == "whyPraxis"][0] {
  title, subtitle1, subtitle2, foundersTitle, founder1, founder2,
  message1, message2, message3
}`;

export const pricingQuery = `*[_type == "pricing"][0] {
  title, subtitle, fee, feeDescription, feeNote,
  dependsOnTitle, dependsOn, includedTitle, included
}`;

export const faqQuery = `*[_type == "faq"][0] {
  title, subtitle, items[] { question, answer }
}`;

export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id, title, description, items, order
}`;

export const statisticsQuery = `*[_type == "statistic" && isVisible != false] | order(order asc) {
  _id, value, label, order, isVisible
}`;

export const testimonialsQuery = `*[_type == "testimonial" && isVisible != false] | order(order asc) {
  _id, quote, authorName, authorRole, authorCompany,
  photo { asset -> { url } }, order
}`;

export const clientLogosQuery = `*[_type == "clientLogo"] | order(order asc) {
  _id, companyName, logo { asset -> { url } }, website, order
}`;

export const processPageQuery = `*[_type == "processPage"][0] {
  headline, intro,
  steps[] { stepNumber, title, description, items }
}`;

export const aboutPageQuery = `*[_type == "aboutPage"][0] {
  headline, intro,
  founders[] {
    name, role, title, experienceHeading, experienceItems, quote,
    photo { asset -> { url } }
  },
  philosophyTitle, philosophyItems
}`;
