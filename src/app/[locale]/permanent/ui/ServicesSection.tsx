import { useTranslations } from 'next-intl'
import { FramerMotionContainer } from '@/app/ui/FramerMotionContainer'
import { PermanentCardProps } from '../types/permanent.types'
import { ProductCard } from './ProductCard'

export const ServicesSection = () => {
  const t = useTranslations('permanentPage.serviceSection')

  const list = t.raw('services') as PermanentCardProps[]

  const images = [
    '/images/permanentPage/permanent-brovi-kishinev.webp',
    '/images/permanentPage/permanent-guby-kishinev.webp',
    '/images/permanentPage/permanent-resniti-kishinev.webp'
  ]

  return (
    <section className="bg-zinc-900 pb-20">
      <div className="container flex flex-col gap-20">
        <FramerMotionContainer className="flex flex-col gap-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <h2 className="bg-linear-to-r from-white to-zinc-300 bg-clip-text text-center text-2xl font-bold text-transparent">{t('title')}</h2>
          <p className="mx-auto max-w-3xl text-center text-zinc-400">{t('text')}</p>
        </FramerMotionContainer>

        <div className="grid h-full grid-cols-1 gap-15 md:grid-cols-2 xl:grid-cols-3">
          {list.map((item, i) => (
            <ProductCard key={i} item={item} image={images[i] ?? images[0]} />
          ))}
        </div>
      </div>
    </section>
  )
}
