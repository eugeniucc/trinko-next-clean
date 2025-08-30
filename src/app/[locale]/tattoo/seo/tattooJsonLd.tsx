import { getLocale, getTranslations } from 'next-intl/server'

export const tattooJsonLd = async () => {
  const t = await getTranslations('tattooPage.tattoo')
  const locale = await getLocale()
  const domain = process.env.NEXT_PUBLIC_DOMAIN_URL
  const pageUrl = `${domain}/${locale}/tattoo`

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    url: pageUrl,
    inLanguage: locale,
    serviceType: t('serviceType'),
    areaServed: 'Chișinău, Moldova',
    provider: {
      '@type': 'BeautySalon',
      '@id': `${domain}/#org`,
      name: 'OblivionTattoo',
      url: domain,
      telephone: '+37379146506',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chișinău',
        addressCountry: 'MD'
      }
    },
    offers: [
      {
        '@type': 'Offer',
        name: t('offerSmall'),
        price: '500',
        priceCurrency: 'MDL',
        availability: 'https://schema.org/InStock',
        url: pageUrl
      },
      {
        '@type': 'Offer',
        name: t('offerMedium'),
        price: '1500',
        priceCurrency: 'MDL',
        availability: 'https://schema.org/InStock',
        url: pageUrl
      },
      {
        '@type': 'Offer',
        name: t('offerLarge'),
        price: '3000',
        priceCurrency: 'MDL',
        availability: 'https://schema.org/InStock',
        url: pageUrl
      }
    ]
  }
}
