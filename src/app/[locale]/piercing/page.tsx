import { withSeo } from '../seo/withSeo'
import { buildPiercingServiceJsonLd } from './seo/piercing-json'
import { AboutSection } from './ui/AboutSection'
import { HeroSection } from './ui/HeroSection'
import { LatestPiercingSection } from './ui/LatestPiercingSection'
import { PricingSection } from './ui/PricingSection'

export const generateMetadata = withSeo('metadata.piercingPageMetadata', '/piercing')

export default async function PiercingPage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <LatestPiercingSection />
      <PricingSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildPiercingServiceJsonLd())
        }}
      />
    </main>
  )
}
