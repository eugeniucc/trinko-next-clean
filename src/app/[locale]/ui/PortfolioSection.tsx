import { Expand } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import { getPortfolioImages } from '@/lib/cachedPrisma'
import { FramerMotionContainer } from '@/shared/FramerMotionContainer'
import Lightbox from '@/shared/Lightbox'

const SUPABASE_S3_URL = process.env.NEXT_PUBLIC_SUPABASE_URL_S3

export const PortfolioSection = async () => {
  const images = await getPortfolioImages()

  const t = await getTranslations('homePage.portfolioSection')


  return (
    <section className="flex flex-col gap-10 bg-zinc-900">
      <div className="container py-20">
        <FramerMotionContainer
          className="mb-15 flex flex-col gap-10 text-white"
        >
          <h2 className="xl:3xl text-center text-2xl wrap-break-word 2xl:text-5xl">{t('title')}</h2>
          <p className="mx-auto max-w-3xl text-center">{t('text')}</p>
        </FramerMotionContainer>
        <div className="flex flex-col items-center gap-10">
          <Lightbox gallery="home-portfolio">
            <div id="home-portfolio" className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
              {images.map((image) => {
                const full = `${SUPABASE_S3_URL}/${image.url}`

                return (
                  <a
                    key={image.id}
                    className="relative"
                    href={full}
                    data-gtm="portfolio-image-open"
                    data-pswp-width={1200}
                    data-pswp-height={1600}
                    aria-label={`${t('linkLabel')} ${image.alt}`}
                  >
                    <Image
                      className="h-full w-full rounded-md object-cover"
                      src={full}
                      width={450}
                      height={400}
                      sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                      alt={image.alt}
                    />
                    <Expand className="pointer-events-none absolute right-3 bottom-3 size-10 rounded-full bg-zinc-900/70 p-2 text-white shadow-lg backdrop-blur-sm" />
                  </a>
                )
              })}
            </div>
          </Lightbox>
          <Link
            href="/gallery"
            data-gtm="portfolio-view-gallery"
            className="w-fit rounded-md bg-white px-6 py-4 font-bold text-black transition-colors duration-200 hover:text-red-500"
          >
            {t('link')}
          </Link>
        </div>
      </div>
    </section>
  )
}
