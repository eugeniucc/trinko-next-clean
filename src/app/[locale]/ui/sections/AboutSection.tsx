import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { CustomLinkAppointment } from '@/app/ui/CustomLinkAppointment'
import { FramerMotionContainer } from '@/app/ui/FramerMotionContainer'

export const AboutSection = async () => {
  const t = await getTranslations('homePage.aboutSection')

  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 bg-black/50"></div>
      <Image
        src="/images/homePage/about-section/about-1.webp"
        width={1920}
        height={1080}
        alt="тату ласточки на спине"
        className="absolute top-0 left-0 -z-10 h-full w-full object-cover grayscale"
      />
      <div className="relative z-1 container flex min-h-screen flex-col justify-center">
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
      </div>
    </section>
  )
}
