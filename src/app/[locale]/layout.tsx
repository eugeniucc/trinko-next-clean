import { Locale, NextIntlClientProvider, hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { Montserrat, Roboto } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { ReactNode } from 'react'
import { routing } from '@/i18n/routing'
import { GoogleAnalytics } from './seo/GoogleAnalytics'
import { LazyJivoChat } from './seo/LazyJivoChat'
import { buildOrganizationJsonLd } from './seo/organization'
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

  return (
    <html lang={locale}>
      <body className={`${roboto.variable} ${montserrat.variable}`}>
        <NuqsAdapter>
          <NextIntlClientProvider>
            <HeaderMenu />
            {children}
            <FooterMenu />
          </NextIntlClientProvider>
        </NuqsAdapter>

        <GoogleAnalytics />
        <LazyJivoChat />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildOrganizationJsonLd())
          }}
        />
      </body>
    </html>
  )
}
