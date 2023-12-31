import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  server: {
    open: true,
    port: 3000,
  },
  plugins: [react()],
})
