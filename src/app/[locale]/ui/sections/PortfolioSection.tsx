import { Expand } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { CustomLinkRouter } from '@/app/ui/CustomLinkRouter'
import { CustomLoading } from '@/app/ui/CustomLoading'
import { CustomSectionAria } from '@/app/ui/CustomSectionAria'
import { FramerMotionContainer } from '@/app/ui/FramerMotionContainer'

// import { getPortfolioImages } from '@/features/portfolio/api/portfolio.api'

export const PortfolioSection = async () => {
  // const portfolioImages = await getPortfolioImages({ page: 1, limit: 6 })

  const t = await getTranslations('homePage.portfolioSection')

  const Lightbox = dynamic(() => import('@/app/ui/Lightbox'), { loading: () => <CustomLoading /> })

  return (
    <CustomSectionAria aria={t('ariaLabel')} className="flex flex-col gap-10 bg-zinc-900">
      <div className="container py-20">
        <FramerMotionContainer
          className="mb-15 flex flex-col gap-10 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          duration={0.5}
        >
          <h2 className="xl:3xl text-center text-2xl wrap-break-word 2xl:text-5xl">{t('title')}</h2>
          <p className="mx-auto max-w-3xl text-center">{t('text')}</p>
        </FramerMotionContainer>
        {/* <div className="flex flex-col items-center gap-10">
          <Lightbox gallery="home-portfolio">
            <div id="home-portfolio" className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
              {portfolioImages.items.map((image) => {
                const full = `${process.env.NEXT_PUBLIC_SUPABASE_URL_S3}public/${image.url}`

                return (
                  <a
                    key={image.id}
                    className="relative"
                    href={full}
                    data-pswp-width={1200}
                    data-pswp-height={1600}
                    aria-label={`${t('linkLabel')} ${image.alt}`}
                  >
                    <Image className="h-full w-full rounded-md object-cover" src={full} width={450} height={400} alt={image.alt} unoptimized />
                    <Expand className="absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 text-white" />
                  </a>
                )
              })}
            </div>
          </Lightbox>
          <CustomLinkRouter href="/gallery" text={t('link')} />
        </div> */}
      </div>
    </CustomSectionAria>
  )
}
