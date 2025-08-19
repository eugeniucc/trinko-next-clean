import { getLocale, getTranslations } from 'next-intl/server'

export const pmJsonLd = async () => {
  const t = await getTranslations('permanentPage.pm')
  const locale = await getLocale()
  const domain = process.env.NEXT_PUBLIC_DOMAIN_URL
  const pageUrl = `${domain}/${locale}/permanent`

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
      name: 'Trinko Tattoo',
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
        name: t('offerBrows'),
        price: '1800',
        priceCurrency: 'MDL',
        availability: 'https://schema.org/InStock',
        url: pageUrl
      },
      {
        '@type': 'Offer',
        name: t('offerLips'),
        price: '2000',
        priceCurrency: 'MDL',
        availability: 'https://schema.org/InStock',
        url: pageUrl
      },
      {
        '@type': 'Offer',
        name: t('offerEyes'),
        price: '1600',
        priceCurrency: 'MDL',
        availability: 'https://schema.org/InStock',
        url: pageUrl
      }
    ]
  }
}
