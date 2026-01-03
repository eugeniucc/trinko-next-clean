import { Prisma } from '@/generated/prisma/client'

export type SingleImage = Prisma.ImageGetPayload<{
  select: {
    id: true
    title: true
    url: true
    alt: true
    type: true
    createdAt: true
  }
}>

export type ImagesResponse = {
  items: SingleImage[]
  total: number
  page: number
  totalPages: number
}
