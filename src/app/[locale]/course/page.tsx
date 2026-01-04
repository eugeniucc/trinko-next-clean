import { ContactsSection } from '@/shared/ContactsSection'
import { withSeo } from '../seo/withSeo'
import { CertificateSection } from './ui/CertificateSection'
import { HeroSection } from './ui/HeroSection'

export const generateMetadata = withSeo('metadata.coursePageMetadata', '/course')

export default async function Course() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <CertificateSection />
      <ContactsSection />
    </main>
  )
}
