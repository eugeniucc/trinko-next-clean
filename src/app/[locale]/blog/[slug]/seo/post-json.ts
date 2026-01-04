import { BASE_URL } from '@/lib/config'

type BlogPostJsonLdProps = {
  title: string
  slug: string
  createdAt?: string
}

export function buildBlogPostJsonLd({ title, slug, createdAt }: BlogPostJsonLdProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${BASE_URL}/blog/${slug}#blog-post`,
    headline: title,
    description: title,
    url: `${BASE_URL}/blog/${slug}`,
    image: ['http://localhost:3000/logo.png'],
    datePublished: createdAt,
    author: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'Oblivion Tattoo'
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'Oblivion Tattoo',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`
      }
    }
  }
}
