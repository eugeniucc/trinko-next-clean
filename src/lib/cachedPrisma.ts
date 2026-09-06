import { ImageType } from '@/generated/prisma/client'
import prisma from '@/lib/prisma'
import { cacheLife, cacheTag } from 'next/cache'

export async function getSketchImages() {
  'use cache'

  cacheLife('hours')
  cacheTag('images')

  return prisma.image.findMany({ where: { type: ImageType.SKETCH }, orderBy: { order: 'asc' }, take: 6 })
}

export async function getPortfolioImages() {
  'use cache'

  cacheLife('hours')
  cacheTag('images')

  return prisma.image.findMany({ orderBy: { order: 'asc' }, take: 6 })
}

export async function getLatestTattooImages() {
  'use cache'

  cacheLife('hours')
  cacheTag('images')

  return prisma.image.findMany({ orderBy: { order: 'asc' }, take: 8 })
}

export async function getPermanentImages() {
  'use cache'

  cacheLife('hours')
  cacheTag('images')

  return prisma.image.findMany({ where: { type: ImageType.PERMANENT }, orderBy: { order: 'asc' }, take: 6 })
}

export async function getPaginatedImagesCached(page: number, limit: number) {
  'use cache'

  cacheLife('hours')
  cacheTag('images')

  const skip = (page - 1) * limit
  const [items, total] = await Promise.all([
    prisma.image.findMany({ orderBy: { order: 'asc' }, skip, take: limit }),
    prisma.image.count()
  ])

  return { items, total }
}

export async function getBlogPost(slug: string) {
  'use cache'

  cacheLife('days')
  cacheTag('blog-posts')

  return prisma.blogPost.findUnique({ where: { slug: slug.toLowerCase() } })
}

export async function getBlogPosts() {
  'use cache'

  cacheLife('days')
  cacheTag('blog-posts')

  return prisma.blogPost.findMany({ orderBy: { id: 'desc' }, take: 9 })
}
