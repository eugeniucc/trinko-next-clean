'use client'

import { useQuery } from '@tanstack/react-query'
import { Container } from '@/components/custom/Container'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { CustomSkeletonLoader } from '@/components/custom/CustomSkeletonLoader'
import { getBlogPosts } from '@/features/blog/api/blog.api'
import { BlogCard } from './BlogCard'

export const HeroSection = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getBlogPosts({ page: 1, limit: 9 })
  })

  return (
    <CustomSectionAria aria="HeroSection" className="relative flex min-h-screen items-center justify-center bg-zinc-900 py-30 2xl:py-0">
      <Container className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {isLoading
          ? [...Array(6)].map((_, i) => <CustomSkeletonLoader className="h-[400px]" key={i} />)
          : data && data.items.map((post) => <BlogCard key={post.id} {...post} />)}
      </Container>
    </CustomSectionAria>
  )
}
