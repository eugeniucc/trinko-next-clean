// app/[locale]/layout.tsx
import { Metadata } from 'next'
import { Locale, NextIntlClientProvider, hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { Montserrat, Roboto } from 'next/font/google'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { ReactNode } from 'react'
import { routing } from '@/i18n/routing'
import ClientProviders from './ClientProviders'
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
      <body className={`${roboto.variable} ${montserrat.variable}`}>
        <NuqsAdapter>
          <ClientProviders>
            <NextIntlClientProvider>
              <HeaderMenu />
              {children}
              <FooterMenu />
            </NextIntlClientProvider>
          </ClientProviders>
        </NuqsAdapter>
        <Script id="organization-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLayout) }} />
      </body>
    </html>
  )
}
