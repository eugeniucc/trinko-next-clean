'use client'

import dynamic from 'next/dynamic'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'

const HeroSlider = dynamic(() => import('./HeroSlider'), {
  loading: () => <p>Загрузка...</p>
})

export const HeroSection = () => {
  return (
    <CustomSectionAria className={'relative min-h-screen w-full'} aria={'hero-section-title'}>
      <HeroSlider />
    </CustomSectionAria>
  )
}
