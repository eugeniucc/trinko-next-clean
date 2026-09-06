import prisma from '@/lib/prisma'
import { getPaginatedImagesCached } from '@/lib/cachedPrisma'

const DEFAULT_PAGE_LIMIT = 10

type PaginatedImages = {
  items: Awaited<ReturnType<typeof prisma.image.findMany>>
  totalPages: number
  page: number
  limit: number
}

export async function getPaginatedImages(pageParam?: string, limit = DEFAULT_PAGE_LIMIT): Promise<PaginatedImages> {
  const page = Math.max(1, Number(pageParam ?? 1) || 1)
  const safeLimit = Math.max(1, limit)
  const skip = (page - 1) * safeLimit

  const { items, total } = await getPaginatedImagesCached(page, safeLimit)

  return {
    items,
    totalPages: Math.ceil(total / safeLimit),
    page,
    limit: safeLimit
  }
}
