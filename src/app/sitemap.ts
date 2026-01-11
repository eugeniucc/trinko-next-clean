import { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/config'
import prisma from '@/lib/prisma'

const LOCALES = ['ru', 'ro', 'uk', 'it', 'en']
const MAIN_LOCALE = 'ru'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const paths = ['/permanent', '/tattoo', '/piercing', '/course', '/gallery', '/contacts']

  const posts = await prisma.blogPost.findMany({
    select: {
      slug: true,
      updatedAt: true
    }
  })

  return [
    ...LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: locale === MAIN_LOCALE ? 1.0 : 0.9
    })),

    ...paths.flatMap((path) =>
      LOCALES.map((locale) => ({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8
      }))
    ),

    {
      url: `${BASE_URL}/ru/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8
    },

    ...posts.map((post) => ({
      url: `${BASE_URL}/ru/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7
    }))
  ]
}
