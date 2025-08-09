import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { Container } from '@/components/custom/Container'
import { CustomLinkAppointment } from '@/components/custom/CustomLinkAppointment'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { FramerMotionContainer } from '@/components/custom/FramerMotionContainer'

export const AboutSection = async () => {
  const t = await getTranslations('homePage.aboutSection')

  return (
    <CustomSectionAria className={'relative'} aria={t('ariaLabel')}>
      <div className="pointer-events-none absolute inset-0 bg-black/50"></div>
      <Image
        src={`${process.env.NEXT_PUBLIC_SUPABASE_URL_S3}public/homepage-about/1.webp`}
        width={1920}
        height={1080}
        alt="Мастер делает татуировку в салоне TrinkoTattoo"
        className="absolute top-0 left-0 -z-10 h-full w-full object-cover grayscale"
      />
      <Container className="relative z-1 flex min-h-screen flex-col justify-center">
        <FramerMotionContainer initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <div className="ml-auto flex max-w-2xl flex-col gap-4">
            <h2 id="about-section-title" className="text-3xl font-bold text-white">
              {t('title')}
            </h2>
            <h3 className="text-xl font-semibold text-white">{t('text')}</h3>
            <p className="text-base text-white">{t('description')}</p>
            <CustomLinkAppointment text={t('button')} />
          </div>
        </FramerMotionContainer>
      </Container>
    </CustomSectionAria>
  )
}
