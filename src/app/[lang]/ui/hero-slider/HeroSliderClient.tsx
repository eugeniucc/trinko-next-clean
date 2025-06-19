"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/parallax";
import "swiper/css/pagination";
import {
  EffectFade,
  Autoplay,
  Pagination,
  Parallax,
  Navigation,
} from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SlideContent = {
  title: string;
  subtitle: string;
  cta: string;
};

export const HeroSliderClient = ({ slides }: { slides: SlideContent[] }) => {
  return (
    <div className="relative h-screen w-full">
      <Swiper
        effect="fade"
        modules={[EffectFade, Autoplay, Pagination, Parallax, Navigation]}
        autoplay={{
          delay: 3000,
        }}
        navigation={{
          nextEl: ".swiper-button-next-hero",
          prevEl: ".swiper-button-prev-hero",
        }}
        pagination={{ clickable: true, el: ".swiper-pagination-hero" }}
        loop
        speed={1000}
        parallax={true}
        className="absolute h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="absolute inset-0" data-swiper-parallax="-50%">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale filter"
                style={{
                  backgroundImage: `url(/images/home/header/${index + 1}.webp)`,
                }}
              ></div>
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute top-1/2 left-1/2 container flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-start gap-4 p-4 text-left">
                <h2
                  className="text-4xl text-white lg:text-5xl"
                  data-swiper-parallax="-600"
                >
                  {slide.title}
                </h2>
                <h3
                  className="text-5xl font-bold text-white lg:text-6xl"
                  data-swiper-parallax="-400"
                >
                  {slide.subtitle}
                </h3>
                <p
                  className="mb-8 max-w-3xl text-[18px] text-white"
                  data-swiper-parallax="-300"
                >
                  {slide.cta}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="absolute bottom-4 left-1/2 z-2 container flex -translate-x-1/2 transform items-center justify-end gap-4">
          <button className="swiper-button-prev-hero cursor-pointer">
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <div className="relative flex justify-center">
            <div className="swiper-pagination-hero flex gap-1"></div>
          </div>
          <button className="swiper-button-next-hero cursor-pointer">
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </Swiper>
    </div>
  );
};
