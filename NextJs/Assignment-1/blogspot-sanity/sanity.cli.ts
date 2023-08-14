import {defineCliConfig} from 'sanity/cli'
import {nodePolyfills} from 'vite-plugin-node-polyfills'


export default defineCliConfig({
  api: {
    projectId: 'kga4x4qi',
    dataset: 'production'
  },
  vite: (prev:any) => ({
    ...prev,
    plugins: [...prev.plugins, nodePolyfills({
      globals:{
        Buffer:false,
        global:true,
        process:true
      }
    })],
  }),
})
