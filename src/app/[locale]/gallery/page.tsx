import { getImagesService } from '@/lib/image/image.service'
import { ContactsSection } from '@/shared/ContactsSection'
import { withSeo } from '../seo/withSeo'
import { HeroSection } from './ui/HeroSection'

export const generateMetadata = withSeo('metadata.galleryPageMetadata', '/gallery')

interface GalleryProps {
  searchParams: Promise<{
    page?: string
  }>
}

export default async function Gallery({ searchParams }: GalleryProps) {
  const params = await searchParams
  const currentPage = Math.max(1, Number(params.page ?? 1))
  const limit = 8

  const data = await getImagesService({ page: currentPage, limit })

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection initialData={data} page={currentPage} limit={limit} />
      <ContactsSection />
    </main>
  )
}
