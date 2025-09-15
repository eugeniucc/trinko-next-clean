import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/custom/Container'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { FramerMotionContainer } from '@/components/custom/FramerMotionContainer'
import { heroCardsIcons } from '../mocks/mocks'
import { HeroCard } from './HeroCard'

export const HeroSection = async () => {
  const t = await getTranslations('tattooPage')

  const raw = t.raw('heroSection.heroCards') as { title: string; text: string; list: string[]; button: string }[]

  return (
    <CustomSectionAria aria={t('heroSection.ariaLabel')} className="flex flex-col gap-10 bg-zinc-900">
      <Container className="flex min-h-screen flex-col items-center justify-center gap-10 pt-30">
        <FramerMotionContainer className="flex flex-col gap-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <h1 className="text-center text-3xl font-bold text-white sm:text-4xl">{t('heroSection.title')}</h1>
          <h2 className="text-center text-2xl font-semibold text-gray-200">{t('heroSection.subtitle')}</h2>
        </FramerMotionContainer>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {raw.map((item, i) => (
            <FramerMotionContainer key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
              <HeroCard item={item} Icon={heroCardsIcons[i]} />
            </FramerMotionContainer>
          ))}
        </div>
      </Container>
    </CustomSectionAria>
  )
}
