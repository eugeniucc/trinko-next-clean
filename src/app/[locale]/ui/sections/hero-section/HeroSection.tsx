import { getTranslations } from 'next-intl/server'
import dynamic from 'next/dynamic'
import React from 'react'
import Loading from '@/app/loading'
import { CustomSectionAria } from '@/app/ui/CustomSectionAria'

const HeroSlider = dynamic(() => import('./HeroSlider'), {
  loading: () => <Loading />
})

export const HeroSection = async () => {
  const t = await getTranslations('homePage.heroSection')

  return (
    <CustomSectionAria className={'relative min-h-screen w-full'} aria={t('ariaLabel')}>
      <HeroSlider />
    </CustomSectionAria>
  )
}
