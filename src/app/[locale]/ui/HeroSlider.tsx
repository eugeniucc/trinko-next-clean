'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRef, useState } from 'react'
import { CONTACT_TELEGRAM } from '@/lib/contactLinks'

const slides = [
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

type HeroSliderProps = {
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

const HeroSlider = ({ cards, labels }: HeroSliderProps) => {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        slidesPerView={1}
        speed={700}
        rewind
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.activeIndex)
        }}
        className="min-h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.key}>
            <div className="relative min-h-screen w-full">
              <Image
                src={slide.imageSrc}
                alt={slide.imageAlt}
                fill
                draggable={false}
                preload={index === 0}
                quality={70}
                sizes="100vw"
                className="object-cover grayscale"
              />

              <div className="pointer-events-none absolute inset-0 z-10 bg-black/50" />

              <div className="relative z-20 container flex min-h-screen items-center justify-center">
                <div className="flex w-full flex-col gap-6 text-white">
                  <p className="text-3xl font-bold md:text-5xl">{cards[slide.key].title}</p>

                  <p className="text-2xl font-bold lg:text-8xl">{cards[slide.key].text}</p>

                  <p className="max-w-3xl text-lg">{cards[slide.key].description}</p>

                  <a
                    href={CONTACT_TELEGRAM}
                    data-gtm="telegram"
                    data-gtm-slide={slide.key}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit rounded-md bg-white px-6 py-4 font-bold text-black transition-colors duration-200 hover:text-red-500"
                  >
                    {cards[slide.key].button}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-x-0 bottom-4 z-30 container">
        <div className="flex items-center gap-6">
          <button
            type="button"
            aria-label={labels.previousSlide}
            data-gtm="hero-slider-previous"
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex size-10 items-center justify-center rounded-full text-white transition hover:bg-white/10"
          >
            <ChevronLeft className="size-6" strokeWidth={2} />
          </button>

          <div className="flex items-center gap-6">
            {slides.map((slide, index) => (
              <button
                key={slide.key}
                type="button"
                aria-label={`Slide ${index + 1}`}
                aria-current={index === activeSlide ? 'true' : undefined}
                data-gtm="hero-slider-slide"
                data-gtm-slide={slide.key}
                onClick={() => swiperRef.current?.slideTo(index)}
                className={`size-3 rounded-full ${index === activeSlide ? 'bg-red-500' : 'bg-white'}`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label={labels.nextSlide}
            data-gtm="hero-slider-next"
            onClick={() => swiperRef.current?.slideNext()}
            className="flex size-10 items-center justify-center rounded-full text-white transition hover:bg-white/10"
          >
            <ChevronRight className="size-6" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSlider
