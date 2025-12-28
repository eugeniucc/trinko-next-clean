import { getPortfolioService } from '@/lib/portfolio/portfolio.service'
import { ContactsSection } from '@/shared/ContactsSection'
import { HeroSection } from './ui/HeroSection'

interface GalleryProps {
  searchParams: {
    page?: string
  }
}

export default async function Gallery({ searchParams }: GalleryProps) {
  const params = await searchParams
  const currentPage = Math.max(1, Number(params.page ?? 1))
  const limit = 8

  const data = await getPortfolioService({ page: currentPage, limit })

  return (
    <main className="flex flex-col">
      <HeroSection initialData={data} page={currentPage} limit={limit} />
      <ContactsSection />
    </main>
  )
}
