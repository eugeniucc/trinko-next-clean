import Script from 'next/script'
import { pmJsonLd } from './seo/pmJsonLd'
import { DescriptionSection } from './ui/DescriptionSection'
import { HeroSection } from './ui/HeroSection'
import { ServicesSection } from './ui/ServicesSection'
import { ShowOffSection } from './ui/ShowOffSection'

export default async function PermanentPage() {
  const jsonLd = await pmJsonLd()

  return (
    <main className="flex flex-col">
      <HeroSection />
      <DescriptionSection />
      <ServicesSection />
      <ShowOffSection />
      <Script id="pm-jsonld" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  )
}
