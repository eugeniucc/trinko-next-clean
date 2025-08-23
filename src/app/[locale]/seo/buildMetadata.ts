import { getLocale, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN_URL

type Props = {
  path?: string
}

export async function buildMetadata({ path }: Props) {
  const locale = await getLocale()
  const t = await getTranslations('seo')

  const pathProp = path ? `/${path}` : ''

  const languages = Object.fromEntries(routing.locales.map((l) => [l, `${DOMAIN}/${l}${pathProp}`]))

  const canonical = `${DOMAIN}/${locale}${pathProp}`
  const ogUrl = canonical

  return {
    title: t('title'),
    description: t('description'),
    robots: 'index, follow',

    alternates: {
      canonical,
      languages
    },

    openGraph: {
      url: ogUrl,
      type: 'website',
      siteName: 'TrinkoTattoo',
      title: t('openGraphTitle'),
      description: t('openGraphDescription'),
      images: [`${DOMAIN}/logo/icon.png`],
      locale,
      alternateLocale: routing.locales.filter((l) => l !== locale)
    },

    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: [`${DOMAIN}/logo/icon.png`]
    }
  }
}
