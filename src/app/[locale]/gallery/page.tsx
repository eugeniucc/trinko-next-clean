import { getTranslations } from 'next-intl/server'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { withSeo } from '@/lib/metadata'
import { ContactsSection } from '@/shared/ContactsSection'
import { GalleryGrid, GalleryProps } from './ui/GalleryGrid'

export const generateMetadata = withSeo('metadata.galleryPageMetadata', '/gallery')

export default async function Gallery({ searchParams }: GalleryProps) {
  const t = await getTranslations('galleryPage')

  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative flex min-h-screen items-center justify-center bg-zinc-900 py-30">
        <div className="container flex flex-col gap-10">
          <div className="flex flex-col gap-6 text-center text-white">
            <h1 className="text-3xl font-bold text-white sm:text-4xl">{t('title')}</h1>
            <h2 className="text-xl text-gray-200">{t('subtitle')}</h2>
            <p className="mx-auto max-w-5xl text-xl text-gray-200">{t('text')}</p>
          </div>

          <NuqsAdapter>
            <Suspense
              fallback={
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4" aria-hidden="true">
                  {[...Array(8)].map((_, index) => (
                    <Skeleton className="h-105 w-full bg-zinc-800" key={index} />
                  ))}
                </div>
              }
            >
              <GalleryGrid searchParams={searchParams} />
            </Suspense>
          </NuqsAdapter>
        </div>
      </section>
      <ContactsSection />
    </main>
  )
}
