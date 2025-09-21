import { ContactsSection } from '@/shared/ContactsSection'
import { buildMetadata } from '../seo/buildMetadata'
import { coursesJsonLd } from './seo/courseJsonLd'
import { CertificateSection } from './ui/CertificateSection'
import { HeroSection } from './ui/HeroSection'

export const generateMetadata = () => {
  return buildMetadata({
    path: 'course'
  })
}

export default async function Course() {
  const jsonLd = await coursesJsonLd()

  return (
    <main className="flex flex-col">
      <HeroSection />
      <CertificateSection />
      <ContactsSection />
      <script id="course-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  )
}
