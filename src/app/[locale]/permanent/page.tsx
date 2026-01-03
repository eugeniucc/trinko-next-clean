import { ContactsSection } from '@/shared/ContactsSection'
import { DescriptionSection } from './ui/DescriptionSection'
import { GallerySection } from './ui/GallerySection'
import { HeroSection } from './ui/HeroSection'
import { ServicesSection } from './ui/ServicesSection'

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
