import { Suspense } from 'react'
import { buildTattooServiceJsonLd } from '@/lib/jsonld'
import { withSeo } from '@/lib/metadata'
import { AboutSection } from './ui/AboutSection'
import { HeroSection } from './ui/HeroSection'
import { LatestTattoo, LatestTattooFallback } from './ui/LatestTattoo'
import { ServicesSection } from './ui/ServicesSection'

export const generateMetadata = withSeo('metadata.tattooPageMetadata', '/tattoo')

export default async function TattooPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <Suspense fallback={<LatestTattooFallback />}>
        <LatestTattoo />
      </Suspense>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(await buildTattooServiceJsonLd(locale))
        }}
      />
    </main>
  )
}
