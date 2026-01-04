'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { HeroSlide } from './HeroSlide'

const HeroSlider = () => {
  const t = useTranslations('pageSpeedLabel.homeSlider')

  return (
    <>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        slidesPerView={1}
        autoplay={{ delay: 3500 }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={1000}
        navigation={{
          prevEl: '.custom-hero-prev',
          nextEl: '.custom-hero-next'
        }}
        pagination={{
          el: '.custom-hero-pagination',
          clickable: true
        }}
        className="h-screen w-full"
      >
        <SwiperSlide>
          <HeroSlide
            imageSrc="/images/homePage/hero-section/hero-1.webp"
            imageAlt="тату катана и рыбы кои на предплечье"
            title="firstCard"
            text="firstCard"
            description="firstCard"
            priority={true}
            button="firstCard"
          />
        </SwiperSlide>

        <SwiperSlide>
          <HeroSlide
            imageSrc="/images/homePage/hero-section/hero-2.webp"
            imageAlt="тату цветы и змея на ноге"
            title="secondCard"
            text="secondCard"
            description="secondCard"
            priority={false}
            button="secondCard"
          />
        </SwiperSlide>

        <SwiperSlide>
          <HeroSlide
            imageSrc="/images/homePage/hero-section/hero-3.webp"
            imageAlt="тату цветы и бабочки на плече"
            title="thirdCard"
            text="thirdCard"
            description="thirdCard"
            priority={false}
            button="thirdCard"
          />
        </SwiperSlide>
      </Swiper>

      <div className="relative container">
        <div className="absolute bottom-4 left-4 z-2 flex items-center gap-4">
          <div className="flex items-center gap-6">
            <button aria-label={t('previousSlide')} className="custom-hero-prev text-white">
              <ChevronLeft size={20} />
            </button>
            <div className="custom-hero-pagination flex! items-center! gap-6! [&>.swiper-pagination-bullet]:size-3! [&>.swiper-pagination-bullet]:bg-white! [&>.swiper-pagination-bullet]:opacity-100! [&>.swiper-pagination-bullet-active]:bg-red-500!" />

            <button aria-label={t('nextSlide')} className="custom-hero-next text-white">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSlider
