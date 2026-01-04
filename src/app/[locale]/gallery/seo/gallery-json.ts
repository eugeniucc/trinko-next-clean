import { BASE_URL } from '@/lib/config'

export function buildGalleryJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': `${BASE_URL}/gallery#image-gallery`,
    name: 'Tattoo portfolio gallery',
    description: 'Gallery of real tattoo works created by artists at Oblivion Tattoo studio.',
    url: `${BASE_URL}/gallery`,
    creator: {
      '@id': `${BASE_URL}/#tattoo-parlor`
    }
  }
}
