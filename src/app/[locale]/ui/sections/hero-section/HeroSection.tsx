import Image from 'next/image'
import HeroSlider from './HeroSlider'

export const HeroSection = async () => {
  return (
    <section className="relative min-h-screen w-full">
      <Image src="/images/homePage/hero-section/hero-1.webp" alt="тату катаны на руке" fill priority sizes="100vw" />
      <HeroSlider />
    </section>
  )
}
