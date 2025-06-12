import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'

export default defineConfig({
  plugins: [VueRouter(), vue()],
  server: {
    port: 8080
  },
  base: process.env.NODE_ENV === 'production'
    ? '/neutec_homework_0612/'
    : '/',
})
