import { NextResponse } from 'next/server'
import { neonDb } from '@/lib/prisma-neon'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const page = Math.max(1, Number(searchParams.get('page') ?? '1'))
    const limit = Math.max(1, Number(searchParams.get('limit') ?? '1'))
    const skip = (page - 1) * limit

    const [items, total] = await Promise.all([
      neonDb.blogPost.findMany({
        orderBy: {
          id: 'asc'
        },
        skip,
        take: limit
      }),
      neonDb.blogPost.count()
    ])

    const totalPages = Math.max(1, Math.ceil(total / limit))

    return NextResponse.json({
      items,
      total,
      page,
      totalPages
    })
  } catch (error: unknown) {
    console.error('error on /api/blog', error)
  }
}
