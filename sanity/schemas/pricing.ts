import { defineField, defineType } from 'sanity';

export const pricingType = defineType({
  name: 'pricing',
  title: 'Pricing Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'localizedString',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'localizedString',
    }),
    defineField({
      name: 'fee',
      title: 'Fee (e.g. 12–25 %)',
      type: 'localizedString',
    }),
    defineField({
      name: 'feeDescription',
      title: 'Fee Description',
      type: 'localizedString',
    }),
    defineField({
      name: 'feeNote',
      title: 'Fee Note',
      type: 'localizedString',
    }),
    defineField({
      name: 'dependsOnTitle',
      title: 'Depends On (heading)',
      type: 'localizedString',
    }),
    defineField({
      name: 'dependsOn',
      title: 'Depends On (list items)',
      type: 'array',
      of: [{ type: 'localizedString' }],
    }),
    defineField({
      name: 'includedTitle',
      title: 'Included (heading)',
      type: 'localizedString',
    }),
    defineField({
      name: 'included',
      title: 'Included (list items)',
      type: 'array',
      of: [{ type: 'localizedString' }],
    }),
  ],
  preview: {
    select: {},
    prepare() {
      return { title: 'Pricing' };
    },
  },
});
