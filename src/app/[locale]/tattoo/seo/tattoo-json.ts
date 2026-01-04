import { BASE_URL } from '@/lib/config'

export function buildTattooServiceJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}/tattoo#service`,
    name: 'Tattoo services',
    description: 'Professional black-and-grey and color tattoo services with custom designs.',
    provider: {
      '@type': 'TattooParlor',
      '@id': `${BASE_URL}/#tattoo-parlor`,
      name: 'Oblivion Tattoo'
    },
    areaServed: {
      '@type': 'City',
      name: 'Chișinău'
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'MDL',
      lowPrice: 400,
      highPrice: 4000,
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/tattoo`
    }
  }
}
