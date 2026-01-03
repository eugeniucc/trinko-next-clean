import { getTranslations } from 'next-intl/server'
import dynamic from 'next/dynamic'
import { CustomLoading } from '@/app/ui/CustomLoading'
import { FramerMotionContainer } from '@/app/ui/FramerMotionContainer'
import { ImageType } from '@/generated/prisma/client'
import { getImagesService } from '@/lib/image/image.service'

const SketchesSlider = dynamic(() => import('./SketchesSlider'), { loading: () => <CustomLoading /> })

export const SketchesSection = async () => {
  const images = await getImagesService({
    page: 1,
    limit: 6,
    type: ImageType.SKETCH
  })

  const t = await getTranslations('homePage.sketchesSection')

  return (
    <section className="bg-zinc-900">
      <div className="container flex flex-col items-center gap-10 py-20 text-center">
        <FramerMotionContainer className="flex flex-col gap-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <h2 className="xl:3xl text-center text-2xl wrap-break-word text-white 2xl:text-5xl">{t('title')}</h2>
          <p className="max-w-2xl text-white">{t('description')}</p>
        </FramerMotionContainer>
        {images && <SketchesSlider items={images.items} />}
      </div>
    </section>
  )
}
