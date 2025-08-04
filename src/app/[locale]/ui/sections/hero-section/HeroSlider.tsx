'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Container } from '@/components/custom/Container'
import { HeroSlide } from './HeroSlide'

const HeroSlider = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        slidesPerView={1}
        autoplay={{ delay: 1500 }}
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
          clickable: true,
          bulletClass: 'custom-hero-bullet',
          bulletActiveClass: 'custom-hero-bullet-active'
        }}
        className="h-screen w-full"
      >
        <SwiperSlide>
          <HeroSlide
            imageSrc="/images/home/header/1.webp"
            imageAlt="тату цветы и змея в Кишиневе"
            title="firstCard"
            text="firstCard"
            description="firstCard"
            priority={true}
            button="firstCard"
          />
        </SwiperSlide>

        <SwiperSlide>
          <HeroSlide
            imageSrc="/images/home/header/2.webp"
            imageAlt="тату цветы и надпись в Кишиневе"
            title="secondCard"
            text="secondCard"
            description="secondCard"
            priority={false}
            button="secondCard"
          />
        </SwiperSlide>

        <SwiperSlide>
          <HeroSlide
            imageSrc="/images/home/header/3.webp"
            imageAlt="тату цветы на руке в Кишиневе"
            title="thirdCard"
            text="thirdCard"
            description="thirdCard"
            priority={false}
            button="thirdCard"
          />
        </SwiperSlide>
      </Swiper>

      <Container className="relative">
        <div className="absolute bottom-4 left-4 z-2 flex items-center gap-4">
          <div className="flex gap-6">
            <button className="custom-hero-prev text-white">
              <ChevronLeft size={20} />
            </button>
            <div className="custom-hero-pagination flex gap-6"></div>
            <button className="custom-hero-next text-white">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </>
  )
}

export default HeroSlider
