import {defineField, defineType} from 'sanity'
import {BulbOutlineIcon} from '@sanity/icons'

/**
 * Call to action schema object.  Objects are reusable schema structures document.
 * Learn more: https://www.sanity.io/docs/object-type
 */

export const pillar = defineType({
  name: 'pillar',
  title: 'Pillar',
  type: 'object',
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: 'graphic',
      title: 'Graphic',
      type: 'imageBlock',
    }),
    defineField({
      name: 'imageOne',
      title: 'Image One',
      type: 'imageBlock',
    }),
    defineField({
      name: 'imageTwo',
      title: 'Image Two',
      type: 'imageBlock',
    }),
  ],
})
