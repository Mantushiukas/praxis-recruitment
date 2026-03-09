import { defineField, defineType } from 'sanity';

export const jobType = defineType({
  name: 'job',
  title: 'Job Posting',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      placeholder: 'Vilnius, Lithuania',
    }),
    defineField({
      name: 'workType',
      title: 'Work Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'full-time' },
          { title: 'Part-time', value: 'part-time' },
          { title: 'Contract', value: 'contract' },
          { title: 'Temporary', value: 'temporary' },
        ],
      },
    }),
    defineField({
      name: 'salaryMin',
      title: 'Minimum Salary',
      type: 'number',
    }),
    defineField({
      name: 'salaryMax',
      title: 'Maximum Salary',
      type: 'number',
    }),
    defineField({
      name: 'salaryCurrency',
      title: 'Currency',
      type: 'string',
      options: { list: ['EUR', 'USD', 'GBP'] },
    }),
    defineField({
      name: 'salaryNote',
      title: 'Salary Note',
      type: 'string',
      placeholder: 'e.g. before tax, gross monthly',
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'applyUrl',
      title: 'Apply URL',
      type: 'url',
    }),
    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
  ],
  preview: {
    select: { title: 'title', company: 'company' },
    prepare({ title, company }) {
      return {
        title: title ?? 'Untitled',
        subtitle: company ?? '',
      };
    },
  },
});
