import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { FramerMotionContainer } from '@/shared/FramerMotionContainer'
import Lightbox from '@/shared/Lightbox'
import { LatestPiercingCard } from './LatestPiercingCard'

export const LatestPiercingSection = async () => {
  const t = await getTranslations('piercingPage.latestPiercingSection')

  const images = [
    {
      src: '/images/piercingPage/piercing-price-1.webp',
      alt: 'Схема пирсинга уха с видами проколов и ценами'
    },
    {
      src: '/images/piercingPage/piercing-price-2.webp',
      alt: 'Схема пирсинга лица с видами проколов и ценами'
    },
    {
      src: '/images/piercingPage/piercing-price-3.webp',
      alt: 'Схема пирсинга губ с видами проколов и ценами'
    },
    {
      src: '/images/piercingPage/piercing-price-4.webp',
      alt: 'Схема других видов пирсинга с ценами'
    }
  ]

  return (
    <section className="bg-zinc-900">
      <div className="container flex flex-col gap-12 pb-20">
        <FramerMotionContainer
          className="flex flex-col items-center gap-4 text-center"
        >
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">{t('title')}</h2>
          <p className="mx-auto max-w-4xl text-center text-white">{t('description')}</p>
        </FramerMotionContainer>

        <Lightbox gallery="piercing-portfolio">
          <div id="piercing-portfolio" className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {images.map((photo, i) => (
              <FramerMotionContainer
                key={i}
                className="flex flex-col gap-12"
              >
                <LatestPiercingCard src={photo.src} alt={photo.alt} />
              </FramerMotionContainer>
            ))}
          </div>
        </Lightbox>
        <Link
          href="/contacts"
          data-gtm="piercing-contacts"
          className="mx-auto w-fit rounded-md bg-white px-6 py-4 font-bold text-black transition-colors duration-200 hover:text-red-500"
        >
          {t('contactsLink')}
        </Link>
      </div>
    </section>
  )
}
