import { useTranslations } from 'next-intl'
import { Container } from '@/components/custom/Container'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { FramerMotionContainer } from '@/components/custom/FramerMotionContainer'
import { PermanentCardProps } from '../types/permanent.types'
import { ProductCard } from './ProductCard'

export const ServicesSection = () => {
  const t = useTranslations('permanentPage.serviceSection')

  const list = t.raw('services') as PermanentCardProps[]

  return (
    <CustomSectionAria className="bg-zinc-900 pb-20" aria="Наши услуги перманентного макияжа">
      <Container className="flex flex-col gap-20">
        <FramerMotionContainer className="flex flex-col gap-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <h2 className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-center text-2xl font-bold text-transparent">
            Перманентный макияж в Кишинёве — брови, губы и стрелки в студии TrinkoTattoo
          </h2>
          <p className="mx-auto max-w-3xl text-center text-zinc-400">
            Наша тату-студия в Кишинёве предлагает профессиональный перманентный макияж для женщин, которые хотят всегда выглядеть ухоженно. Мы
            используем современные техники: пудровые брови, акварельные губы и межресничные стрелки. Процедура безболезненная, безопасная и даёт
            естественный результат на 1.5–3 года.
          </p>
        </FramerMotionContainer>

        <div className="grid grid-cols-1 gap-15 md:grid-cols-2 xl:grid-cols-3">
          {list.map((item, i) => (
            <ProductCard key={i} item={item} />
          ))}
        </div>
      </Container>
    </CustomSectionAria>
  )
}
