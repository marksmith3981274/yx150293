import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(
    {
      include: '**/*.{ts,js,tsx}',
    }
  )],
  base: '',
  root: 'src',
  build: {
    outDir: '../dist',
  },
  server: {
    port: 8080,
    proxy: {
      '/api': {
        //target: 'http://jsonplaceholder.typicode.com',
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  },
  preview: {
    port: 8080
  },
})