import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'

const LOCALES = ['ru', 'ro', 'en', 'uk', 'it'] as const
const PATH = '/'
const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN_URL

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations('seo')

  const languages = Object.fromEntries(LOCALES.map((l) => [l, `${DOMAIN}/${l}${PATH}`]))

  return {
    title: t('title'),
    description: t('description'),
    robots: 'index, follow',

    alternates: {
      canonical: `${DOMAIN}/${locale}${PATH}`,
      languages
    },

    openGraph: {
      url: `${DOMAIN}/${locale}${PATH}`,
      type: 'website',
      siteName: 'TrinkoTattoo',
      title: t('openGraphTitle'),
      description: t('openGraphDescription'),
      images: [`${DOMAIN}/logo/icon.png`],
      locale,
      alternateLocale: LOCALES.filter((l) => l !== locale)
    },

    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: [`${DOMAIN}/logo/icon.png`]
    }
  }
}
