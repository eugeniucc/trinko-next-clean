import { ImageType } from '@/generated/prisma/client'
import prisma from '../prisma'
import { ImagesResponse } from './image.types'

type GetImagesParams = {
  page: number
  limit: number
  type?: ImageType
}

export async function getImagesService({ page, limit, type }: GetImagesParams): Promise<ImagesResponse> {
  const safePage = Number.isFinite(page) && page > 0 ? page : 1
  const safeLimit = Number.isFinite(limit) && limit > 0 ? limit : 9

  const skip = (safePage - 1) * safeLimit

  const where = type ? { type } : undefined

  const [items, total] = await Promise.all([
    prisma.image.findMany({
      where,
      orderBy: { id: 'asc' },
      skip,
      take: safeLimit
    }),
    prisma.image.count({
      where
    })
  ])

  return {
    items,
    total,
    page: safePage,
    totalPages: Math.ceil(total / safeLimit)
  }
}
