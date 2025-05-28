import critical from 'rollup-plugin-critical'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    viteCompression(),
    visualizer({ open: true }),
    critical({
      criticalUrl: 'http://localhost:4173', // Dirección donde se previsualiza el sitio
      criticalBase: 'dist/',
      criticalPages: [{ uri: '/', template: 'index' }],
      criticalConfig: {
        inline: true,
        extract: false,
        dimensions: [
          {
            width: 375,
            height: 565,
          },
          {
            width: 1440,
            height: 900,
          },
        ],
      },
    }),
  ],
  build: {
    minify: 'esbuild',
  },
})
