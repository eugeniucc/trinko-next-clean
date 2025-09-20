import type { BlogPost } from '@/features/blog/ts/blog.types'

const stripHtml = (html: string) =>
  html
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()

export function buildBlogPostJsonLd(post: BlogPost, locale: string) {
  if (locale !== 'ru') return null

  const domain = process.env.NEXT_PUBLIC_DOMAIN_URL

  const url = `${domain}/${locale}/blog/${post.slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    inLanguage: locale,
    headline: post.title,
    articleBody: stripHtml(post.content).slice(0, 160),
    datePublished: new Date(post.createdAt).toISOString(),
    dateModified: new Date(post.createdAt).toISOString(),
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Organization', name: 'OblivionTattoo' },
    publisher: {
      '@type': 'Organization',
      name: 'OblivionTattoo',
      logo: { '@type': 'ImageObject', url: `${domain}/logo.png` }
    }
  }
}
