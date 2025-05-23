import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  server: {
    port: 8080,
    strictPort:true,
    host: true,
    origin: "http://0.0.0.0:8080"
  },
  plugins: [react()],
  assetsInclude: ['**/assets/images/*.jpg', '**/assets/fonts/*.ttf']
})
