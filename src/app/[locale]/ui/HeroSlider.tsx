'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

const slides = [
  { imageSrc: '/images/homePage/hero-section/hero-1.webp', imageAlt: 'тату катана и рыбы кои на предплечье', key: 'firstCard' },
  { imageSrc: '/images/homePage/hero-section/hero-2.webp', imageAlt: 'тату цветы и змея на ноге', key: 'secondCard' },
  { imageSrc: '/images/homePage/hero-section/hero-3.webp', imageAlt: 'тату цветы и бабочки на плече', key: 'thirdCard' }
] as const

const Arrow = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-2">
    <path d={direction === 'left' ? 'm15 18-6-6 6-6' : 'm9 18 6-6-6-6'} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const HeroSlider = () => {
  const cards = useTranslations('homePage.heroSection.cards')
  const labels = useTranslations('pageSpeedLabel.homeSlider')
  const [activeSlide, setActiveSlide] = useState(0)
  const [previousSlide, setPreviousSlide] = useState<number | null>(null)
  const pointerStartX = useRef<number | null>(null)
  const slide = slides[activeSlide]

  const showSlide = useCallback((index: number) => {
    const nextSlide = (index + slides.length) % slides.length

    setActiveSlide((currentSlide) => {
      if (currentSlide === nextSlide) return currentSlide
      setPreviousSlide(currentSlide)
      return nextSlide
    })
  }, [])

  useEffect(() => {
    const interval = window.setInterval(() => showSlide(activeSlide + 1), 3000)
    return () => window.clearInterval(interval)
  }, [activeSlide, showSlide])

  useEffect(() => {
    if (previousSlide === null) return
    const timeout = window.setTimeout(() => setPreviousSlide(null), 700)
    return () => window.clearTimeout(timeout)
  }, [activeSlide, previousSlide])

  useEffect(() => {
    const preloadSlides = () => {
      const imageWidth = window.innerWidth < 768 ? 828 : 1920

      slides.slice(1).forEach(({ imageSrc }) => {
        const image = new window.Image()
        image.src = `/_next/image?url=${encodeURIComponent(imageSrc)}&w=${imageWidth}&q=75`
      })
    }

    if (document.readyState === 'complete') {
      preloadSlides()
      return
    }

    window.addEventListener('load', preloadSlides, { once: true })
    return () => window.removeEventListener('load', preloadSlides)
  }, [])

  const handlePointerUp = (clientX: number) => {
    if (pointerStartX.current === null) return
    const distance = clientX - pointerStartX.current
    pointerStartX.current = null

    if (Math.abs(distance) < 50) return
    showSlide(activeSlide + (distance < 0 ? 1 : -1))
  }

  return (
    <section
      className="relative min-h-screen w-full touch-pan-y overflow-hidden select-none"
      onPointerDown={(event) => {
        pointerStartX.current = event.clientX
        event.currentTarget.setPointerCapture(event.pointerId)
      }}
      onPointerUp={(event) => handlePointerUp(event.clientX)}
      onPointerCancel={() => {
        pointerStartX.current = null
      }}
    >
      {previousSlide !== null && (
        <Image
          src={slides[previousSlide].imageSrc}
          alt=""
          fill
          aria-hidden="true"
          draggable={false}
          className="absolute inset-0 -z-10 object-cover grayscale"
          sizes="100vw"
        />
      )}
      <Image
        key={slide.imageSrc}
        src={slide.imageSrc}
        alt={slide.imageAlt}
        fill
        draggable={false}
        loading={activeSlide === 0 ? 'eager' : 'lazy'}
        className="hero-slide-enter absolute inset-0 -z-10 object-cover grayscale"
        sizes="100vw"
      />
      <div className="pointer-events-none absolute inset-0 z-10 bg-black/50" />

      <div className="relative z-20 container flex min-h-screen items-center justify-center">
        <div key={slide.key} className="hero-content-enter flex w-full flex-col gap-6 text-white">
          <p className="text-3xl font-bold md:text-5xl">{cards(`${slide.key}.title`)}</p>
          <p className="text-2xl font-bold lg:text-8xl">{cards(`${slide.key}.text`)}</p>
          <p className="max-w-3xl text-lg">{cards(`${slide.key}.description`)}</p>
          <a
            href="https://t.me/TrinkoTattoo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded-md bg-white px-6 py-4 font-bold text-black transition-colors duration-200 hover:text-red-500"
          >
            {cards(`${slide.key}.button`)}
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-4 z-30 container">
        <div className="flex items-center gap-6">
          <button type="button" aria-label={labels('previousSlide')} onClick={() => showSlide(activeSlide - 1)} className="text-white">
            <Arrow direction="left" />
          </button>

          <div className="flex items-center gap-6">
            {slides.map((item, index) => (
              <button
                key={item.key}
                type="button"
                aria-label={`Slide ${index + 1}`}
                aria-current={index === activeSlide ? 'true' : undefined}
                onClick={() => showSlide(index)}
                className={`size-3 rounded-full ${index === activeSlide ? 'bg-red-500' : 'bg-white'}`}
              />
            ))}
          </div>

          <button type="button" aria-label={labels('nextSlide')} onClick={() => showSlide(activeSlide + 1)} className="text-white">
            <Arrow direction="right" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSlider
