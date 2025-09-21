import { getLocale, getTranslations } from 'next-intl/server'

export const coursesJsonLd = async () => {
  const t = await getTranslations('coursesPage.seo')
  const locale = await getLocale()
  const domain = process.env.NEXT_PUBLIC_DOMAIN_URL!
  const pageUrl = `${domain}/${locale}/course`
  const orgId = `${domain}/#org`

  const courses = [
    { slug: 'tattoo', name: t('titleTattooPM'), description: t('descriptionTattooPM'), price: '450', currency: 'EUR' },
    { slug: 'piercing', name: t('titlePiercing'), description: t('descriptionPiercing'), price: '300', currency: 'EUR' }
  ]

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'BeautySalon'],
        '@id': orgId,
        name: 'OblivionTattoo',
        url: domain,
        telephone: '+37379146506',
        address: { '@type': 'PostalAddress', addressLocality: 'Chișinău', addressCountry: 'MD' }
      },
      ...courses.map((c) => ({
        '@type': 'Course',
        '@id': `${pageUrl}#course-${c.slug}`,
        inLanguage: locale,
        name: c.name,
        description: c.description,
        provider: { '@id': orgId },
        offers: {
          '@type': 'Offer',
          url: pageUrl,
          price: c.price,
          priceCurrency: c.currency,
          availability: 'https://schema.org/InStock'
        }
      }))
    ]
  }
}
