'use client'

import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { parseAsInteger, useQueryState } from 'nuqs'
import { CustomLoading } from '@/app/ui/CustomLoading'
import { CustomPagination } from '@/app/ui/CustomPagination'
import { CustomSkeletonLoader } from '@/app/ui/CustomSkeletonLoader'
import { FramerMotionContainer } from '@/app/ui/FramerMotionContainer'
import { SUPABASE_S3_URL } from '@/lib/config'
import { ImagesResponse } from '@/lib/image/image.types'
import { LatestGalleryCard } from './LatestGalleryCard'

type Props = {
  initialData: ImagesResponse
  limit: number
  page: number
}

export function HeroSection({ initialData, limit, page }: Props) {
  const t = useTranslations('galleryPage')

  const [, setPage] = useQueryState('page', parseAsInteger.withDefault(1))

  const Lightbox = dynamic(() => import('@/app/ui/Lightbox'), {
    loading: () => <CustomLoading />
  })

  const totalPages = initialData.totalPages
  const images = initialData.items

  function handlePageChange(nextPage: number) {
    setPage(nextPage, {
      shallow: false
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
          <div id="gallery-portfolio" className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {images.length === 0
              ? [...Array(limit)].map((_, i) => <CustomSkeletonLoader className="h-100" key={i} />)
              : images.map((photo) => (
                  <FramerMotionContainer key={photo.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
                    <LatestGalleryCard src={`${SUPABASE_S3_URL}/${photo.url}`} alt={photo.alt} />
                  </FramerMotionContainer>
                ))}
          </div>
        </Lightbox>

        {totalPages > 1 && <CustomPagination page={page} totalPages={totalPages} onPageChange={handlePageChange} />}
      </div>
    </section>
  )
}
