import type { Metadata } from 'next'
import { Locale } from 'next-intl'
import { notFound } from 'next/navigation'
import { getBlogPostBySlug } from '@/lib/blog/blog.service'
import { BASE_URL } from '@/lib/config'
import { baseMetadata } from '@/lib/seo/seo-seed'

type BuildBlogPostMetadataParams = {
  locale: Locale
  slug: string
}

export async function buildBlogPostMetadata({ locale, slug }: BuildBlogPostMetadataParams): Promise<Metadata> {
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const canonicalUrl = `${BASE_URL}/${locale}/blog/${slug}`
  const ogImage = `${BASE_URL}/og_image.png`

  return {
    ...baseMetadata,

    title: post.title,
    description: post.title,

    alternates: {
      canonical: canonicalUrl
    },

    openGraph: {
      type: 'article',
      url: canonicalUrl,
      title: post.title,
      description: post.title,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },

    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.title,
      images: [ogImage]
    }
  }
}
