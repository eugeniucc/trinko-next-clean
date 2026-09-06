import { Suspense } from 'react'
import { buildPermanentMakeupServiceJsonLd } from '@/lib/jsonld'
import { withSeo } from '@/lib/metadata'
import { ContactsSection } from '@/shared/ContactsSection'
import { DescriptionSection } from './ui/DescriptionSection'
import { GallerySection, GallerySectionFallback } from './ui/GallerySection'
import { HeroSection } from './ui/HeroSection'
import { ServicesSection } from './ui/ServicesSection'

export const generateMetadata = withSeo('metadata.permanentPageMetadata', '/permanent')

export default async function PermanentPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <main className="flex flex-col">
      <HeroSection />
      <DescriptionSection />
      <ServicesSection />
      <Suspense fallback={<GallerySectionFallback />}>
        <GallerySection />
      </Suspense>
      <ContactsSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(await buildPermanentMakeupServiceJsonLd(locale))
        }}
      />
    </main>
  )
}
