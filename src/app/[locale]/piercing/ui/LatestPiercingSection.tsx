import { getTranslations } from 'next-intl/server'
import dynamic from 'next/dynamic'
import { CustomLoading } from '@/app/ui/CustomLoading'
import { CustomSectionAria } from '@/app/ui/CustomSectionAria'
import { FramerMotionContainer } from '@/app/ui/FramerMotionContainer'
import { LatestPiercingCard } from './LatestPiercingCard'

const Lightbox = dynamic(() => import('@/app/ui/Lightbox'), {
  loading: () => <CustomLoading />
})

export const LatestPiercingSection = async () => {
  const t = await getTranslations('piercingPage.latestPiercingSection')

  const photos = [
    {
      url: '/piercing.webp',
      alt: '/piercing.webp'
    },
    {
      url: '/piercing.webp',
      alt: '/piercing.webp'
    },
    {
      url: '/piercing.webp',
      alt: '/piercing.webp'
    },
    {
      url: '/piercing.webp',
      alt: '/piercing.webp'
    }
  ]

  return (
    <CustomSectionAria aria={t('ariaLabel')} className="bg-zinc-900">
      <div className="container flex flex-col gap-12 pb-20">
        <FramerMotionContainer
          className="flex flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          duration={0.5}
        >
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">{t('title')}</h2>
          <p className="mx-auto max-w-4xl text-center text-white">{t('description')}</p>
        </FramerMotionContainer>

        <Lightbox gallery="piercing-portfolio">
          <div id="piercing-portfolio" className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {photos.map((photo, i) => (
              <FramerMotionContainer
                key={i}
                className="flex flex-col gap-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                duration={0.5}
              >
                <LatestPiercingCard src={photo.url} alt={photo.url} />
              </FramerMotionContainer>
            ))}
          </div>
        </Lightbox>
      </div>
    </CustomSectionAria>
  )
}
