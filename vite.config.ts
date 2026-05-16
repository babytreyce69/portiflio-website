import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // Dev: root URL so styles load at http://localhost:5173/
  // Build: GitHub Pages project site at /portiflio-website/
  base: command === 'build' ? '/portiflio-website/' : '/',
}))
