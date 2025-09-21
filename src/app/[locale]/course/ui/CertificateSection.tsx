import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { Container } from '@/components/custom/Container'
import { CustomLinkAppointment } from '@/components/custom/CustomLinkAppointment'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { FramerMotionContainer } from '@/components/custom/FramerMotionContainer'

export const CertificateSection = async () => {
  const t = await getTranslations('coursesPage.certificateSection')

  const paragraphs = t.raw('certificates.paragraphs') as string[]
  const tattooBullets = t.raw('pricing.tattooPM.bullets') as string[]
  const piercingBullets = t.raw('pricing.piercing.bullets') as string[]

  return (
    <CustomSectionAria aria={t('ariaLabel')} className="bg-zinc-900 pb-20">
      <Container>
        <FramerMotionContainer className="flex flex-col gap-6 pb-20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <h2 className="text-3xl font-bold text-white">{t('certificates.title')}</h2>
          <div className="my-4 h-px w-full bg-gray-700" />
          <div className="grid grid-cols-1 items-center gap-10 xl:grid-cols-2">
            <div className="flex flex-col gap-4 text-lg text-white">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="flex flex-col items-center gap-4 xl:flex-row">
              <Image className="xl:h-full xl:w-full" src="/logo/logo.png" alt={t('certificates.images.alt1')} width={64} height={91} />
              <Image className="xl:h-full xl:w-full" src="/logo/logo.png" alt={t('certificates.images.alt2')} width={64} height={91} />
            </div>
          </div>
        </FramerMotionContainer>

        <FramerMotionContainer className="flex flex-col" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <h2 className="text-3xl font-bold text-white">{t('pricing.title')}</h2>
          <div className="my-4 h-px w-full bg-gray-700" />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-6 rounded-lg bg-zinc-800 p-4 text-white">
              <h2 className="flex flex-1 text-2xl font-bold">{t('pricing.tattooPM.title')}</h2>
              <div className="flex flex-1 flex-col justify-between gap-6">
                <p className="text-4xl font-bold">
                  {t('pricing.tattooPM.priceLabel')}: {t('pricing.tattooPM.price')}
                </p>
                <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-red-500">
                  {tattooBullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <CustomLinkAppointment className="w-full text-center sm:w-fit" text={t('pricing.tattooPM.cta')} />
            </div>

            <div className="flex flex-col gap-6 rounded-lg bg-zinc-800 p-4 text-white">
              <h2 className="flex flex-1 text-2xl font-bold">{t('pricing.piercing.title')}</h2>
              <div className="flex flex-1 flex-col justify-between gap-6">
                <p className="text-4xl font-bold">
                  {t('pricing.piercing.priceLabel')}: {t('pricing.piercing.price')}
                </p>
                <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-red-500">
                  {piercingBullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <CustomLinkAppointment className="w-full text-center sm:w-fit" text={t('pricing.piercing.cta')} />
            </div>
          </div>
        </FramerMotionContainer>
      </Container>
    </CustomSectionAria>
  )
}
