import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const revalidate = 3600

export async function GET() {
  const data = await prisma.homepageSketches.findMany({
    orderBy: {
      id: 'asc'
    }
  })
  return NextResponse.json(data)
}
