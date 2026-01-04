import { BASE_URL } from '@/lib/config'

export function buildBlogJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${BASE_URL}/blog#blog`,
    name: 'Oblivion Tattoo Blog',
    description: 'Expert articles about tattoos, permanent makeup, piercing, aftercare and trends.',
    url: `${BASE_URL}/blog`,
    publisher: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'Oblivion Tattoo'
    }
  }
}
