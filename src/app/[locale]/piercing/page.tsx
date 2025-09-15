import { AboutSection } from './ui/AboutSection'
import { HeroSection } from './ui/HeroSection'
import { PricingSection } from './ui/PricingSection'

export default function PiercingPage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <PricingSection />
    </main>
  )
}
