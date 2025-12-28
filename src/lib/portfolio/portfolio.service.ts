import prisma from '../prisma'
import { PortfolioImagesResponse } from './portfolio.types'

type GetPortfolioParams = {
  page: number
  limit: number
}

export async function getPortfolioService({ page, limit }: GetPortfolioParams): Promise<PortfolioImagesResponse> {
  const safePage = Number.isFinite(page) && page > 0 ? page : 1
  const safeLimit = Number.isFinite(limit) && limit > 0 ? limit : 9

  const skip = (safePage - 1) * safeLimit

  const [items, total] = await Promise.all([
    prisma.portfolio.findMany({
      orderBy: { id: 'asc' },
      skip,
      take: safeLimit
    }),
    prisma.portfolio.count()
  ])

  return {
    items: items.map((item) => ({
      id: item.id,
      title: item.title,
      url: item.url,
      alt: item.alt,
      createdAt: item.createdAt.toISOString()
    })),
    total,
    page: safePage,
    totalPages: Math.ceil(total / safeLimit)
  }
}
