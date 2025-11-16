import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: [
        'favicon.ico',
        '/icons/icon-192.png',
        '/icons/icon-512.png'
      ],

      manifest: {
        name: 'MovieLite - Katalog Film',
        short_name: 'MovieLite',
        description: 'Aplikasi katalog film favorit berbasis PWA',

        start_url: '/',
        display: 'standalone',

        background_color: '#000000',
        theme_color: '#e50914',   // warna Netflix (hitam-merah)

        icons: [
          {
            src: '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,ico,jpg,jpeg}'],
      }
    }),
  ],
})
