import { ContactsSection } from '@/shared/ContactsSection'
import { CertificateSection } from './ui/CertificateSection'
import { HeroSection } from './ui/HeroSection'

export default async function Course() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <CertificateSection />
      <ContactsSection />
    </main>
  )
}
