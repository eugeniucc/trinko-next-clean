import { neonDb } from '../prisma-neon'
import { BlogPostResponse } from './blog.types'

type GetBlogParams = {
  page: number
  limit: number
}

export async function getBlogService({ page, limit }: GetBlogParams): Promise<BlogPostResponse> {
  const safePage = Number.isFinite(page) && page > 0 ? page : 1
  const safeLimit = Number.isFinite(limit) && limit > 0 ? limit : 9

  const skip = (safePage - 1) * safeLimit

  const [items, total] = await Promise.all([
    neonDb.blogPost.findMany({
      orderBy: { id: 'asc' },
      skip,
      take: safeLimit
    }),
    neonDb.blogPost.count()
  ])
}
