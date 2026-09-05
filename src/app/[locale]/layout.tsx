import { Locale, NextIntlClientProvider, hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { Montserrat, Roboto } from 'next/font/google'
import { notFound } from 'next/navigation'
import { GoogleAnalytics } from '@next/third-parties/google'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { ReactNode } from 'react'
import { routing } from '@/i18n/routing'
import { GoogleTagManager } from '@/lib/GoogleTagManager'
import { LazyJivoChat } from '@/lib/LazyJivoChat'
import { buildLocalBusinessJsonLd } from '@/lib/jsonld'
import FooterMenu from '@/widgets/footer/FooterMenu'
import HeaderMenu from '@/widgets/header/HeaderMenu'

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

export const revalidate = 5

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
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

  return (
    <html lang={locale}>
      <body className={`${roboto.variable} ${montserrat.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5M92WL6J"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <GoogleTagManager />

        <NuqsAdapter>
          <NextIntlClientProvider>
            <HeaderMenu />
            {children}
            <FooterMenu />
          </NextIntlClientProvider>
        </NuqsAdapter>

        <GoogleAnalytics gaId="G-N2KV7LWE10" />
        <LazyJivoChat />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildLocalBusinessJsonLd())
          }}
        />
      </body>
    </html>
  )
}
