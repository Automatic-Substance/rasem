import {defineField, defineType} from 'sanity'
import {BulbOutlineIcon} from '@sanity/icons'

/**
 * Call to action schema object.  Objects are reusable schema structures document.
 * Learn more: https://www.sanity.io/docs/object-type
 */

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'object',
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: 'description',
      title: 'Footer Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'contactdescription',
      title: 'Contact Description',
      type: 'blockContent',
    }),
  ],
})
