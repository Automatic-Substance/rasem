import {defineField, defineType} from 'sanity'
import {BulbOutlineIcon} from '@sanity/icons'

/**
 * Call to action schema object.  Objects are reusable schema structures document.
 * Learn more: https://www.sanity.io/docs/object-type
 */

export const collectiveVision = defineType({
  name: 'collectiveVision',
  title: 'Collective Vision',
  type: 'object',
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: 'headingOne',
      title: 'Heading One',
      type: 'blockContent',
    }),
    defineField({
      name: 'headingTwo',
      title: 'Heading Two',
      type: 'blockContent',
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
