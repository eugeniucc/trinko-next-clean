import { Prisma } from '@/generated/prisma/client'

export type BlogPostListItem = Prisma.BlogPostGetPayload<{
  select: {
    id: true
    title: true
    slug: true
    content: true
    createdAt: true
  }
}>

export type GetBlogPostResult = {
  items: BlogPostListItem[]
  total: number
  page: number
  totalPages: number
}
