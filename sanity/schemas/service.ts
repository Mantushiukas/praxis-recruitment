import { defineField, defineType } from 'sanity';

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'localizedString',
    }),
    defineField({
      name: 'items',
      title: 'Service Items (bullets)',
      type: 'array',
      of: [{ type: 'localizedString' }],
    }),
    defineField({
      name: 'order',
      title: 'Display Order (1 = first)',
      type: 'number',
      validation: (Rule) => Rule.required(),
      initialValue: 1,
    }),
  ],
  preview: {
    select: { title: 'title.en' },
    prepare({ title }) {
      return { title: title ?? 'Service' };
    },
  },
});
