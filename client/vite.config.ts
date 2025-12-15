import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // output the assets to the parent public folder
  build: {
    outDir: '../public',
    assetsDir: 'assets',
    emptyOutDir: false,
  }
})
