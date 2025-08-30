import Script from 'next/script'
import { buildMetadata } from '../seo/buildMetadata'
import { tattooJsonLd } from './seo/tattooJsonLd'
import { HeroSection } from './ui/HeroSection'

export async function generateMetadata() {
  return buildMetadata({
    path: 'tattoo'
  })
}

export default async function TattooPage() {
  const jsonLd = await tattooJsonLd()

  return (
    <main className="flex flex-col">
      <HeroSection />
      <Script
        id="tattoo-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  )
}
