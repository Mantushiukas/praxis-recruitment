import { defineField, defineType } from 'sanity';

const processStepType = defineType({
  name: 'processStep',
  title: 'Process Step',
  type: 'object',
  fields: [
    defineField({ name: 'stepNumber', title: 'Step Number', type: 'number' }),
    defineField({ name: 'title', title: 'Step Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
    defineField({
      name: 'items',
      title: 'Bullet Points',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: { stepNumber: 'stepNumber', title: 'title' },
    prepare({ stepNumber, title }) {
      return { title: `${stepNumber ?? ''}. ${title ?? 'Step'}` };
    },
  },
});

export const processPageType = defineType({
  name: 'processPage',
  title: 'Process Page',
  type: 'document',
  fields: [
    defineField({ name: 'headline', title: 'Page Headline', type: 'string' }),
    defineField({ name: 'intro', title: 'Intro Text', type: 'text', rows: 2 }),
    defineField({
      name: 'steps',
      title: 'Process Steps',
      type: 'array',
      of: [{ type: 'processStep' }],
    }),
  ],
  preview: {
    select: {},
    prepare() {
      return { title: 'Process Page' };
    },
  },
});

export { processStepType };
