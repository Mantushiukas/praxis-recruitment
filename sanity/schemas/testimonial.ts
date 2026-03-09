import { defineField, defineType } from 'sanity';

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (Rule) => Rule.required() }),
    defineField({ name: 'authorName', title: 'Author Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'authorRole', title: 'Author Role', type: 'string' }),
    defineField({ name: 'authorCompany', title: 'Author Company', type: 'string' }),
    defineField({ name: 'photo', title: 'Author Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', initialValue: 1 }),
    defineField({
      name: 'isVisible',
      title: 'Visible on site',
      type: 'boolean',
      initialValue: true,
      description: 'Uncheck to hide this testimonial without deleting it.',
    }),
  ],
  preview: {
    select: { authorName: 'authorName', authorCompany: 'authorCompany' },
    prepare({ authorName, authorCompany }) {
      return { title: authorName ?? 'Testimonial', subtitle: authorCompany ?? '' };
    },
  },
});
