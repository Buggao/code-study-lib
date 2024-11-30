import { defineConfig } from 'vite'
import UnoCss from 'unocss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    UnoCss(),
    react()
  ],
})
