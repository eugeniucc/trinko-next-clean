import { NextResponse } from 'next/server'
import { supabaseDb } from '@/lib/prisma'

export const revalidate = 86400

export async function GET() {
  const data = await supabaseDb.homepageSketches.findMany({
    orderBy: {
      id: 'asc'
    }
  })
  return NextResponse.json(data)
}
