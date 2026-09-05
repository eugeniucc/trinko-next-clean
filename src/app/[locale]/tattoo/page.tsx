import { buildTattooServiceJsonLd } from '@/lib/jsonld'
import { withSeo } from '@/lib/metadata'
import { AboutSection } from './ui/AboutSection'
import { HeroSection } from './ui/HeroSection'
import { LatestTattoo } from './ui/LatestTattoo'
import { ServicesSection } from './ui/ServicesSection'

export const generateMetadata = withSeo('metadata.tattooPageMetadata', '/tattoo')

export default async function TattooPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <LatestTattoo />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(await buildTattooServiceJsonLd(locale))
        }}
      />
    </main>
  )
}
