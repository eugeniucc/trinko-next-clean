'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { FramerMotionContainer } from '@/shared/FramerMotionContainer'

const Map = dynamic(() => import('./MapLibre'), {
  loading: () => <Skeleton className="h-100 w-full rounded-none bg-zinc-800" aria-label="Loading map" />,
  ssr: false
})

interface Props {
  className?: string
  translations: {
    title: string
    text: string
    appointment: string
    description: string
  }
}

export const LocationSection = ({ className, translations }: Props) => {
  const [isMapOpen, setIsMapOpen] = useState(false)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mapContainer = mapContainerRef.current

    if (!mapContainer || isMapOpen || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setIsMapOpen(true)
        observer.disconnect()
      },
      { rootMargin: '200px 0px' }
    )

    observer.observe(mapContainer)

    return () => observer.disconnect()
  }, [isMapOpen])

  return (
    <section className={cn('pt-20', className)}>
      <div className="container">
        <FramerMotionContainer className="flex flex-col gap-4">
          <h2 className="text-center text-4xl">{translations.title}</h2>
          <div className="mx-auto mb-12 flex max-w-3xl flex-col gap-4 text-center">
            <p>{translations.text}</p>
            <p className="text-xl font-bold">{translations.appointment}</p>
            <p>{translations.description}</p>
          </div>
        </FramerMotionContainer>
      </div>

      <div ref={mapContainerRef} className="relative min-h-100 bg-zinc-800">
        {isMapOpen ? (
          <Map />
        ) : (
          <div className="relative flex min-h-100 items-center justify-center overflow-hidden bg-zinc-800 bg-[radial-gradient(circle_at_center,#3f4548_1px,transparent_1px)] bg-size-[24px_24px]">
            <div className="absolute inset-0 bg-zinc-900/35" aria-hidden="true" />
            <div className="relative z-10 flex flex-col items-center gap-4 text-center text-white">
              <div className="flex size-16 items-center justify-center rounded-full bg-red-500/90 shadow-lg shadow-black/30">
                <span className="text-3xl" aria-hidden="true">
                  ⌖
                </span>
              </div>
              <button
                type="button"
                data-gtm="map-open"
                onClick={() => setIsMapOpen(true)}
                className="rounded-md bg-white px-6 py-3 font-bold text-black transition-colors hover:text-red-500"
              >
                Открыть карту
              </button>
              <a
                href="https://maps.app.goo.gl/mwzBjfDHK3dASGUp7"
                data-gtm="google-maps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-300 underline underline-offset-4 transition-colors hover:text-white"
              >
                Google Maps
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
