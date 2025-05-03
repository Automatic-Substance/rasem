import {defineField, defineType} from 'sanity'
import {BulbOutlineIcon} from '@sanity/icons'

/**
 * Call to action schema object.  Objects are reusable schema structures document.
 * Learn more: https://www.sanity.io/docs/object-type
 */

export const pillars = defineType({
  name: 'pillars',
  title: 'Pillars',
  type: 'array',
  icon: BulbOutlineIcon,
  of: [{type: 'pillar'}],
})
