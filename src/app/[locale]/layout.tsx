import { Locale, NextIntlClientProvider, hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { Montserrat, Roboto } from 'next/font/google'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { ReactNode } from 'react'
import { routing } from '@/i18n/routing'
import { jsonLd } from '../jsonLd'
import ClientWrapper from './ClientWrapper'
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

export { generateMetadata } from './generateMetadata'

type LayoutProps = {
  children: ReactNode
  params: { locale: Locale }
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/logo/favicon.ico" />
        <link rel="icon" href="/logo/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/logo/favicon-96x96.png" type="image/png" sizes="96x96" />
        <link rel="icon" href="/logo/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo/apple-touch-icon.png" />
        <link rel="manifest" href="/logo/manifest.json" />
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${roboto.variable} ${montserrat.variable} bg-zinc-900 text-sm`}>
        <NextIntlClientProvider>
          <HeaderMenu />
          <ClientWrapper>{children}</ClientWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
