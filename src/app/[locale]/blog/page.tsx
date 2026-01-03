import { getBlogPosts } from '@/lib/blog/blog.service'
import { HeroSection } from './ui/HeroSection'

export default async function BlogPage() {
  const blog = await getBlogPosts({ page: 1, limit: 9 })

  return (
    <main className="flex flex-col">
      <HeroSection initialData={blog} />
    </main>
  )
}
