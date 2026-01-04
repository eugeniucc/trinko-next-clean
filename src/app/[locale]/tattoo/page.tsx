import { withSeo } from '../seo/withSeo'
import { buildTattooServiceJsonLd } from './seo/tattoo-json'
import { AboutSection } from './ui/AboutSection'
import { HeroSection } from './ui/HeroSection'
import { LatestTattoo } from './ui/LatestTattoo'
import { ServicesSection } from './ui/ServicesSection'

export const generateMetadata = withSeo('metadata.tattooPageMetadata', '/tattoo')

export default async function TattooPage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <LatestTattoo />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildTattooServiceJsonLd())
        }}
      />
    </main>
  )
}
