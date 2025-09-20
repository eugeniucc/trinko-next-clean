import { getLocale, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN_URL!

type Props = { path?: string }

export async function buildMetadata({ path }: Props) {
  const current = await getLocale()
  const pathProp = path ? `/${path}` : ''

  const isBlog = !!path && /^blog(\/|$)/.test(path)
  const canonicalLocale = isBlog ? 'ru' : current
  const locales = isBlog ? (['ru'] as const) : routing.locales

  const t = await getTranslations('seo')

  const canonical = `${DOMAIN}/${canonicalLocale}${pathProp}`
  const languages = Object.fromEntries(locales.map((l) => [l, `${DOMAIN}/${l}${pathProp}`]))

  return {
    title: t('title'),
    description: t('description'),
    robots: 'index, follow',

    alternates: {
      canonical,
      languages
    },

    openGraph: {
      url: canonical,
      type: 'website',
      siteName: 'OblivionTattoo',
      title: t('openGraphTitle'),
      description: t('openGraphDescription'),
      images: [`${DOMAIN}/logo/logo.png`],
      locale: canonicalLocale,
      alternateLocale: locales.filter((l) => l !== canonicalLocale)
    },

    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: [`${DOMAIN}/logo/logo.png`]
    }
  }
}
