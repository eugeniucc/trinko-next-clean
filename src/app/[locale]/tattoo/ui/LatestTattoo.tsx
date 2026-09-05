import { getTranslations } from 'next-intl/server'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import prisma from '@/lib/prisma'
import { ContactsSection } from '@/shared/ContactsSection'
import { FramerMotionContainer } from '@/shared/FramerMotionContainer'
import { LatestTattooCard } from './LatestTattooCard'

export const LatestTattoo = async () => {
  const t = await getTranslations('tattooPage.latestTattooSection')

  const Lightbox = dynamic(() => import('@/shared/Lightbox'))

  const images = await prisma.image.findMany({ orderBy: { order: 'asc' }, take: 8 })

  return (
    <section className="bg-zinc-900">
      <div className="container flex flex-col gap-12">
        <FramerMotionContainer
          className="flex flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          duration={0.5}
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                duration={0.5}
              >
                <LatestTattooCard src={photo.url} alt={photo.alt} />
              </FramerMotionContainer>
            ))}
          </div>
        </Lightbox>
        <Link
          href="/gallery"
          className="mx-auto block w-fit rounded-md bg-white px-6 py-4 font-bold text-black transition-colors duration-200 hover:text-red-500"
        >
          {t('cta')}
        </Link>
        <ContactsSection />
      </div>
    </section>
  )
}
