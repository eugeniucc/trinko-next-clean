import Image from 'next/image'
import { CONTACT_TELEGRAM } from '@/lib/contactLinks'
import type { slides, HeroSliderProps } from './heroSlides'

export const HeroSlide = ({ slide, card, preload = false }: {
  slide: (typeof slides)[number]
  card: HeroSliderProps['cards']['firstCard']
  preload?: boolean
}) => (
  <div className="relative min-h-screen w-full">
    <Image
      src={slide.imageSrc}
      alt={slide.imageAlt}
      fill
      draggable={false}
      preload={preload}
      quality={70}
      sizes="100vw"
      className="object-cover grayscale"
    />

    <div className="pointer-events-none absolute inset-0 z-10 bg-black/50" />

    <div className="relative z-20 container flex min-h-screen items-center justify-center">
      <div className="flex w-full flex-col gap-6 text-white">
        <p className="text-3xl font-bold md:text-5xl">{card.title}</p>

        <p className="text-2xl font-bold lg:text-8xl">{card.text}</p>

        <p className="max-w-3xl text-lg">{card.description}</p>

        <a
          href={CONTACT_TELEGRAM}
          data-gtm="telegram"
          data-gtm-slide={slide.key}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit rounded-md bg-white px-6 py-4 font-bold text-black transition-colors duration-200 hover:text-red-500"
        >
          {card.button}
        </a>
      </div>
    </div>
  </div>
)
