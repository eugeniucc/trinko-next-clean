import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/custom/Container'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { AutoPlayOnView } from '@/components/custom/CustomVideoLoadingInView'
import { FramerMotionContainer } from '@/components/custom/FramerMotionContainer'

export const AdvantagesSection = async () => {
  const t = await getTranslations('homePage.advantagesSection')

  return (
    <CustomSectionAria aria={t('title')}>
      <Container className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <FramerMotionContainer initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
            <p className="text-4xl lg:text-6xl">{t('text')}</p>
            <h3 className="text-lg font-semibold">{t('title')}</h3>
            <p>{t('description')}</p>
          </FramerMotionContainer>
          <div className="aspect-video overflow-hidden rounded-lg">
            <AutoPlayOnView
              title="gotovaya-tatu-posle-seansa"
              src={`${process.env.NEXT_PUBLIC_SUPABASE_URL_S3}public/homepage-videos/gotovaya-tatu-posle-seansa.mp4`}
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
              src={`${process.env.NEXT_PUBLIC_SUPABASE_URL_S3}public/homepage-videos/process-nabivki-tatu-kishinev.mp4`}
            />
          </div>
          <FramerMotionContainer initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
            <p>{t('more_text')}</p>
          </FramerMotionContainer>
          <div className="aspect-video overflow-hidden rounded-lg">
            <AutoPlayOnView
              title="seans-tatu-ot-nachala-do-konca"
              src={`${process.env.NEXT_PUBLIC_SUPABASE_URL_S3}public/homepage-videos/seans-tatu-ot-nachala-do-konca.mp4`}
            />
          </div>
        </div>
      </Container>
    </CustomSectionAria>
  )
}
