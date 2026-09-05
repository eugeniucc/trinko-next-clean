import { routing } from '@/i18n/routing'
import { withSeo } from '@/lib/metadata'
import prisma from '@/lib/prisma'
import { HeroSection } from './ui/HeroSection'

export const generateMetadata = withSeo('metadata.blogPageMetadata', '/blog', [routing.defaultLocale])

export default async function BlogPage() {
  const blog = {
    items: await prisma.blogPost.findMany({ orderBy: { id: 'desc' }, take: 9 })
  }

  return (
    <main className="flex flex-col">
      <HeroSection initialData={blog} />
    </main>
  )
}
