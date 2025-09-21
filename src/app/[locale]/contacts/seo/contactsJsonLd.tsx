import { getLocale, getTranslations } from 'next-intl/server'

export const contactsJsonLd = async () => {
  const locale = await getLocale()
  const t = await getTranslations('breadcrumbs')
  const domain = process.env.NEXT_PUBLIC_DOMAIN_URL!
  const pageUrl = `${domain}/${locale}/contacts`
  const tb = await getTranslations('breadcrumbs')

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      url: pageUrl,
      inLanguage: locale,
      about: { '@id': `${domain}/#org` },

      mainEntity: {
        '@type': 'ContactPage',
        name: t('contacts'),
        url: pageUrl,
        inLanguage: locale
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: tb('home'),
          item: `${domain}/${locale}`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: tb('contacts'),
          item: pageUrl
        }
      ]
    }
  ]
}
