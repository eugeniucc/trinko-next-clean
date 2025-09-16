import { getLocale, getTranslations } from 'next-intl/server'

export const piercingJsonLd = async () => {
  const t = await getTranslations('piercingPage.piercing')
  const locale = await getLocale()
  const domain = process.env.NEXT_PUBLIC_DOMAIN_URL
  const pageUrl = `${domain}/${locale}/piercing`

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
        name: t('offerLobe'),
        price: '400',
        priceCurrency: 'MDL',
        availability: 'https://schema.org/InStock',
        url: pageUrl
      },
      {
        '@type': 'Offer',
        name: t('offerHelix'),
        price: '600',
        priceCurrency: 'MDL',
        availability: 'https://schema.org/InStock',
        url: pageUrl
      },
      {
        '@type': 'Offer',
        name: t('offerTragus'),
        price: '650',
        priceCurrency: 'MDL',
        availability: 'https://schema.org/InStock',
        url: pageUrl
      },
      {
        '@type': 'Offer',
        name: t('offerSeptum'),
        price: '900',
        priceCurrency: 'MDL',
        availability: 'https://schema.org/InStock',
        url: pageUrl
      },
      {
        '@type': 'Offer',
        name: t('offerNavel'),
        price: '1000',
        priceCurrency: 'MDL',
        availability: 'https://schema.org/InStock',
        url: pageUrl
      }
    ]
  }
}
