import {defineField, defineType} from 'sanity'
import {BulbOutlineIcon} from '@sanity/icons'

/**
 * Call to action schema object.  Objects are reusable schema structures document.
 * Learn more: https://www.sanity.io/docs/object-type
 */

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'imageBlock',
    }),
  ],
})
