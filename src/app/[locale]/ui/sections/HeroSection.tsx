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
import { Container } from '@/components/custom/Container'

export const HeroSection = () => {
  const t = useTranslations('homePage.heroSection.cards')

  return (
    <div className="relative h-screen w-full">
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
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
          <div className="absolute inset-0 z-0 bg-[url('/images/home/header/1.webp')] bg-cover bg-center grayscale" />
          <div className="pointer-events-none absolute inset-0 z-10 bg-black/50" />
          <Container className="relative z-20 flex min-h-screen items-center justify-center">
            <div className="flex w-full flex-col gap-6 text-white">
              <p className="text-3xl font-bold md:text-5xl">{t('firstCard.title')}</p>
              <p className="text-2xl font-bold lg:text-8xl">{t('firstCard.text')}</p>
              <p className="max-w-3xl text-lg">{t('firstCard.description')}</p>
              <a
                href="https://t.me/Trinkonfox"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit rounded-md bg-white px-6 py-4 font-bold text-black transition-colors duration-200 hover:text-red-500"
              >
                {t('firstCard.button')}
              </a>
            </div>
          </Container>
        </SwiperSlide>

        <SwiperSlide>
          <div className="absolute inset-0 z-0 bg-[url('/images/home/header/2.webp')] bg-cover bg-center grayscale" />
          <div className="pointer-events-none absolute inset-0 z-10 bg-black/50" />
          <Container className="relative z-20 flex min-h-screen items-center justify-center">
            <div className="flex w-full flex-col gap-6 text-white">
              <p className="text-3xl font-bold md:text-5xl">{t('secondCard.title')}</p>
              <p className="text-2xl font-bold lg:text-8xl">{t('secondCard.text')}</p>
              <p className="max-w-3xl text-lg">{t('secondCard.description')}</p>
              <a
                href="https://t.me/Trinkonfox"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit rounded-md bg-white px-6 py-4 font-bold text-black transition-colors duration-200 hover:text-red-500"
              >
                {t('secondCard.button')}
              </a>
            </div>
          </Container>
        </SwiperSlide>

        <SwiperSlide>
          <div className="absolute inset-0 z-0 bg-[url('/images/home/header/3.webp')] bg-cover bg-center grayscale" />
          <div className="pointer-events-none absolute inset-0 z-10 bg-black/50" />
          <Container className="relative z-20 flex min-h-screen items-center justify-center">
            <div className="flex w-full flex-col gap-6 text-white">
              <p className="text-3xl font-bold md:text-5xl">{t('thirdCard.title')}</p>
              <p className="text-2xl font-bold lg:text-8xl">{t('thirdCard.text')}</p>
              <p className="max-w-3xl text-lg">{t('thirdCard.description')}</p>
              <a
                href="https://t.me/Trinkonfox"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit rounded-md bg-white px-6 py-4 font-bold text-black transition-colors duration-200 hover:text-red-500"
              >
                {t('thirdCard.button')}
              </a>
            </div>
          </Container>
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
    </div>
  )
}
