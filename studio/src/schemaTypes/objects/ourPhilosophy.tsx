import {defineField, defineType} from 'sanity'
import {BulbOutlineIcon} from '@sanity/icons'

/**
 * Call to action schema object.  Objects are reusable schema structures document.
 * Learn more: https://www.sanity.io/docs/object-type
 */

export const ourPhilosophy = defineType({
  name: 'ourPhilosophy',
  title: 'Our Philosophy',
  type: 'object',
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: 'imageLarge',
      title: 'Image Large',
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
