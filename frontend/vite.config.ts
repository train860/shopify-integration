import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true,
    fs: {
      strict: true,
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        // changeOrigin: true,
        secure: false,
        headers: {
          Referer: 'http://127.0.0.1:8000',
        },
      },
    },
  },
})
