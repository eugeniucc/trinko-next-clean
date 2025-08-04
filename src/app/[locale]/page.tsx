import { AboutSection } from './ui/sections/AboutSection'
import { OurServicesSection } from './ui/sections/OurServicesSection'
import { SketchesSection } from './ui/sections/SketchesSection'
import { HeroSection } from './ui/sections/hero-section/HeroSection'

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <OurServicesSection />
      <AboutSection />
      <SketchesSection />
    </main>
  )
}
