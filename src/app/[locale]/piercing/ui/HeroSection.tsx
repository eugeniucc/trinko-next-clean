import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { CustomSectionAria } from '@/app/ui/CustomSectionAria'
import { FramerMotionContainer } from '@/app/ui/FramerMotionContainer'

export const HeroSection = async () => {
  const t = await getTranslations('piercingPage.heroSection')

  return (
    <CustomSectionAria aria={t('ariaLabel')} className="relative flex min-h-screen items-center justify-center bg-zinc-900 py-30 2xl:py-0">
      <div className="container flex flex-col items-center gap-10">
        <FramerMotionContainer className="flex flex-col gap-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <h1 className="text-center text-3xl font-bold break-all text-white sm:text-4xl">{t('title')}</h1>
          <p className="mx-auto max-w-5xl text-center text-xl break-all text-gray-200">{t('text')}</p>
        </FramerMotionContainer>

        <FramerMotionContainer className="flex flex-col gap-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
            <Image
              src="/piercing.webp"
              alt="Профессиональный пирсинг в студии Oblivion Tattoo Кишинев"
              width={400}
              height={400}
              priority
              className="col-span-1 h-full w-full rounded-lg"
            />
            <div className="flex flex-col justify-between gap-10 xl:col-span-2">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-10">
                <div className="inline-flex size-14 items-center justify-center rounded-full bg-red-500 p-6 text-3xl font-bold text-white">1</div>
                <div className="flex flex-col gap-6 text-white">
                  <h2 className="text-center text-lg font-bold sm:text-left">{t('firstCard.title')}</h2>
                  <p className="text-center sm:text-left">{t('firstCard.text')}</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-10">
                <div className="inline-flex size-14 items-center justify-center rounded-full bg-red-500 p-6 text-3xl font-bold text-white">2</div>
                <div className="flex flex-col gap-6 text-white">
                  <h2 className="text-center text-lg font-bold sm:text-left">{t('secondCard.title')}</h2>
                  <p className="text-center sm:text-left">{t('secondCard.text')}</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-10">
                <div className="inline-flex size-14 items-center justify-center rounded-full bg-red-500 p-6 text-3xl font-bold text-white">3</div>
                <div className="flex flex-col gap-6 text-white">
                  <h2 className="text-center text-lg font-bold sm:text-left">{t('thirdCard.title')}</h2>
                  <p className="text-center sm:text-left">{t('thirdCard.text')}</p>
                </div>
              </div>
            </div>
          </div>
        </FramerMotionContainer>
      </div>
    </CustomSectionAria>
  )
}
