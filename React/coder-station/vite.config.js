import { defineConfig } from 'vite'
import UnoCss from 'unocss/vite'
import react from '@vitejs/plugin-react'
import { join } from "node:path"

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": join(__dirname, "src"),
    }
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [
    UnoCss(),
    react()
  ],
})
