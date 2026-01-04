import { BASE_URL } from '@/lib/config'

export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Oblivion Tattoo',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    sameAs: ['https://www.instagram.com/trinko_tattoo/']
  }
}
