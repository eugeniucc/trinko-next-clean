import { ContactsSection } from '@/shared/ContactsSection'
import { withSeo } from '../seo/withSeo'
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
    </main>
  )
}
