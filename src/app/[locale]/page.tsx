import { ContactsSection } from '@/shared/ContactsSection'
import { buildLocalBusinessJsonLd } from './seo/local-business'
import { withSeo } from './seo/withSeo'
import { AboutSection } from './ui/sections/AboutSection'
import { AdvantagesSection } from './ui/sections/AdvantagesSection'
import { LocationSection } from './ui/sections/LocationSection'
import { PortfolioSection } from './ui/sections/PortfolioSection'
import { HeroSection } from './ui/sections/hero-section/HeroSection'
import { OurServicesSection } from './ui/sections/our-services-section/OurServicesSection'
import { SketchesSection } from './ui/sections/sketches-section/SketchesSection'

export const generateMetadata = withSeo('metadata.homePageMetadata')

export default async function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <OurServicesSection />
      <AboutSection />
      <SketchesSection />
      <AdvantagesSection />
      <PortfolioSection />
      <ContactsSection />
      <LocationSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildLocalBusinessJsonLd())
        }}
      />
    </main>
  )
}
