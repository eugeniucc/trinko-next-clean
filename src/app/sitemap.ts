import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { getBlogPostsForSitemap } from '@/lib/cachedPrisma'

const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN_URL?.replace(/\/$/, '')

if (!BASE_URL) {
  throw new Error('NEXT_PUBLIC_DOMAIN_URL is required')
}

const publicPaths = ['', '/tattoo', '/piercing', '/course', '/permanent', '/gallery', '/contacts']

function localizedUrl(locale: string, path: string) {
  const localePrefix = locale === routing.defaultLocale ? '' : `/${locale}`
  return `${BASE_URL}${localePrefix}${path}`
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = routing.locales.flatMap((locale) =>
    publicPaths.map((path) => ({
      url: localizedUrl(locale, path),
      changeFrequency: path === '' ? 'weekly' as const : 'monthly' as const,
      priority: path === '' ? 1 : 0.8
    }))
  )

  const blogPosts = await getBlogPostsForSitemap()

  return [
    ...pages,
    {
      url: `${BASE_URL}/blog`,
      changeFrequency: 'weekly',
      priority: 0.6
    },
    ...blogPosts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.5
    }))
  ]
}
