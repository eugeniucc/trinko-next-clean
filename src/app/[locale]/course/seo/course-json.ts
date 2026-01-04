import { BASE_URL } from '@/lib/config'

export function buildCoursesJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${BASE_URL}/course#courses`,
    name: 'Tattoo, permanent makeup and piercing courses',
    description: 'Professional offline courses in tattooing, permanent makeup and piercing with theory and hands-on practice.',
    provider: {
      '@type': 'TattooParlor',
      '@id': `${BASE_URL}/#tattoo-parlor`,
      name: 'Oblivion Tattoo',
      url: BASE_URL
    },

    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        name: 'Tattoo and Permanent Makeup Course',
        courseMode: 'Offline',
        offers: {
          '@type': 'Offer',
          price: 450,
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          url: `${BASE_URL}/course`
        }
      },
      {
        '@type': 'CourseInstance',
        name: 'Piercing Course',
        courseMode: 'Offline',
        offers: {
          '@type': 'Offer',
          price: 300,
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          url: `${BASE_URL}/course`
        }
      }
    ]
  }
}
