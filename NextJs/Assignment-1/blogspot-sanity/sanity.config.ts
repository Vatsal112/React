import { defineConfig} from 'sanity'
import {deskTool,} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { defaultDocumentNode } from './src/defaultDocumentNode'

export default defineConfig({
  name: 'default',
  title: 'Blogspot-sanity',

  projectId: 'kga4x4qi',
  dataset: 'production',

  plugins: [deskTool({
    defaultDocumentNode:defaultDocumentNode
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
