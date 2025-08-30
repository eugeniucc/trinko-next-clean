import { MetadataRoute } from 'next'

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN_URL!
const LOCALES = ['ru', 'ro', 'en', 'uk', 'it']
const MAIN_LOCALE = 'ru'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/permanent', '/tattoo', '/piercing', '/course', '/gallery', '/blog', '/contacts']

  return [
    ...LOCALES.map((locale) => ({
      url: `${DOMAIN}/${locale}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: locale === MAIN_LOCALE ? 1.0 : 0.9
    })),

    ...paths.flatMap((path) =>
      LOCALES.map((locale) => ({
        url: `${DOMAIN}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8
      }))
    )
  ]
}
