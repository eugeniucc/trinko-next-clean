import { AboutSection } from './ui/sections/AboutSection'
import AdvantagesSection from './ui/sections/AdvantagesSection'
import { OurServicesSection } from './ui/sections/OurServicesSection'
import { HeroSection } from './ui/sections/hero-section/HeroSection'
import SketchesSection from './ui/sections/sketches-section/SketchesSection'

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <OurServicesSection />
      <AboutSection />
      <SketchesSection />
      <AdvantagesSection />
    </main>
  )
}
