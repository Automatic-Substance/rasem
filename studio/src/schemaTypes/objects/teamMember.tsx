import {defineField, defineType} from 'sanity'
import {BulbOutlineIcon} from '@sanity/icons'

/**
 * Call to action schema object.  Objects are reusable schema structures document.
 * Learn more: https://www.sanity.io/docs/object-type
 */

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Member',
  type: 'object',
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: 'firstname',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'lastname',
      title: 'Last Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
  ],
})
