import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import Script from 'next/script'
import { getPortfolioImages } from '@/features/portfolio-images/api/portfolio-images.api'
import { ContactsSection } from '@/shared/ContactsSection'
import { buildMetadata } from '../seo/buildMetadata'
import { galleryJsonLd } from './seo/galleryJsonLd'
import { HeroSection } from './ui/HeroSection'

interface Search {
  page?: string
}

export async function generateMetadata() {
  return buildMetadata({
    path: 'gallery'
  })
}

export default async function Gallery({ searchParams }: { searchParams: Promise<Search> }) {
  const rawParams = await searchParams
  const raw = Number(rawParams?.page ?? 1)
  const page = raw
  const limit = 8

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['portfolio', page, limit],
    queryFn: () => getPortfolioImages({ page, limit })
  })

  const jsonLd = await galleryJsonLd()

  return (
    <main className="flex flex-col">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <HeroSection initialPage={page} limit={limit} />
      </HydrationBoundary>
      <ContactsSection />
      <Script
        id="gallery-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  )
}
