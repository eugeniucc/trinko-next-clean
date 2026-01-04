import { getBlogPosts } from '@/lib/blog/blog.service'
import { withSeo } from '../seo/withSeo'
import { buildBlogJsonLd } from './seo/blog-json'
import { HeroSection } from './ui/HeroSection'

export const generateMetadata = withSeo('metadata.blogPageMetadata', '/blog')

export default async function BlogPage() {
  const blog = await getBlogPosts({ page: 1, limit: 9 })

  return (
    <main className="flex flex-col">
      <HeroSection initialData={blog} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBlogJsonLd())
        }}
      />
    </main>
  )
}
