import { NextResponse } from 'next/server'
import { supabaseDb } from '@/lib/prisma-supabase'

export const revalidate = 3600

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '9')

  const skip = (page - 1) * limit

  const [items, total] = await Promise.all([
    supabaseDb.portfolio.findMany({
      orderBy: {
        id: 'asc'
      },
      skip,
      take: limit
    }),
    supabaseDb.portfolio.count()
  ])

  return NextResponse.json(
    {
      items,
      total,
      page,
      totalPages: Math.ceil(total / limit)
    },
    {
      headers: {
        'Cache-Control': 'public, max-age=300, s-maxage=3600, stale-while-revalidate=59'
      }
    }
  )
}
