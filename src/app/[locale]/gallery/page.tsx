import { withSeo } from '@/lib/metadata'
import prisma from '@/lib/prisma'
import { ContactsSection } from '@/shared/ContactsSection'
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

  const skip = (currentPage - 1) * limit
  const [items, total] = await Promise.all([prisma.image.findMany({ orderBy: { order: 'asc' }, skip, take: limit }), prisma.image.count()])
  const data = { items, totalPages: Math.ceil(total / limit) }

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection initialData={data} page={currentPage} limit={limit} />
      <ContactsSection />
    </main>
  )
}
