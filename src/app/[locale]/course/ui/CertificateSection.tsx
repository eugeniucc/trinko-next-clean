import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { CONTACT_TELEGRAM } from '@/lib/contactLinks'
import { FramerMotionContainer } from '@/shared/FramerMotionContainer'

export const CertificateSection = async () => {
  const t = await getTranslations('coursesPage.certificateSection')

  const paragraphs = t.raw('certificates.paragraphs') as string[]
  const tattooBullets = t.raw('pricing.tattooPM.bullets') as string[]
  const piercingBullets = t.raw('pricing.piercing.bullets') as string[]

  return (
    <section className="bg-zinc-900 pb-20">
      <div className="container">
        <FramerMotionContainer className="flex flex-col gap-6 pb-20">
          <h2 className="text-3xl font-bold text-white">{t('certificates.title')}</h2>
          <div className="my-4 h-px w-full bg-gray-700" />
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 text-lg text-white">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="flex flex-col items-center gap-4 xl:flex-row">
              <Image
                className="h-auto w-full min-w-0 rounded-lg object-cover xl:w-1/2"
                src="/images/coursePage/course-1.webp"
                alt="студент с сертификатами в руках прошел курс в тату-студии Oblivion Tattoo"
                width={600}
                height={400}
                sizes="(max-width: 1280px) 100vw, 50vw"
                loading="lazy"
              />
              <Image
                className="h-auto w-full min-w-0 rounded-lg object-cover xl:w-1/2"
                src="/images/coursePage/course-2.webp"
                alt="студент с сертификатами в руках прошел курс в тату-студии Oblivion Tattoo"
                width={600}
                height={400}
                sizes="(max-width: 1280px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </FramerMotionContainer>

        <FramerMotionContainer className="flex flex-col">
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
              <a
                href={CONTACT_TELEGRAM}
                data-gtm="telegram"
                data-gtm-course="tattoo-permanent"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-md bg-white px-6 py-4 text-center font-bold text-black transition-colors duration-200 hover:text-red-500 sm:w-fit"
              >
                {t('pricing.tattooPM.cta')}
              </a>
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
              <a
                href={CONTACT_TELEGRAM}
                data-gtm="telegram"
                data-gtm-course="piercing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-md bg-white px-6 py-4 text-center font-bold text-black transition-colors duration-200 hover:text-red-500 sm:w-fit"
              >
                {t('pricing.piercing.cta')}
              </a>
            </div>
          </div>
        </FramerMotionContainer>
      </div>
    </section>
  )
}
