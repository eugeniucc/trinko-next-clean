import { withSeo } from '@/lib/metadata'
import { ContactsSection } from '@/shared/ContactsSection'
import { AboutSection } from './ui/AboutSection'
import { AdvantagesSection } from './ui/AdvantagesSection'
import HeroSlider from './ui/HeroSlider'
import { LocationSection } from './ui/LocationSection'
import { OurServicesSection } from './ui/OurServicesSection'
import { PortfolioSection } from './ui/PortfolioSection'
import { SketchesSection } from './ui/SketchesSection'


export const generateMetadata = withSeo('metadata.homePageMetadata')

export default async function Home() {
  return (
    <main className="flex flex-col">
      <HeroSlider />
      <OurServicesSection />
      <AboutSection />
      <SketchesSection />
      <AdvantagesSection />
      <PortfolioSection />
      <ContactsSection />
      <LocationSection />
    </main>
  )
}
