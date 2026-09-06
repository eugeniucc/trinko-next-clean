import { getTranslations } from 'next-intl/server'

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
  const t = await getTranslations('homePage')
  const labels = await getTranslations('pageSpeedLabel.homeSlider')

  return (
    <main className="flex flex-col">
      <HeroSlider cards={t.raw('heroSection.cards')} labels={{ previousSlide: labels('previousSlide'), nextSlide: labels('nextSlide') }} />
      <OurServicesSection />
      <AboutSection />
      <SketchesSection />
      <AdvantagesSection translations={t.raw('advantagesSection')} />
      <PortfolioSection />
      <ContactsSection />
      <LocationSection translations={t.raw('locationSection')} />
    </main>
  )
}
