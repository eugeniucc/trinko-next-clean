import { Metadata } from 'next'
import { Locale, NextIntlClientProvider, hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { Montserrat, Roboto } from 'next/font/google'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'
import { routing } from '@/i18n/routing'
import ClientWrapper from './ClientWrapper'
import { buildMetadata } from './seo/buildMetadata'
import { jsonLd } from './seo/jsonLd'
import FooterMenu from './ui/footer/FooterMenu'
import HeaderMenu from './ui/header/HeaderMenu'

const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['400', '700'],
  subsets: ['latin']
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['400', '700'],
  subsets: ['latin']
})

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    path: ''
  })
}

type LayoutProps = {
  children: ReactNode
  params: Promise<{ locale: Locale }>
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const jsonLdLayout = await jsonLd()

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/logo/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/logo/favicon-96x96.png" type="image/png" sizes="96x96" />
        <link rel="icon" href="/logo/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo/apple-touch-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <script id="organization-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLayout) }} />
      </head>
      <body className={`${roboto.variable} ${montserrat.variable} `}>
        <ClientWrapper>
          <NextIntlClientProvider>
            <HeaderMenu />
            {children}
            <FooterMenu />
          </NextIntlClientProvider>
        </ClientWrapper>
      </body>
    </html>
  )
}
