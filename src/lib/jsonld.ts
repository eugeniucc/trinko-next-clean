import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN_URL

const businessId = `${BASE_URL}/#tattoo-parlor`

export function buildLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'TattooParlor'],
    '@id': businessId,
    name: 'Oblivion Tattoo',
    image: `${BASE_URL}/og_image.png`,
    logo: `${BASE_URL}/logo.png`,
    url: BASE_URL,
    telephone: '+37379146506',
    sameAs: ['https://www.instagram.com/trinko_tattoo/', 'https://t.me/TrinkoTattoo'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '10:00',
        closes: '20:30'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'str. Tighina 65',
      addressLocality: 'Chișinău',
      addressRegion: 'Chișinău',
      postalCode: 'MD-2001',
      addressCountry: 'MD'
    }
  }
}

type ServiceOffer = {
  price?: number
  priceCurrency: string
  lowPrice?: number
  highPrice?: number
}

function buildServiceJsonLd(locale: string, path: string, name: string, description: string, offer?: ServiceOffer) {
  const localePart = locale === routing.defaultLocale ? '' : `/${locale}`
  const url = `${BASE_URL}${localePart}${path}`
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    url,
    provider: { '@id': businessId },
    areaServed: { '@type': 'City', name: 'Chișinău' }
  }

  if (!offer) return service

  const { price, priceCurrency, lowPrice, highPrice } = offer
  const offers = lowPrice !== undefined && highPrice !== undefined
    ? { '@type': 'AggregateOffer', priceCurrency, lowPrice, highPrice, url }
    : { '@type': 'Offer', price, priceCurrency, url }

  return { ...service, offers }
}

export async function buildTattooServiceJsonLd(locale: string) {
  const t = await getTranslations({ locale, namespace: 'tattooPage' })
  return buildServiceJsonLd(locale, '/tattoo', t('tattoo.serviceType'), t('heroSection.subtitle'), {
    priceCurrency: 'MDL',
    lowPrice: 400,
    highPrice: 4000
  })
}

export async function buildPiercingServiceJsonLd(locale: string) {
  const t = await getTranslations({ locale, namespace: 'piercingPage' })
  return buildServiceJsonLd(locale, '/piercing', t('piercing.serviceType'), t('heroSection.text'), {
    priceCurrency: 'MDL',
    lowPrice: 150,
    highPrice: 600
  })
}

export async function buildPermanentMakeupServiceJsonLd(locale: string) {
  const t = await getTranslations({ locale, namespace: 'permanentPage' })
  return buildServiceJsonLd(locale, '/permanent', t('pm.serviceType'), t('descriptionSection.text'), {
    price: 900,
    priceCurrency: 'MDL'
  })
}

export async function buildCoursesJsonLd(locale: string) {
  const t = await getTranslations({ locale, namespace: 'coursesPage.seo' })
  const localePart = locale === routing.defaultLocale ? '' : `/${locale}`
  const url = `${BASE_URL}${localePart}/course`
  const provider = { '@id': businessId }

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Course',
      '@id': `${url}#tattoo-permanent-course`,
      name: t('titleTattooPM'),
      description: t('descriptionTattooPM'),
      provider,
      offers: { '@type': 'Offer', price: 450, priceCurrency: 'EUR', url }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Course',
      '@id': `${url}#piercing-course`,
      name: t('titlePiercing'),
      description: t('descriptionPiercing'),
      provider,
      offers: { '@type': 'Offer', price: 300, priceCurrency: 'EUR', url }
    }
  ]
}

type BlogPostJsonLdProps = {
  title: string
  slug: string
  locale: string
  description?: string
  image?: string
  createdAt?: string
  updatedAt?: string
}

export function buildBlogPostJsonLd({ title, slug, locale, description, image, createdAt, updatedAt }: BlogPostJsonLdProps) {
  const localePart = locale === routing.defaultLocale ? '' : `/${locale}`
  const url = `${BASE_URL}${localePart}/blog/${slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#blog-post`,
    headline: title,
    url,
    inLanguage: locale,
    ...(description ? { description } : {}),
    ...(image ? { image: [image] } : {}),
    ...(createdAt ? { datePublished: createdAt } : {}),
    ...(updatedAt ? { dateModified: updatedAt } : {}),
    author: { '@id': businessId },
    publisher: { '@id': businessId }
  }
}
