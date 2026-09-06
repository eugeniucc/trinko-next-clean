import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { getLocale } from 'next-intl/server'
import { Montserrat, Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import { routing } from '@/i18n/routing'
import { LazyJivoChat } from '@/lib/LazyJivoChat'
import { buildLocalBusinessJsonLd } from '@/lib/jsonld'
import FooterMenu from '@/widgets/footer/FooterMenu'
import HeaderMenu from '@/widgets/header/HeaderMenu'
import '../globals.css'

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

  return (
    <html lang={locale}>
      <GoogleTagManager gtmId="GTM-5M92WL6J" />

      <body className={`${roboto.variable} ${montserrat.variable}`}>
        <HeaderMenu locale={locale} />

        {children}

        <FooterMenu />

        <Analytics />
        <SpeedInsights />

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
