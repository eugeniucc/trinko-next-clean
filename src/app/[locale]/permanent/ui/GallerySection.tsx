import { getTranslations } from 'next-intl/server'
import dynamic from 'next/dynamic'
import { Expand } from 'lucide-react'
import Image from 'next/image'
import { ImageType } from '@/generated/prisma/client'
import prisma from '@/lib/prisma'
import { FramerMotionContainer } from '@/shared/FramerMotionContainer'
import { Skeleton } from '@/components/ui/skeleton'

const SUPABASE_S3_URL = process.env.NEXT_PUBLIC_SUPABASE_URL_S3

export const GallerySection = async () => {
  const t = await getTranslations('permanentPage.gallerySection')

  const images = await prisma.image.findMany({ where: { type: ImageType.PERMANENT }, orderBy: { order: 'asc' }, take: 6 })

  const Lightbox = dynamic(() => import('@/shared/Lightbox'))

  return (
    <section className="bg-zinc-900 pb-20">
      <div className="container flex flex-col gap-10">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 text-center">
          <h2 className="mb-2 text-2xl font-bold text-white 2xl:text-4xl">{t('title')}</h2>
          <p className="text-zinc-400">{t('text')}</p>
          <p className="text-zinc-400">{t('extraText')}</p>
        </div>

        <Lightbox gallery="gallery-permanent">
          <div id="gallery-permanent" className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {images.length === 0
              ? [...Array(6)].map((_, i) => <Skeleton className="h-100 w-full bg-zinc-800" key={i} />)
              : images.map((photo) => (
                  <FramerMotionContainer key={photo.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
                    <a className="relative block h-105 w-full overflow-hidden" href={`${SUPABASE_S3_URL}/${photo.url}`} data-pswp-width={1200} data-pswp-height={1600} aria-label={photo.alt}>
                      <Image
                        className="rounded-md object-cover"
                        src={`${SUPABASE_S3_URL}/${photo.url}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        alt={photo.alt}
                      />
                      <Expand className="pointer-events-none absolute right-3 bottom-3 size-10 rounded-full bg-zinc-900/70 p-2 text-white shadow-lg backdrop-blur-sm" />
                    </a>
                  </FramerMotionContainer>
                ))}
          </div>
        </Lightbox>
      </div>
    </section>
  )
}
