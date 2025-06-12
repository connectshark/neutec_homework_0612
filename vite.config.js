import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    vue()
  ],
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: process.env.NODE_ENV === 'production'
    ? '/neutec_homework_0612/'
    : '/',
})
