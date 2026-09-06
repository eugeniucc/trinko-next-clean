'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

type SketchImage = { url: string; alt: string; title: string }

const SketchesSwiper = dynamic(() => import('./SketchesSwiper').then((module) => module.SketchesSwiper), {
  ssr: false,
  loading: () => <div className="mx-auto h-95 w-70 animate-pulse rounded-xl bg-zinc-800 md:h-120 md:w-90" />
})

export const LazySketchesSwiper = ({ images }: { images: SketchImage[] }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container || shouldLoad) return

    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShouldLoad(true)
        observer.disconnect()
      },
      { rootMargin: '300px 0px' }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [shouldLoad])

  return <div ref={containerRef}>{shouldLoad ? <SketchesSwiper images={images} /> : <div className="mx-auto h-95 w-70 md:h-120 md:w-90" />}</div>
}
