import { defineConfig} from 'sanity'
import {deskTool,} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { defaultDocumentNode } from './src/defaultDocumentNode'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

export default defineConfig({
  name: 'default',
  title: 'Blogspot-sanity',

  projectId: 'kga4x4qi',
  dataset: 'production',

  plugins: [deskTool({
    defaultDocumentNode:defaultDocumentNode
  }), visionTool(),unsplashImageAsset()],

  schema: {
    types: schemaTypes,
  },
})
