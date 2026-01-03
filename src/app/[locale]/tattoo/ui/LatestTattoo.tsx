import { getTranslations } from 'next-intl/server'
import dynamic from 'next/dynamic'
import { CustomLinkRouter } from '@/app/ui/CustomLinkRouter'
import { CustomLoading } from '@/app/ui/CustomLoading'
import { FramerMotionContainer } from '@/app/ui/FramerMotionContainer'
import { getImagesService } from '@/lib/image/image.service'
import { ContactsSection } from '@/shared/ContactsSection'
import { LatestTattooCard } from './LatestTattooCard'

export const LatestTattoo = async () => {
  const t = await getTranslations('tattooPage.latestTattooSection')

  const Lightbox = dynamic(() => import('@/app/ui/Lightbox'), {
    loading: () => <CustomLoading />
  })

  const images = await getImagesService({
    page: 1,
    limit: 8
  })

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
          <div id="home-portfolio" className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {images.items.map((photo, i) => (
              <FramerMotionContainer
                key={i}
                className="flex flex-col gap-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                duration={0.5}
              >
                <LatestTattooCard src={photo.url} alt={photo.url} />
              </FramerMotionContainer>
            ))}
          </div>
        </Lightbox>
        <CustomLinkRouter href="/gallery" className="mx-auto block w-fit" text={t('cta')} />
        <ContactsSection />
      </div>
    </section>
  )
}
