'use client'

import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SUPABASE_S3_URL } from '@/lib/config'
import { SingleImage } from '@/lib/image/image.types'

type Props = {
  items: SingleImage[]
}

export default function SketchesSlider({ items }: Props) {
  return (
    <div className="w-full py-8">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 300,
          modifier: 1.5,
          slideShadows: false
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}
        modules={[EffectCoverflow, Autoplay]}
        loop={true}
        speed={1200}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i} className="h-95! w-70! overflow-hidden rounded-xl md:h-187.5! md:w-137.5!">
            <div className="group relative h-full w-full">
              <Image
                src={`${SUPABASE_S3_URL}/${item.url}`}
                alt={item.alt}
                width={650}
                height={550}
                className="h-full w-full object-cover brightness-90 transition-all duration-300 group-hover:brightness-110"
                priority={i === 0}
              />
              <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="translate-y-4 text-xl font-bold text-white transition-transform duration-300 group-hover:translate-y-0">
                  {item.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
