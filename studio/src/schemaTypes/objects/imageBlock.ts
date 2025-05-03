import {defineType} from 'sanity'

export const imageBlock = defineType({
  name: 'imageBlock',
  title: 'Image Block',
  type: 'image',
  options: {
    hotspot: true,
    aiAssist: {
      imageDescriptionField: 'alt',
    },
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessibility.',
      validation: (rule) => {
        // Custom validation to ensure alt text is provided if the image is present. https://www.sanity.io/docs/validation
        return rule.custom((alt, context) => {
          if ((context.document?.coverImage as any)?.asset?._ref && !alt) {
            return 'Required'
          }
          return true
        })
      },
    },
  ],
  validation: (rule) => rule.required(),
})
