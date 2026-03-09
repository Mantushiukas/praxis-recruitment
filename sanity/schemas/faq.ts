import { defineField, defineType } from 'sanity';

export const faqItemType = defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'object',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'localizedString',
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'localizedString',
    }),
  ],
  preview: {
    select: { question: 'question.en' },
    prepare({ question }) {
      return { title: question ?? 'FAQ item' };
    },
  },
});

export const faqType = defineType({
  name: 'faq',
  title: 'FAQ Section',
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
      name: 'items',
      title: 'FAQ Items',
      type: 'array',
      of: [{ type: 'faqItem' }],
    }),
  ],
  preview: {
    select: {},
    prepare() {
      return { title: 'FAQ' };
    },
  },
});
