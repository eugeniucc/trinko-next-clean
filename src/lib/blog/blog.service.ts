import prisma from '../prisma'
import { GetBlogPostResult } from './blog.types'

type GetBlogPostsParams = {
  page: number
  limit: number
}

export async function getBlogPosts({ page, limit }: GetBlogPostsParams): Promise<GetBlogPostResult> {
  const safePage = Number.isFinite(page) && page > 0 ? page : 1
  const safeLimit = Number.isFinite(limit) && limit > 0 ? limit : 9

  const skip = (safePage - 1) * safeLimit

  const [items, total] = await Promise.all([
    prisma.blogPost.findMany({
      orderBy: { id: 'desc' },
      skip,
      take: safeLimit,
      select: {
        id: true,
        title: true,
        slug: true,
        content: true,
        createdAt: true
      }
    }),
    prisma.blogPost.count()
  ])

  return {
    items,
    total,
    page,
    totalPages: Math.ceil(total / limit)
  }
}

export async function getBlogPostBySlug(slug: string) {
  return prisma.blogPost.findUnique({
    where: { slug: slug.toLowerCase() }
  })
}
