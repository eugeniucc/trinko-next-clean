import dynamic from 'next/dynamic'
import { Container } from '@/components/custom/Container'
import { CustomLoading } from '@/components/custom/CustomLoading'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { FramerMotionContainer } from '@/components/custom/FramerMotionContainer'
import { ContactsSection } from '@/shared/ContactsSection'
import { SliderImages } from '../mocks/mocks'

export const ShowOffSection = () => {
  const DynamicSlider = dynamic(() => import('@/shared/MultiSlider'), { loading: () => <CustomLoading /> })

  return (
    <CustomSectionAria className="bg-zinc-900" aria="Портфолио студии тату и перманентного макияжа в Кишинёве">
      <Container className="flex flex-col gap-10">
        <FramerMotionContainer className="flex flex-col gap-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <h2 className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-center text-2xl font-bold text-transparent">
            Наши работы: татуировки, пирсинг и перманентный макияж в Кишинёве
          </h2>
          <p className="mx-auto max-w-3xl text-center text-zinc-400">
            Студия <strong>TrinkoTattoo</strong> — это команда мастеров с многолетним опытом. Мы создаём уникальные татуировки, выполняем
            профессиональный пирсинг и делаем современный перманентный макияж: пудровые брови, акварельные губы и межресничные стрелки. Наше портфолио
            демонстрирует качество работы, стерильность и внимание к деталям.
          </p>
        </FramerMotionContainer>

        <DynamicSlider images={SliderImages} />

        <ContactsSection />
      </Container>
    </CustomSectionAria>
  )
}
