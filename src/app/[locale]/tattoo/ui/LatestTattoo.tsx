import { getLocale, getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { getPathname } from '@/i18n/navigation'
import { getLatestTattooImages } from '@/lib/cachedPrisma'
import { ContactsSection } from '@/shared/ContactsSection'
import { FramerMotionContainer } from '@/shared/FramerMotionContainer'
import Lightbox from '@/shared/Lightbox'
import { Skeleton } from '@/components/ui/skeleton'
import { LatestTattooCard } from './LatestTattooCard'

export const LatestTattoo = async () => {
  const locale = await getLocale()
  const t = await getTranslations('tattooPage.latestTattooSection')

  const images = await getLatestTattooImages()

  return (
    <section className="bg-zinc-900">
      <div className="container flex flex-col gap-12">
        <FramerMotionContainer
          className="flex flex-col items-center gap-4 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t('title')}</h2>
          <p className="max-w-3xl text-zinc-300">{t('description')}</p>
        </FramerMotionContainer>
        <Lightbox gallery="home-portfolio">
          <div id="home-portfolio" className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {images.map((photo) => (
              <FramerMotionContainer
                key={photo.id}
                className="flex flex-col gap-12"
              >
                <LatestTattooCard src={photo.url} alt={photo.alt} />
              </FramerMotionContainer>
            ))}
          </div>
        </Lightbox>
        <Link
          href={getPathname({ locale, href: '/gallery' })}
          data-gtm="tattoo-view-gallery"
          className="mx-auto block w-fit rounded-md bg-white px-6 py-4 font-bold text-black transition-colors duration-200 hover:text-red-500"
        >
          {t('cta')}
        </Link>
        <ContactsSection />
      </div>
    </section>
  )
}

export const LatestTattooFallback = () => (
  <section className="bg-zinc-900" aria-hidden="true">
    <div className="container flex flex-col gap-12">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4">
        <Skeleton className="h-10 w-72 bg-zinc-800" />
        <Skeleton className="h-5 w-full max-w-xl bg-zinc-800" />
      </div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {[...Array(8)].map((_, i) => <Skeleton className="h-125 w-full bg-zinc-800" key={i} />)}
      </div>
    </div>
  </section>
)
