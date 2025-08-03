'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Container } from '@/components/custom/Container'
import { CustomLinkAppointment } from '@/components/custom/CustomLinkAppointment'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'

export const HeroSection = () => {
  const t = useTranslations('homePage.heroSection.cards')

  return (
    <CustomSectionAria className={'relative min-h-screen w-full'} aria={'hero-section-title'}>
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
          <Image
            src="/images/home/header/1.webp"
            alt="тату цветы и змея в Кишиневе"
            width={1920}
            height={1080}
            priority
            className="absolute inset-0 -z-10 h-full w-full object-cover grayscale"
          />

          <div className="pointer-events-none absolute inset-0 z-10 bg-black/50" />

          <Container className="relative z-20 flex min-h-screen items-center justify-center">
            <div className="flex w-full flex-col gap-6 text-white">
              <p className="text-3xl font-bold md:text-5xl">{t('firstCard.title')}</p>
              <p className="text-2xl font-bold lg:text-8xl">{t('firstCard.text')}</p>
              <p className="max-w-3xl text-lg">{t('firstCard.description')}</p>
              <CustomLinkAppointment text={t('firstCard.button')} />
            </div>
          </Container>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/home/header/2.webp"
            alt="тату цветы и надпись в Кишиневе"
            width={1920}
            height={1080}
            priority
            className="absolute inset-0 -z-10 h-full w-full object-cover grayscale"
          />
          <div className="pointer-events-none absolute inset-0 z-10 bg-black/50" />
          <Container className="relative z-20 flex min-h-screen items-center justify-center">
            <div className="flex w-full flex-col gap-6 text-white">
              <p className="text-3xl font-bold md:text-5xl">{t('secondCard.title')}</p>
              <p className="text-2xl font-bold lg:text-8xl">{t('secondCard.text')}</p>
              <p className="max-w-3xl text-lg">{t('secondCard.description')}</p>
              <CustomLinkAppointment text={t('secondCard.button')} />
            </div>
          </Container>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/home/header/3.webp"
            alt="тату цветы на руке в Кишиневе"
            width={1920}
            height={1080}
            priority
            className="absolute inset-0 -z-10 h-full w-full object-cover grayscale"
          />
          <div className="pointer-events-none absolute inset-0 z-10 bg-black/50" />
          <Container className="relative z-20 flex min-h-screen items-center justify-center">
            <div className="flex w-full flex-col gap-6 text-white">
              <p className="text-3xl font-bold md:text-5xl">{t('thirdCard.title')}</p>
              <p className="text-2xl font-bold lg:text-8xl">{t('thirdCard.text')}</p>
              <p className="max-w-3xl text-lg">{t('thirdCard.description')}</p>
              <CustomLinkAppointment text={t('thirdCard.button')} />
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
    </CustomSectionAria>
  )
}
