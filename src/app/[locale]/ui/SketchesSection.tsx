import { getTranslations } from 'next-intl/server'
import { getSketchImages } from '@/lib/cachedPrisma'
import { FramerMotionContainer } from '@/shared/FramerMotionContainer'
import { LazySketchesSwiper } from './LazySketchesSwiper'

export const SketchesSection = async () => {
  const images = await getSketchImages()
  const t = await getTranslations('homePage.sketchesSection')

  return (
    <section className="bg-zinc-900">
      <div className="container flex flex-col items-center gap-10 py-20 text-center">
        <FramerMotionContainer className="flex flex-col gap-10">
          <h2 className="xl:3xl text-center text-2xl wrap-break-word text-white 2xl:text-5xl">{t('title')}</h2>
          <p className="max-w-2xl text-white">{t('description')}</p>
        </FramerMotionContainer>

        <FramerMotionContainer className="w-full min-w-0 max-w-full">
          <LazySketchesSwiper images={images} />
        </FramerMotionContainer>
      </div>
    </section>
  )
}
