import { buildMetadata } from '../seo/buildMetadata'
import { tattooJsonLd } from './seo/tattooJsonLd'
import { AboutSection } from './ui/AboutSection'
import { HeroSection } from './ui/HeroSection'
import { LatestTattoo } from './ui/LatestTattoo'
import { ServicesSection } from './ui/ServicesSection'

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
      <ServicesSection />
      <AboutSection />
      <LatestTattoo />
      <script id="tattoo-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  )
}
