import { buildPiercingServiceJsonLd } from '@/lib/jsonld'
import { withSeo } from '@/lib/metadata'
import { AboutSection } from './ui/AboutSection'
import { HeroSection } from './ui/HeroSection'
import { LatestPiercingSection } from './ui/LatestPiercingSection'
import { PricingSection } from './ui/PricingSection'

export const generateMetadata = withSeo('metadata.piercingPageMetadata', '/piercing')

export default async function PiercingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <main className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <LatestPiercingSection />
      <PricingSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(await buildPiercingServiceJsonLd(locale))
        }}
      />
    </main>
  )
}
