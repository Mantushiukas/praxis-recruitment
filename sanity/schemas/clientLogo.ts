import { defineField, defineType } from 'sanity';

export const clientLogoType = defineType({
  name: 'clientLogo',
  title: 'Client Logo',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { companyName: 'companyName', media: 'logo' },
    prepare({ companyName }) {
      return { title: companyName ?? 'Client' };
    },
  },
});
