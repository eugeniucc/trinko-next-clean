import { getPermanentPagePhoto } from '@/features/permanentpage-photo/api/pemanentpage-photo.api'
import { buildMetadata } from '../seo/buildMetadata'
import { pmJsonLd } from './seo/pmJsonLd'
import { DescriptionSection } from './ui/DescriptionSection'
import { HeroSection } from './ui/HeroSection'
import { ServicesSection } from './ui/ServicesSection'
import { ShowOffSection } from './ui/ShowOffSection'

export async function generateMetadata() {
  return buildMetadata({
    path: 'permanent'
  })
}

export default async function PermanentPage() {
  const jsonLd = await pmJsonLd()

  const photoArray = await getPermanentPagePhoto()

  return (
    <main className="flex flex-col">
      <HeroSection />
      <DescriptionSection />
      <ServicesSection cardsImg={photoArray.cards} />
      <ShowOffSection sliderImg={photoArray.slider} />
      <script id="pm-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  )
}
