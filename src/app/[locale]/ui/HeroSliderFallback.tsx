import { HeroSlide } from './HeroSlide'
import { slides, type HeroSliderProps } from './heroSlides'

export const HeroSliderFallback = ({ cards }: Pick<HeroSliderProps, 'cards'>) => (
  <section className="relative min-h-screen w-full overflow-hidden">
    <HeroSlide slide={slides[0]} card={cards.firstCard} preload />
  </section>
)
