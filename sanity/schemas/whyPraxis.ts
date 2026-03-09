import { defineField, defineType } from 'sanity';

export const whyPraxisType = defineType({
  name: 'whyPraxis',
  title: 'Why Praxis (Founders & Messages)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'localizedString',
    }),
    defineField({
      name: 'subtitle1',
      title: 'Subtitle 1',
      type: 'localizedString',
    }),
    defineField({
      name: 'subtitle2',
      title: 'Subtitle 2',
      type: 'localizedString',
    }),
    defineField({
      name: 'foundersTitle',
      title: 'Founders Heading',
      type: 'localizedString',
    }),
    defineField({
      name: 'founder1',
      title: 'Founder 1 (name & role)',
      type: 'localizedString',
    }),
    defineField({
      name: 'founder2',
      title: 'Founder 2 (name & role)',
      type: 'localizedString',
    }),
    defineField({
      name: 'message1',
      title: 'Message 1',
      type: 'localizedString',
    }),
    defineField({
      name: 'message2',
      title: 'Message 2',
      type: 'localizedString',
    }),
    defineField({
      name: 'message3',
      title: 'Message 3',
      type: 'localizedString',
    }),
  ],
  preview: {
    select: {},
    prepare() {
      return { title: 'Why Praxis' };
    },
  },
});
