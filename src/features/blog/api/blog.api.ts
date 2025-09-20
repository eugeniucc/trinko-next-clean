import { buildSearchParams } from '@/features/helpers/buildSearchParams'
import { BlogPost, BlogPostResponse } from '../ts/blog.types'

type Props = {
  page: number
  limit?: number
}

export const getBlogPosts = async ({ page, limit }: Props): Promise<BlogPostResponse> => {
  const queryString = buildSearchParams({ page, limit })

  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/blog${queryString}`)
  return res.json()
}

export const getBlogSinglePost = async (slug: string): Promise<BlogPost> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/blog/${slug}`)
  return res.json()
}
