import { getTranslations } from 'next-intl/server'
import dynamic from 'next/dynamic'
import { ImageType } from '@/generated/prisma/client'
import prisma from '@/lib/prisma'
import { FramerMotionContainer } from '@/shared/FramerMotionContainer'
import { Skeleton } from '@/components/ui/skeleton'

const SketchesSlider = dynamic(() => import('./SketchesSlider'), {
  loading: () => (
    <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(3)].map((_, i) => (
        <Skeleton className="h-95 w-full bg-zinc-800" key={i} />
      ))}
    </div>
  )
})

export const SketchesSection = async () => {
  const images = await prisma.image.findMany({ where: { type: ImageType.SKETCH }, orderBy: { order: 'asc' }, take: 6 })

  const t = await getTranslations('homePage.sketchesSection')

  return (
    <section className="bg-zinc-900">
      <div className="container flex flex-col items-center gap-10 py-20 text-center">
        <FramerMotionContainer className="flex flex-col gap-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <h2 className="xl:3xl text-center text-2xl wrap-break-word text-white 2xl:text-5xl">{t('title')}</h2>
          <p className="max-w-2xl text-white">{t('description')}</p>
        </FramerMotionContainer>
        <SketchesSlider items={images} />
      </div>
    </section>
  )
}
