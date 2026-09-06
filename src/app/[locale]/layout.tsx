import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { getLocale, getMessages } from 'next-intl/server'
import { Montserrat, Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import '../globals.css'
import { routing } from '@/i18n/routing'
import { LazyJivoChat } from '@/lib/LazyJivoChat'
import { buildLocalBusinessJsonLd } from '@/lib/jsonld'
import FooterMenu from '@/widgets/footer/FooterMenu'
import HeaderMenu from '@/widgets/header/HeaderMenu'
import { Providers } from './providers'

export const instant = false

const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['400', '700'],
  subsets: ['cyrillic', 'latin']
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['400', '700'],
  subsets: ['cyrillic', 'latin']
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

type LayoutProps = {
  children: ReactNode
}

export default async function LocaleLayout({ children }: LayoutProps) {
  const locale = await getLocale()
  const messages = await getMessages()
  const clientMessages = {
    pageSpeedLabel: messages.pageSpeedLabel,
    homePage: {
      header: messages.homePage.header,
      headerMobile: messages.homePage.headerMobile,
      heroSection: { cards: messages.homePage.heroSection.cards },
      advantagesSection: messages.homePage.advantagesSection,
      locationSection: messages.homePage.locationSection
    }
  }

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

        <Providers locale={locale} messages={clientMessages}>
          <HeaderMenu />
          {children}
          <FooterMenu />
        </Providers>

        <Analytics />
        <SpeedInsights />

        <GoogleTagManager gtmId="GTM-5M92WL6J" />

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
