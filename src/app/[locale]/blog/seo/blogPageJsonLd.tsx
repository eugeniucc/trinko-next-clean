import { getLocale } from 'next-intl/server'
import { neonDb } from '@/lib/prisma-neon'

export const blogPageJsonLd = async () => {
  const locale = await getLocale()
  const domain = process.env.NEXT_PUBLIC_DOMAIN_URL!

  if (locale !== 'ru') return null

  const posts = await neonDb.blogPost.findMany({
    orderBy: { createdAt: 'desc' },
    take: 9
  })

  const pageUrl = `${domain}/${locale}/blog`

  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    url: pageUrl,
    inLanguage: locale,
    name: 'Блог студии Oblivion Tattoo',
    description: 'Полезные статьи и гайды о татуировках в Кишинёве',
    publisher: {
      '@type': 'Organization',
      name: 'OblivionTattoo',
      logo: {
        '@type': 'ImageObject',
        url: `${domain}/logo.png`
      }
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `${domain}/${locale}/blog/${post.slug}`,
      datePublished: post.createdAt.toISOString(),
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${domain}/${locale}/blog/${post.slug}`
      }
    }))
  }
}
