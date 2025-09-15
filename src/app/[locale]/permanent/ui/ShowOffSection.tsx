import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { Container } from '@/components/custom/Container'
import { CustomLoading } from '@/components/custom/CustomLoading'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { FramerMotionContainer } from '@/components/custom/FramerMotionContainer'
import { SinglePhoto } from '@/features/permanentpage-photo/types/permanentpage-photo.types'
import { ContactsSection } from '@/shared/ContactsSection'

type Props = {
  sliderImg?: SinglePhoto[]
}

export const ShowOffSection = ({ sliderImg }: Props) => {
  const DynamicSlider = dynamic(() => import('@/shared/MultiSlider'), { loading: () => <CustomLoading /> })

  const t = useTranslations('permanentPage.showOffSection')

  return (
    <CustomSectionAria className="bg-zinc-900" aria={t('ariaLabel')}>
      <Container className="flex flex-col gap-10">
        <FramerMotionContainer className="flex flex-col gap-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <h2 className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-center text-2xl font-bold text-transparent">{t('title')}</h2>
          <p className="mx-auto max-w-3xl text-center text-zinc-400">{t('text')}</p>
        </FramerMotionContainer>

        <DynamicSlider sliderImg={sliderImg} />

        <ContactsSection />
      </Container>
    </CustomSectionAria>
  )
}
