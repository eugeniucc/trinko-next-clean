import { BASE_URL } from '@/lib/config'

export function buildPermanentMakeupServiceJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}/permanent#service`,
    name: 'Permanent eyeliner makeup',
    description: 'Professional permanent eyeliner makeup including classic liner, lash line enhancement, and soft shading techniques.',
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
      price: 900,
      priceCurrency: 'MDL',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/permanent`
    }
  }
}
