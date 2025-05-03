import {person} from './documents/person'
import {page} from './documents/page'
import {post} from './documents/post'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {home} from './singletons/home'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import {imageBlock} from './objects/imageBlock'
import {collectiveVision} from './objects/collectiveVision'
import {hero} from './objects/hero'
import {ourPhilosophy} from './objects/ourPhilosophy'
import {ourVision} from './objects/ourVision'
import {visionaries} from './objects/visionaries'
import {pillars} from './objects/pillars'
import {pillar} from './objects/pillar'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  // Singletons
  home,
  settings,
  // Documents
  page,
  post,
  person,
  // Objects
  blockContent,
  infoSection,
  callToAction,
  link,
  hero,
  imageBlock,
  collectiveVision,
  ourPhilosophy,
  ourVision,
  visionaries,
  pillars,
  pillar,
]
