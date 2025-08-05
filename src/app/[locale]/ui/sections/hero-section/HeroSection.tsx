import dynamic from 'next/dynamic'
import Loading from '@/app/loading'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'

const HeroSlider = dynamic(() => import('./HeroSlider'), {
  loading: () => <Loading />
})

export const HeroSection = () => {
  return (
    <CustomSectionAria className={'relative min-h-screen w-full'} aria={'hero-section-title'}>
      <HeroSlider />
    </CustomSectionAria>
  )
}
