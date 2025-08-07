import { getTranslations } from 'next-intl/server'
import dynamic from 'next/dynamic'
import { Container } from '@/components/custom/Container'
import { CustomLoading } from '@/components/custom/CustomLoading'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { getHomePageSketches } from '@/features/home-sketches-slider/api/homepage-sketches.api'

const SketchesSlider = dynamic(() => import('./SketchesSlider'))

export const SketchesSection = async () => {
  const homepageSlider = await getHomePageSketches()

  const t = await getTranslations('homePage.sketchesSection')

  return (
    <CustomSectionAria className="bg-zinc-900" aria={t('ariaLabel')}>
      <Container className="flex flex-col items-center gap-10 py-20 text-center">
        <h2 className="text-4xl text-white md:text-6xl">{t('title')}</h2>
        <p className="max-w-2xl text-white">{t('description')}</p>
        {homepageSlider ? <SketchesSlider items={homepageSlider} /> : <CustomLoading />}
      </Container>
    </CustomSectionAria>
  )
}
