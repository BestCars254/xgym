import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Subpath only for the production build (GitHub Pages). Dev runs at '/'.
  base: command === 'build' ? '/x-fitness-gym/' : '/',
}))
