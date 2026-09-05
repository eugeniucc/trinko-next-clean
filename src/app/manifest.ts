import type { MetadataRoute } from 'next'
import icon192 from './web-app-manifest-192x192.png'
import icon512 from './web-app-manifest-512x512.png'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Oblivion Tattoo',
    short_name: 'Oblivion Tattoo',
    icons: [
      {
        src: icon192.src,
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: icon512.src,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone'
  }
}
