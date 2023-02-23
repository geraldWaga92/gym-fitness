import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // this is the path to the root of the app
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  }
})
