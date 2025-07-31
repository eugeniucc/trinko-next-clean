import { HeroSection } from './ui/sections/HeroSection'
import { OurServices } from './ui/sections/OurServices'

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <OurServices />
    </main>
  )
}
