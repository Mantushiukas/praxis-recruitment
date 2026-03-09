import { defineField, defineType } from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'localizedString',
      description: 'Main headline on homepage',
    }),
    defineField({
      name: 'heroSubline1',
      title: 'Hero Subline 1',
      type: 'localizedString',
      description: 'First paragraph under headline',
    }),
    defineField({
      name: 'heroSubline2',
      title: 'Hero Subline 2',
      type: 'localizedString',
    }),
    defineField({
      name: 'heroSubline3',
      title: 'Hero Subline 3',
      type: 'localizedString',
    }),
    defineField({
      name: 'sectionWhatWeDo',
      title: 'Section: What We Do (heading)',
      type: 'localizedString',
    }),
    defineField({
      name: 'sectionWhatWeDoSubtitle',
      title: 'Section: What We Do (subtitle)',
      type: 'localizedString',
    }),
    defineField({
      name: 'finalCtaTitle',
      title: 'Final CTA Title',
      type: 'localizedString',
    }),
    defineField({
      name: 'finalCtaSubtitle',
      title: 'Final CTA Subtitle',
      type: 'localizedString',
    }),
    defineField({
      name: 'footerTagline',
      title: 'Footer Tagline',
      type: 'localizedString',
    }),
    defineField({
      name: 'footerCopyright',
      title: 'Footer Copyright',
      type: 'localizedString',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'companyRegistrationNumber',
      title: 'Company Registration Number',
      type: 'string',
    }),
    defineField({
      name: 'showRegistrationNumber',
      title: 'Show Registration Number in Footer',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle to show or hide the registration number in the footer.',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'showClientLogos',
      title: 'Show "Trusted By" logos section',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle to show or hide the client logos strip on the homepage.',
    }),
    defineField({
      name: 'showStatistics',
      title: 'Show statistics section',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle to show or hide the stats strip on the homepage.',
    }),
    defineField({
      name: 'showTestimonials',
      title: 'Show testimonials section',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle to show or hide the testimonials section on the homepage.',
    }),
  ],
});
