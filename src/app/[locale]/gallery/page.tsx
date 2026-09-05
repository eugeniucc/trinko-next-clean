import { Expand } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import dynamic from 'next/dynamic'
import NextImage from 'next/image'
import { withSeo } from '@/lib/metadata'
import { getPaginatedImages } from '@/lib/paginationPrisma'
import { ContactsSection } from '@/shared/ContactsSection'
import { FramerMotionContainer } from '@/shared/FramerMotionContainer'
import NuqsPagination from '@/shared/NuqsPagination'

export const generateMetadata = withSeo('metadata.galleryPageMetadata', '/gallery')

interface GalleryProps {
  searchParams: Promise<{
    page?: string
  }>
}

export default async function Gallery({ searchParams }: GalleryProps) {
  const t = await getTranslations('galleryPage')
  const params = await searchParams
  const { items, totalPages, limit } = await getPaginatedImages(params.page)
  const isLoading = items.length === 0
  const imageSlots = [...items, ...Array(Math.max(0, limit - items.length)).fill(null)]
  const Lightbox = dynamic(() => import('@/shared/Lightbox'))
  const supabaseS3Url = process.env.NEXT_PUBLIC_SUPABASE_URL_S3

  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative flex min-h-screen items-center justify-center bg-zinc-900 py-30">
        <div className="container flex flex-col gap-10">
          <FramerMotionContainer className="flex flex-col gap-6 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
            <h1 className="text-3xl font-bold text-white sm:text-4xl">{t('title')}</h1>
            <h2 className="text-xl text-gray-200">{t('subtitle')}</h2>
            <p className="mx-auto max-w-5xl text-xl text-gray-200">{t('text')}</p>
          </FramerMotionContainer>

          <Lightbox gallery="gallery-portfolio">
            <div className="relative" aria-busy={isLoading}>
              <div id="gallery-portfolio" className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {imageSlots.map((photo, index) =>
                  photo ? (
                    <FramerMotionContainer key={photo.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
                      <a className="relative block h-105 w-full overflow-hidden" href={`${supabaseS3Url}/${photo.url}`} data-pswp-width={1200} data-pswp-height={1600} aria-label={photo.alt}>
                        <NextImage
                          className="rounded-md object-cover"
                          src={`${supabaseS3Url}/${photo.url}`}
                          fill
                          priority={index === 0}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          alt={photo.alt}
                        />
                        <Expand className="pointer-events-none absolute right-3 bottom-3 size-10 rounded-full bg-zinc-900/70 p-2 text-white shadow-lg backdrop-blur-sm" />
                      </a>
                    </FramerMotionContainer>
                  ) : (
                    <div className="h-105" key={`empty-${index}`} />
                  )
                )}
              </div>

              {isLoading && (
                <div className="absolute inset-0 z-10 flex min-h-0 items-center justify-center bg-zinc-900/80" aria-label="Loading gallery">
                  <NextImage src="/logo.svg" alt="Oblivion Tattoo" width={64} height={91} unoptimized />
                </div>
              )}
            </div>
          </Lightbox>

          {totalPages > 1 && <NuqsPagination totalPages={totalPages} />}
        </div>
      </section>
      <ContactsSection />
    </main>
  )
}
