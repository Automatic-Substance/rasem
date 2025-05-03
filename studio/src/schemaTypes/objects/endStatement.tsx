import {defineField, defineType} from 'sanity'
import {BulbOutlineIcon} from '@sanity/icons'

/**
 * Call to action schema object.  Objects are reusable schema structures document.
 * Learn more: https://www.sanity.io/docs/object-type
 */

export const endStatement = defineType({
  name: 'endStatement',
  title: 'End Statement',
  type: 'object',
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: 'imageDesktop',
      title: 'Image Desktop',
      type: 'imageBlock',
    }),
    defineField({
      name: 'imageMobile',
      title: 'Image Mobile',
      type: 'imageBlock',
    }),
  ],
})
