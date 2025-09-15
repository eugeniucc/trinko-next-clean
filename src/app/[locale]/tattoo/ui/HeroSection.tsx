import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/custom/Container'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { FramerMotionContainer } from '@/components/custom/FramerMotionContainer'
import { heroCardsIcons } from '../mocks/mocks'
import { HeroCardProps } from '../types/tattoo.types'
import { HeroCard } from './HeroCard'

export const HeroSection = async () => {
  const t = await getTranslations('tattooPage')

  const raw = t.raw('heroSection.heroCards') as HeroCardProps[]

  return (
    <CustomSectionAria aria={t('heroSection.ariaLabel')} className="flex flex-col gap-10 bg-zinc-900">
      <Container className="flex min-h-screen flex-col items-center justify-center gap-10 pt-30">
        <FramerMotionContainer className="flex flex-col gap-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <h1 className="text-center text-3xl font-bold text-white sm:text-4xl">
            Тату в Кишиневе: цветные и чёрно-белые татуировки, коррекция, перекрытие и дизайн татуировки
          </h1>
          <h2 className="text-center text-2xl font-semibold text-gray-200">Тату салон Кишинёв: мастера, цены и татуировки в Молдове</h2>
        </FramerMotionContainer>

        <FramerMotionContainer
          className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          duration={0.5}
        >
          {raw.map((item, i) => (
            <HeroCard key={i} item={item} Icon={heroCardsIcons[i]} />
          ))}
        </FramerMotionContainer>
      </Container>
    </CustomSectionAria>
  )
}
