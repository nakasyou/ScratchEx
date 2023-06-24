import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { crx, defineManifest } from "@crxjs/vite-plugin"

const manifest = defineManifest({
  manifest_version: 3,
  name: "ScratchEx",
  version: "0.1.0",
  permissions: [],
  action: {
    default_popup: "index.html",
  },
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    crx({ manifest }),
  ],
})
