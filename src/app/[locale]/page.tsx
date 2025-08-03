import { AboutSection } from './ui/sections/AboutSection'
import { HeroSection } from './ui/sections/HeroSection'
import { OurServicesSection } from './ui/sections/OurServicesSection'
import { SketchesSection } from './ui/sections/SketchesSection'

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
