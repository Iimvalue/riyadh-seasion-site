import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base:"/riyadh-season-site/dist",
  plugins: [react()],
})
