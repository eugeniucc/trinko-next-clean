import type { Metadata } from 'next'
import { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { BASE_URL } from '@/lib/config'
import { baseMetadata } from '@/lib/seo/seo-seed'

type BuildMetadataOptions = {
  locale: Locale
  namespace: string
  path?: string
}

export async function buildMetadata({ locale, namespace, path }: BuildMetadataOptions): Promise<Metadata> {
  const t = await getTranslations(namespace)

  const normalizedPath = path ? path.replace(/\/$/, '') : ''
  const canonicalUrl = `${BASE_URL}/${locale}${normalizedPath}`

  const ogImage = `${BASE_URL}/og_image.png`

  const languages = Object.fromEntries(routing.locales.map((l) => [l, `${BASE_URL}/${l}${normalizedPath}`]))

  return {
    ...baseMetadata,

    title: t('title'),
    description: t('description'),

    alternates: {
      canonical: canonicalUrl,
      languages
    },

    openGraph: {
      type: 'website',
      url: canonicalUrl,
      siteName: 'Oblivion Tattoo',
      title: t('openGraphTitle'),
      description: t('openGraphDescription'),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: t('openGraphTitle')
        }
      ]
    },

    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: [ogImage]
    }
  }
}
