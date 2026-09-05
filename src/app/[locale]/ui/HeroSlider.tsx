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

type SlideProps = {
  imageSrc: string
  imageAlt: string
  priority: boolean
  title: string
  text: string
  description: string
  button: string
}

const HeroSlide = ({ imageSrc, imageAlt, priority, title, text, description, button }: SlideProps) => {
  const t = useTranslations('homePage.heroSection.cards')

  return (
    <div className="relative min-h-screen w-full">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={priority}
        className="absolute inset-0 -z-10 h-full w-full object-cover grayscale"
        sizes="100vw"
      />
      <div className="pointer-events-none absolute inset-0 z-10 bg-black/50" />
      <div className="relative z-20 container flex min-h-screen items-center justify-center">
        <div className="flex w-full flex-col gap-6 text-white">
          <p className="text-3xl font-bold md:text-5xl">{t(`${title}.title`)}</p>
          <p className="text-2xl font-bold lg:text-8xl">{t(`${text}.text`)}</p>
          <p className="max-w-3xl text-lg">{t(`${description}.description`)}</p>
          <a
            href="https://t.me/TrinkoTattoo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded-md bg-white px-6 py-4 font-bold text-black transition-colors duration-200 hover:text-red-500"
          >
            {t(`${button}.button`)}
          </a>
        </div>
      </div>
    </div>
  )
}

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
