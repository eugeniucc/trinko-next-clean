import type { Metadata } from 'next'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { BASE_URL } from '@/lib/config'
import prisma from '@/lib/prisma'

const baseMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: 'Oblivion Tattoo',
  robots: { index: true, follow: true }
}

function buildLocalizedUrl(locale: Locale | string, path = '') {
  const localePart = locale === routing.defaultLocale ? '' : `/${locale}`
  const normalizedPath = path && path !== '/' ? `/${path.replace(/^\/+|\/+$/g, '')}` : ''
  return `${BASE_URL}${localePart}${normalizedPath}`
}

function buildLanguageAlternates(path = '', locales: readonly string[] = routing.locales) {
  const languages = Object.fromEntries(locales.map((locale) => [locale, buildLocalizedUrl(locale, path)]))
  languages['x-default'] = buildLocalizedUrl(routing.defaultLocale, path)
  return languages
}

type SocialMetadataOptions = {
  type: 'website' | 'article'
  url: string
  openGraphTitle: string
  openGraphDescription?: string
  twitterTitle?: string
  twitterDescription?: string
  image?: string
}

function buildSocialMetadata({ type, url, openGraphTitle, openGraphDescription, twitterTitle, twitterDescription, image }: SocialMetadataOptions) {
  const images = image ? [{ url: image, width: 1200, height: 630, alt: openGraphTitle }] : undefined
  const description = openGraphDescription ?? twitterDescription
  const twitterDescriptionValue = twitterDescription ?? description

  return {
    openGraph: {
      type,
      url,
      siteName: 'Oblivion Tattoo',
      title: openGraphTitle,
      ...(description ? { description } : {}),
      ...(images ? { images } : {})
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: twitterTitle ?? openGraphTitle,
      ...(twitterDescriptionValue ? { description: twitterDescriptionValue } : {}),
      ...(image ? { images: [image] } : {})
    }
  }
}

type BuildMetadataOptions = {
  locale: Locale
  namespace: string
  path?: string
  alternateLocales?: readonly string[]
}

export async function buildMetadata({ locale, namespace, path, alternateLocales }: BuildMetadataOptions): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace })
  const canonicalUrl = buildLocalizedUrl(locale, path)
  const image = `${BASE_URL}/og_image.png`

  return {
    ...baseMetadata,
    title: t('title'),
    description: t('description'),
    alternates: { canonical: canonicalUrl, languages: buildLanguageAlternates(path, alternateLocales) },
    ...buildSocialMetadata({
      type: 'website',
      url: canonicalUrl,
      openGraphTitle: t('openGraphTitle'),
      openGraphDescription: t('openGraphDescription'),
      twitterTitle: t('twitterTitle'),
      twitterDescription: t('twitterDescription'),
      image
    })
  }
}

export function withSeo(namespace: string, path?: string, alternateLocales?: readonly string[]) {
  return async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params
    return buildMetadata({ locale, namespace, path, alternateLocales })
  }
}

type BuildBlogPostMetadataParams = { locale: Locale; slug: string }

export async function buildBlogPostMetadata({ locale, slug }: BuildBlogPostMetadataParams): Promise<Metadata> {
  const post = await prisma.blogPost.findUnique({ where: { slug: slug.toLowerCase() } })
  if (!post) notFound()

  const path = `/blog/${post.slug}`
  const canonicalUrl = buildLocalizedUrl(locale, path)

  return {
    ...baseMetadata,
    title: post.title,
    alternates: { canonical: canonicalUrl, languages: buildLanguageAlternates(path, [routing.defaultLocale]) },
    ...buildSocialMetadata({
      type: 'article',
      url: canonicalUrl,
      openGraphTitle: post.title
    })
  }
}
