'use client'

import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const SUPABASE_S3_URL = process.env.NEXT_PUBLIC_SUPABASE_URL_S3

type SketchImage = {
  url: string
  alt: string
  title: string
}

export const SketchesSwiper = ({ images }: { images: SketchImage[] }) => {
  return (
    <div className="mx-auto w-full min-w-0 max-w-6xl overflow-hidden py-4 md:py-8">
      <Swiper
        className="w-full max-w-full"
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop={images.length > 4}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: false
        }}
        autoplay={{ delay: 3500, disableOnInteraction: true }}
      >
        {images.map((item, i) => (
          <SwiperSlide key={`${item.url}-${i}`} className="h-95! w-70! md:h-120! md:w-90!">
            <article className="group relative h-full w-full overflow-hidden rounded-xl">
              <Image
                src={`${SUPABASE_S3_URL}/${item.url}`}
                alt={item.alt}
                width={650}
                height={550}
                sizes="(min-width: 768px) 360px, 280px"
                className="h-full w-full object-cover brightness-90 transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="translate-y-4 text-xl font-bold text-white transition-transform duration-300 group-hover:translate-y-0">
                  {item.title}
                </h3>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
