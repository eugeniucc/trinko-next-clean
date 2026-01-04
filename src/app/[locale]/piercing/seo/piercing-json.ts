import { BASE_URL } from '@/lib/config'

export function buildPiercingServiceJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}/piercing#service`,
    name: 'Body piercing services',
    description: 'Professional body piercing services using sterile single-use instruments and certified jewelry.',
    provider: {
      '@type': 'TattooParlor',
      '@id': `${BASE_URL}/#tattoo-parlor`,
      name: 'Oblivion Tattoo',
      url: BASE_URL
    },
    areaServed: {
      '@type': 'City',
      name: 'Chișinău'
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'MDL',
      lowPrice: 100,
      highPrice: 600,
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/piercing`
    }
  }
}
