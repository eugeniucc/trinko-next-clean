import dynamic from 'next/dynamic'
import Loading from '@/app/loading'

const HeroSlider = dynamic(() => import('./HeroSlider'), {
  loading: () => <Loading />
})

export const HeroSection = async () => {
  return (
    <section className="relative min-h-screen w-full">
      <HeroSlider />
    </section>
  )
}
