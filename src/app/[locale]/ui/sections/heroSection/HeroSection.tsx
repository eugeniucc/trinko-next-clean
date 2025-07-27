"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 1500 }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={1000}
        navigation={{
          prevEl: ".custom-hero-prev",
          nextEl: ".custom-hero-next",
        }}
        pagination={{
          el: ".custom-hero-pagination",
          clickable: true,
          bulletClass: "custom-hero-bullet",
          bulletActiveClass: "custom-hero-bullet-active",
        }}
        className="w-full h-screen"
      >
        <SwiperSlide className="relative bg-[url('/images/home/header/1.webp')] grayscale bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
        </SwiperSlide>
        <SwiperSlide className="relative bg-[url('/images/home/header/2.webp')] grayscale bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
        </SwiperSlide>
        <SwiperSlide className="relative bg-[url('/images/home/header/3.webp')] grayscale bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
        </SwiperSlide>
      </Swiper>

      <div className="absolute bottom-8 left-8 z-2 flex items-center gap-4">
        <div className="flex gap-10">
          <button className="custom-hero-prev bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors duration-200">
            <ChevronLeft size={20} />
          </button>
          <div className="custom-hero-pagination flex gap-2"></div>
          <button className="custom-hero-next bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors duration-200">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
