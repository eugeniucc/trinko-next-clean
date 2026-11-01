'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRef, useState } from 'react'
import { HeroSlide } from './HeroSlide'
import { slides, type HeroSliderProps } from './heroSlides'

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
            <HeroSlide slide={slide} card={cards[slide.key]} preload={index === 0} />
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
