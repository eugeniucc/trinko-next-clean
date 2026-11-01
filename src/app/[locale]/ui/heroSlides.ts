export const slides = [
  {
    imageSrc: '/images/homePage/hero-section/hero-1.webp',
    imageAlt: 'тату катана и рыбы кои на предплечье',
    key: 'firstCard'
  },
  {
    imageSrc: '/images/homePage/hero-section/hero-2.webp',
    imageAlt: 'тату цветы и змея на ноге',
    key: 'secondCard'
  },
  {
    imageSrc: '/images/homePage/hero-section/hero-3.webp',
    imageAlt: 'тату цветы и бабочки на плече',
    key: 'thirdCard'
  }
] as const

export type HeroSliderProps = {
  cards: Record<
    (typeof slides)[number]['key'],
    {
      title: string
      text: string
      description: string
      button: string
    }
  >
  labels: {
    previousSlide: string
    nextSlide: string
  }
}
