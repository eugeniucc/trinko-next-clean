import { AboutSection } from './ui/AboutSection'
import { HeroSection } from './ui/HeroSection'
import { LatestTattoo } from './ui/LatestTattoo'
import { ServicesSection } from './ui/ServicesSection'

export default async function TattooPage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <LatestTattoo />
    </main>
  )
}
