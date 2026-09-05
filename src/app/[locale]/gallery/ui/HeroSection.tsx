'use client'

import { useTranslations } from 'next-intl'
import { useTransition } from 'react'
import dynamic from 'next/dynamic'
import { parseAsInteger, useQueryState } from 'nuqs'
import { CustomPagination } from '@/app/ui/CustomPagination'
import { FramerMotionContainer } from '@/app/ui/FramerMotionContainer'
import { SUPABASE_S3_URL } from '@/lib/config'
import type { Image } from '@/generated/prisma/client'
import { GalleryLoadingOverlay } from './GalleryLoadingOverlay'
import { LatestGalleryCard } from './LatestGalleryCard'

type Props = {
  initialData: { items: Image[]; totalPages: number }
  limit: number
  page: number
}

export function HeroSection({ initialData, limit, page }: Props) {
  const t = useTranslations('galleryPage')
  const [isPending, startTransition] = useTransition()

  const [, setPage] = useQueryState('page', parseAsInteger.withDefault(1))

  const Lightbox = dynamic(() => import('@/app/ui/Lightbox'))

  const totalPages = initialData.totalPages
  const images = initialData.items
  const isLoading = isPending || images.length === 0
  const imageSlots = [...images, ...Array(Math.max(0, limit - images.length)).fill(null)]

  function handlePageChange(nextPage: number) {
    startTransition(() => {
      void setPage(nextPage, {
        shallow: false,
        scroll: false
      })
    })
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-zinc-900 py-30">
      <div className="container flex flex-col gap-10">
        <FramerMotionContainer
          className="flex flex-col gap-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          duration={0.5}
        >
          <h1 className="text-3xl font-bold text-white sm:text-4xl">{t('title')}</h1>
          <h2 className="text-xl text-gray-200">{t('subtitle')}</h2>
          <p className="mx-auto max-w-5xl text-xl text-gray-200">{t('text')}</p>
        </FramerMotionContainer>

        <Lightbox gallery="gallery-portfolio">
          <div className="relative" aria-busy={isLoading}>
            <div id="gallery-portfolio" className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {imageSlots.map((photo, i) =>
                photo ? (
                  <FramerMotionContainer key={photo.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
                    <LatestGalleryCard src={`${SUPABASE_S3_URL}/${photo.url}`} alt={photo.alt} />
                  </FramerMotionContainer>
                ) : (
                  <div className="h-105" key={`empty-${i}`} />
                )
              )}
            </div>

            {isLoading && <GalleryLoadingOverlay />}
          </div>
        </Lightbox>

        {totalPages > 1 && <CustomPagination page={page} totalPages={totalPages} onPageChange={handlePageChange} />}
      </div>
    </section>
  )
}
