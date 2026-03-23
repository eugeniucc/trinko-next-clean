import { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/config'
import prisma from '@/lib/prisma'

const LOCALES = ['ru', 'ro', 'uk', 'it', 'en'] as const
const DEFAULT_LOCALE = 'ru'

function cleanDate(date: Date): Date {
  return new Date(date.toISOString().split('.')[0] + 'Z')
}

function localeUrl(locale: string, path: string = ''): string {
  return locale === DEFAULT_LOCALE ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`
}

const NOW = cleanDate(new Date())

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const paths = ['/permanent', '/tattoo', '/piercing', '/course', '/gallery', '/contacts']

  const posts = await prisma.blogPost.findMany({
    select: { slug: true, updatedAt: true }
  })

  return [
    ...LOCALES.map((locale) => ({
      url: localeUrl(locale),
      lastModified: NOW,
      changeFrequency: 'weekly' as const,
      priority: locale === DEFAULT_LOCALE ? 1.0 : 0.9
    })),

    ...paths.flatMap((path) =>
      LOCALES.map((locale) => ({
        url: localeUrl(locale, path),
        lastModified: NOW,
        changeFrequency: 'weekly' as const,
        priority: 0.8
      }))
    ),

    {
      url: `${BASE_URL}/blog`,
      lastModified: NOW,
      changeFrequency: 'weekly' as const,
      priority: 0.8
    },

    ...posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: cleanDate(post.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7
    }))
  ]
}
