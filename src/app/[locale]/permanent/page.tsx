import { buildMetadata } from '../seo/buildMetadata'
import { pmJsonLd } from './seo/pmJsonLd'
import { DescriptionSection } from './ui/DescriptionSection'
import { HeroSection } from './ui/HeroSection'
import { ServicesSection } from './ui/ServicesSection'

export async function generateMetadata() {
  return buildMetadata({
    path: 'permanent'
  })
}

export default async function PermanentPage() {
  const jsonLd = await pmJsonLd()

  return (
    <main className="flex flex-col">
      <HeroSection />
      <DescriptionSection />
      <ServicesSection />
      <script id="pm-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  )
}
