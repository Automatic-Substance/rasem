import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

/**
 * Page schema.  Define and edit the fields for the 'page' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export const home = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    }),
    defineField({
      name: 'collectiveVision',
      title: 'Collective Vision',
      type: 'collectiveVision',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home',
      }
    },
  },
})
