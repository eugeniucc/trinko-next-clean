import { buildMetadata } from '../seo/buildMetadata'
import { piercingJsonLd } from './seo/piercingJsonLd'
import { AboutSection } from './ui/AboutSection'
import { HeroSection } from './ui/HeroSection'
import { LatestPiercingSection } from './ui/LatestPiercingSection'
import { PricingSection } from './ui/PricingSection'

export async function generateMetadata() {
  return buildMetadata({
    path: 'piercing'
  })
}

export default async function PiercingPage() {
  const jsonLd = await piercingJsonLd()

  return (
    <main className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <LatestPiercingSection />
      <PricingSection />
      <script id="piercing-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  )
}
