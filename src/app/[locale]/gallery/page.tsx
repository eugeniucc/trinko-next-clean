import { ContactsSection } from '@/shared/ContactsSection'
import { HeroSection } from './ui/HeroSection'

export default function Gallery() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ContactsSection />
    </main>
  )
}
