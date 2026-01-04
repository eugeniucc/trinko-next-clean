import { BASE_URL } from '@/lib/config'

export function buildLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TattooParlor',
    '@id': `${BASE_URL}/#tattoo-parlor`,
    name: 'Oblivion Tattoo',
    image: `${BASE_URL}/og_image.png`,
    url: BASE_URL,
    telephone: '+37379146506',
    priceRange: '$$',

    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '20:00'
      }
    ],

    address: {
      '@type': 'PostalAddress',
      streetAddress: 'str. Albișoara 4, Atrium Shopping Center',
      addressLocality: 'Chișinău',
      addressRegion: 'Chișinău',
      postalCode: 'MD-2001',
      addressCountry: 'MD'
    }
  }
}
