import { defineField, defineType } from 'sanity';

const founderType = defineType({
  name: 'founder',
  title: 'Founder',
  type: 'object',
  fields: [
    defineField({ name: 'name', title: 'Full Name', type: 'string' }),
    defineField({ name: 'role', title: 'Role (e.g. Co-Founder)', type: 'string' }),
    defineField({ name: 'title', title: 'Professional Title', type: 'string' }),
    defineField({ name: 'experienceHeading', title: 'Experience Heading (e.g. "Hands-on experience in:")', type: 'string' }),
    defineField({
      name: 'experienceItems',
      title: 'Experience Items',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 3 }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { name: 'name', role: 'role' },
    prepare({ name, role }) {
      return { title: name ?? 'Founder', subtitle: role ?? '' };
    },
  },
});

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({ name: 'headline', title: 'Page Headline', type: 'string' }),
    defineField({ name: 'intro', title: 'Intro Text', type: 'text', rows: 3 }),
    defineField({
      name: 'founders',
      title: 'Founders',
      type: 'array',
      of: [{ type: 'founder' }],
    }),
    defineField({ name: 'philosophyTitle', title: 'Philosophy Section Title', type: 'string' }),
    defineField({
      name: 'philosophyItems',
      title: 'Philosophy Lines',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {},
    prepare() {
      return { title: 'About Page' };
    },
  },
});

export { founderType };
