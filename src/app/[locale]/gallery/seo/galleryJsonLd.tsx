import { getLocale, getTranslations } from 'next-intl/server'

// import { getPortfolioImages } from '@/features/portfolio/api/portfolio.api'

export const galleryJsonLd = async () => {
  const locale = await getLocale()
  const domain = process.env.NEXT_PUBLIC_DOMAIN_URL!
  const pageUrl = `${domain}/${locale}/gallery`

  // const portfolioData = await getPortfolioImages({ page: 1, limit: 6 })

  const t = await getTranslations('galleryPage.seo')
  const tb = await getTranslations('breadcrumbs')

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: t('title'),
      description: t('description'),
      url: pageUrl,
      inLanguage: locale,

      author: {
        '@type': 'Organization',
        name: 'OblivionTattoo',
        url: domain
      }

      // mainEntity: {
      //   '@type': 'ImageGallery',
      //   name: t('title'),
      //   description: t('description'),
      //   image: portfolioData.items.map((photo) => ({
      //     '@type': 'ImageObject',
      //     url: `${SUPABASE_S3_URL}public/${photo.url}`,
      //     name: photo.alt,
      //     author: {
      //       '@type': 'Organization',
      //       name: 'OblivionTattoo'
      //     }
      //   }))
      // }
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
          name: tb('gallery'),
          item: pageUrl
        }
      ]
    }
  ]
}
