import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/glow-code-canvas-55/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
})
