import { defineField, defineType } from 'sanity';

export const localizedStringType = defineType({
  name: 'localizedString',
  title: 'Text (English)',
  type: 'object',
  fields: [
    defineField({
      name: 'en',
      title: 'English',
      type: 'string',
    }),
  ],
});
