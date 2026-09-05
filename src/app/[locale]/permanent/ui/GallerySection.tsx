import { getTranslations } from 'next-intl/server'
import dynamic from 'next/dynamic'
import { CustomSkeletonLoader } from '@/app/ui/CustomSkeletonLoader'
import { FramerMotionContainer } from '@/app/ui/FramerMotionContainer'
import { SUPABASE_S3_URL } from '@/lib/config'
import { ImageType } from '@/generated/prisma/client'
import { LatestGalleryCard } from '../../gallery/ui/LatestGalleryCard'
import prisma from '@/lib/prisma'

export const GallerySection = async () => {
  const t = await getTranslations('permanentPage.gallerySection')

  const images = await prisma.image.findMany({ where: { type: ImageType.PERMANENT }, orderBy: { order: 'asc' }, take: 6 })

  const Lightbox = dynamic(() => import('@/app/ui/Lightbox'))

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
              ? [...Array(6)].map((_, i) => <CustomSkeletonLoader className="h-100" key={i} />)
              : images.map((photo) => (
                  <FramerMotionContainer key={photo.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
                    <LatestGalleryCard src={`${SUPABASE_S3_URL}/${photo.url}`} alt={photo.alt} />
                  </FramerMotionContainer>
                ))}
          </div>
        </Lightbox>
      </div>
    </section>
  )
}
