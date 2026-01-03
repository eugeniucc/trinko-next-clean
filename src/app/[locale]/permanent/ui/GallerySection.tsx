import { getTranslations } from 'next-intl/server'
import dynamic from 'next/dynamic'
import { CustomLoading } from '@/app/ui/CustomLoading'
import { CustomSkeletonLoader } from '@/app/ui/CustomSkeletonLoader'
import { FramerMotionContainer } from '@/app/ui/FramerMotionContainer'
import { ImageType } from '@/generated/prisma/client'
import { SUPABASE_S3_URL } from '@/lib/config'
import { getImagesService } from '@/lib/image/image.service'
import { LatestGalleryCard } from '../../gallery/ui/LatestGalleryCard'

export const GallerySection = async () => {
  const t = await getTranslations('permanentPage.gallerySection')

  const images = await getImagesService({
    page: 1,
    limit: 6,
    type: ImageType.PERMANENT
  })

  const Lightbox = dynamic(() => import('@/app/ui/Lightbox'), { loading: () => <CustomLoading /> })

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
            {images.items.length === 0
              ? [...Array(6)].map((_, i) => <CustomSkeletonLoader className="h-100" key={i} />)
              : images.items.map((photo) => (
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
