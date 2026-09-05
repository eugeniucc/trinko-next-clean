'use client'

import { useInView } from 'react-intersection-observer'
import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { FramerMotionContainer } from '@/shared/FramerMotionContainer'

type VideoProps = {
  src: string
  poster?: string
  title: string
}

const AutoPlayVideo = ({ src, poster, title }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const { ref, inView } = useInView({ threshold: 0.25 })

  useEffect(() => {
    if (!videoRef.current) return
    if (inView) {
      videoRef.current.preload = 'auto'
      videoRef.current.play().catch(() => {})
    } else {
      videoRef.current.pause()
    }
  }, [inView])

  return (
    <div ref={ref} className="aspect-video overflow-hidden rounded-lg">
      <video ref={videoRef} muted loop playsInline preload="none" poster={poster} title={title} aria-label={title} className="h-full w-full object-cover">
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}

export const AdvantagesSection = () => {
  const t = useTranslations('homePage.advantagesSection')

  return (
    <section>
      <div className="container grid grid-cols-1 gap-10 py-20 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <FramerMotionContainer className="flex flex-col gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
            <p className="text-4xl lg:text-6xl">{t('text')}</p>
            <h3 className="text-lg font-semibold">{t('title')}</h3>
            <p>{t('description')}</p>
          </FramerMotionContainer>
          <div className="aspect-video overflow-hidden rounded-lg">
            <AutoPlayVideo
              title="gotovaya-tatu-posle-seansa"
              src={'https://res.cloudinary.com/da3wbhyei/video/upload/v1754937202/gotovaya-tatu-posle-seansa_a8bcjg.mp4'}
            />
          </div>
          <FramerMotionContainer initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
            <p className="max-w-2xl text-left text-lg font-semibold sm:text-right">{t('extra')}</p>
          </FramerMotionContainer>
        </div>
        <div className="flex flex-col gap-6">
          <div className="aspect-video overflow-hidden rounded-lg">
            <AutoPlayVideo
              title="process-nabivki-tatu-kishinev"
              src={'https://res.cloudinary.com/da3wbhyei/video/upload/v1754937202/process-nabivki-tatu-kishinev_ghvst5.mp4'}
            />
          </div>
          <FramerMotionContainer initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
            <p>{t('more_text')}</p>
          </FramerMotionContainer>
          <div className="aspect-video overflow-hidden rounded-lg">
            <AutoPlayVideo
              title="seans-tatu-ot-nachala-do-konca"
              src={'https://res.cloudinary.com/da3wbhyei/video/upload/v1754937202/seans-tatu-ot-nachala-do-konca_hxoex5.mp4'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
