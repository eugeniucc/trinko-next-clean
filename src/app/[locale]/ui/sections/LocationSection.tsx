'use client'

import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { Container } from '@/components/custom/Container'
import { CustomInView } from '@/components/custom/CustomInView'
import { CustomLoading } from '@/components/custom/CustomLoading'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { FramerMotionContainer } from '@/components/custom/FramerMotionContainer'

const Map = dynamic(() => import('@/components/custom/MapLibre'), {
  ssr: false,
  loading: () => <CustomLoading />
})

export const LocationSection = () => {
  const t = useTranslations('homePage.locationSection')

  return (
    <CustomSectionAria className="pt-20" aria={t('ariaLabel')}>
      <Container>
        <FramerMotionContainer className="flex flex-col gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <h2 className="text-center text-4xl">{t('title')}</h2>
          <div className="mx-auto mb-12 flex max-w-3xl flex-col gap-4 text-center">
            <p>{t('text')}</p>
            <p className="text-xl font-bold">{t('appointment')}</p>
            <p>{t('description')}</p>
          </div>
        </FramerMotionContainer>
      </Container>

      <CustomInView minHeight={400} rootMargin="200px">
        <Map />
      </CustomInView>
    </CustomSectionAria>
  )
}
