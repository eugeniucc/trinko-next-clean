import { getTranslations } from 'next-intl/server'
import { CustomSectionAria } from '@/app/ui/CustomSectionAria'
import { AutoPlayOnView } from '@/app/ui/CustomVideoLoadingInView'
import { FramerMotionContainer } from '@/app/ui/FramerMotionContainer'

export const AdvantagesSection = async () => {
  const t = await getTranslations('homePage.advantagesSection')

  return (
    <CustomSectionAria aria={t('title')}>
      <div className="gri container grid-cols-1 gap-10 py-20 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <FramerMotionContainer initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
            <p className="text-4xl lg:text-6xl">{t('text')}</p>
            <h3 className="text-lg font-semibold">{t('title')}</h3>
            <p>{t('description')}</p>
          </FramerMotionContainer>
          <div className="aspect-video overflow-hidden rounded-lg">
            <AutoPlayOnView
              title="gotovaya-tatu-posle-seansa"
              src={'https://res.cloudinary.com/da3wbhyei/video/upload/v1754937202/gotovaya-tatu-posle-seansa_a8bcjg.mp4'}
            />
          </div>
          <FramerMotionContainer initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
            <p className="max-w-2xl text-left text-lg font-semibold sm:text-right">{t('extra')}</p>
          </FramerMotionContainer>
        </div>
        <div className="flex flex-col gap-6">
          <div className="aspect-video overflow-hidden rounded-lg">
            <AutoPlayOnView
              title="process-nabivki-tatu-kishinev"
              src={'https://res.cloudinary.com/da3wbhyei/video/upload/v1754937202/process-nabivki-tatu-kishinev_ghvst5.mp4'}
            />
          </div>
          <FramerMotionContainer initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
            <p>{t('more_text')}</p>
          </FramerMotionContainer>
          <div className="aspect-video overflow-hidden rounded-lg">
            <AutoPlayOnView
              title="seans-tatu-ot-nachala-do-konca"
              src={'https://res.cloudinary.com/da3wbhyei/video/upload/v1754937202/seans-tatu-ot-nachala-do-konca_hxoex5.mp4'}
            />
          </div>
        </div>
      </div>
    </CustomSectionAria>
  )
}
