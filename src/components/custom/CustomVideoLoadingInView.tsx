'use client'

import { useInView } from 'react-intersection-observer'
import { useEffect, useRef } from 'react'

type Props = {
  src: string
  poster?: string
  title: string
}

export function AutoPlayOnView({ src, poster, title }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const { ref, inView } = useInView({ threshold: 0.25 })

  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.preload = 'auto'
        videoRef.current.play().catch(() => {})
      } else {
        videoRef.current.pause()
      }
    }
  }, [inView])

  return (
    <div ref={ref} className="aspect-video overflow-hidden rounded-lg">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        title={title}
        aria-label={title}
        className="h-full w-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}
