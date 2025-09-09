import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'githubLink',
      title: 'GitHub Link',
      type: 'url',
      validation: (Rule) => 
        Rule.uri({
          scheme: ['http', 'https'],
        }).custom((url) => {
          if (url && !url.includes('github.com')) {
            return 'Please enter a valid GitHub URL'
          }
          return true
        }),
    }),
    defineField({
      name: 'websiteLink',
      title: 'Website Link',
      type: 'url',
      validation: (Rule) => 
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
      description: 'description',
    },
    prepare(selection) {
      const {title, media, description} = selection
      return {
        title,
        media,
        subtitle: description ? `${description.substring(0, 60)}...` : '',
      }
    },
  },
})
