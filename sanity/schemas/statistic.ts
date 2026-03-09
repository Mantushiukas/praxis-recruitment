import { defineField, defineType } from 'sanity';

export const statisticType = defineType({
  name: 'statistic',
  title: 'Statistic',
  type: 'document',
  fields: [
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      placeholder: '85%',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      placeholder: 'Clients Return',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isVisible',
      title: 'Visible on site',
      type: 'boolean',
      initialValue: true,
      description: 'Uncheck to hide this stat without deleting it.',
    }),
  ],
  preview: {
    select: { value: 'value', label: 'label' },
    prepare({ value, label }) {
      return {
        title: `${value ?? ''} ${label ?? ''}`.trim() || 'Statistic',
      };
    },
  },
});
