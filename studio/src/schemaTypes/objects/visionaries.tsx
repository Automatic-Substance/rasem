import {defineField, defineType} from 'sanity'
import {BulbOutlineIcon} from '@sanity/icons'

/**
 * Call to action schema object.  Objects are reusable schema structures document.
 * Learn more: https://www.sanity.io/docs/object-type
 */

export const visionaries = defineType({
  name: 'visionaries',
  title: 'Visionaries',
  type: 'object',
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: 'imageOne',
      title: 'Image One',
      type: 'imageBlock',
    }),
  ],
})
