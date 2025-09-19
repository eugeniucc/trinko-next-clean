'use client'

import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Container } from '@/components/custom/Container'
import { CustomLoading } from '@/components/custom/CustomLoading'
import { CustomPagination } from '@/components/custom/CustomPagination'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { FramerMotionContainer } from '@/components/custom/FramerMotionContainer'
import { getPortfolioImages } from '@/features/portfolio-images/api/portfolio-images.api'
import { LatestGalleryCard } from './LatestGalleryCard'

const Lightbox = dynamic(() => import('@/components/custom/Lightbox'), { loading: () => <CustomLoading /> })

type Props = {
  initialPage: number
  limit: number
}

export function HeroSection({ initialPage, limit }: Props) {
  const router = useRouter()
  const [page, setPage] = useState(initialPage)

  const { data, isLoading } = useQuery({
    queryKey: ['portfolio', page, limit],
    queryFn: () => getPortfolioImages({ page, limit })
  })

  const pushWithPage = (nextPage: number) => {
    router.push(`?page=${nextPage}`)
    setPage(nextPage)
  }

  const t = useTranslations('galleryPage')

  return (
    <CustomSectionAria aria="HeroSection" className="relative flex min-h-screen items-center justify-center bg-zinc-900 py-30">
      <Container className="flex flex-col gap-10">
        <FramerMotionContainer
          className="flex flex-col gap-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          duration={0.5}
        >
          <h1 className="text-center text-3xl font-bold break-all text-white sm:text-4xl">{t('title')}</h1>
          <h2 className="text-center text-xl text-gray-200">{t('subtitle')}</h2>
          <p className="mx-auto max-w-5xl text-center text-xl text-gray-200">{t('text')}</p>
        </FramerMotionContainer>

        <Lightbox gallery="gallery-portfolio">
          <div id="gallery-portfolio" className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {isLoading
              ? [...Array(limit)].map((_, i) => <CustomLoading className="min-h-[400px]" key={i} />)
              : data?.items.map((photo, i) => (
                  <FramerMotionContainer key={`${photo.url}-${i}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
                    <LatestGalleryCard src={`${process.env.NEXT_PUBLIC_SUPABASE_URL_S3}public/${photo.url}`} alt={photo.alt} />
                  </FramerMotionContainer>
                ))}
          </div>
        </Lightbox>

        {data && <CustomPagination page={page} totalPages={data.totalPages} onPageChange={pushWithPage} />}
      </Container>
    </CustomSectionAria>
  )
}
