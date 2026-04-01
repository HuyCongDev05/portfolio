import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // mở ngrok
  server: {
    host: true,
    allowedHosts: ['your-subdomain.ngrok-free.dev'],
    hmr: {
      host: 'your-subdomain.ngrok-free.dev',
      clientPort: 443,
      protocol: 'wss'
    }
  }
})
