import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import { getBlogPosts } from '@/features/blog/api/blog.api'
import { buildMetadata } from '../seo/buildMetadata'
import { blogPageJsonLd } from './seo/blogPageJsonLd'
import { HeroSection } from './ui/HeroSection'

export const generateMetadata = () => {
  return buildMetadata({
    path: 'blog'
  })
}

export default async function BlogPage() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: () => getBlogPosts({ page: 1, limit: 9 })
  })

  const jsonLd = await blogPageJsonLd()

  return (
    <main className="flex flex-col">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <HeroSection />
      </HydrationBoundary>
      <script id="blog-page-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  )
}
