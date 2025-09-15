import { getTranslations } from 'next-intl/server'
import dynamic from 'next/dynamic'
import { Container } from '@/components/custom/Container'
import { CustomLinkRouter } from '@/components/custom/CustomLinkRouter'
import { CustomLoading } from '@/components/custom/CustomLoading'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { FramerMotionContainer } from '@/components/custom/FramerMotionContainer'
import { getTattooPagePhotos } from '@/features/tattoopage-photo/api/tattoopage-photo.api'
import { ContactsSection } from '@/shared/ContactsSection'
import { LatestTattooCard } from './LatestTattooCard'

const Lightbox = dynamic(() => import('@/components/custom/Lightbox'), { loading: () => <CustomLoading /> })

export const LatestTattoo = async () => {
  const photos = await getTattooPagePhotos()

  const t = await getTranslations('tattooPage.latestTattooSection')

  return (
    <CustomSectionAria aria={t('ariaLabel')} className="bg-zinc-900">
      <Container className="flex flex-col gap-12">
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
            {photos.cards.map((photo, i) => (
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
      </Container>
    </CustomSectionAria>
  )
}
