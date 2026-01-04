import { ContactsSection } from '@/shared/ContactsSection'
import { withSeo } from '../seo/withSeo'
import { buildPermanentMakeupServiceJsonLd } from './seo/permanent-json'
import { DescriptionSection } from './ui/DescriptionSection'
import { GallerySection } from './ui/GallerySection'
import { HeroSection } from './ui/HeroSection'
import { ServicesSection } from './ui/ServicesSection'

export const generateMetadata = withSeo('metadata.permanentPageMetadata', '/permanent')

export default async function PermanentPage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <DescriptionSection />
      <ServicesSection />
      <GallerySection />
      <ContactsSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildPermanentMakeupServiceJsonLd())
        }}
      />
    </main>
  )
}
