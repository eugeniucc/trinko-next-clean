import { list } from '@vercel/blob'
import { NextResponse } from 'next/server'

export const revalidate = 86400

export async function GET() {
  const cards = await list({ prefix: 'tattoo' })

  return NextResponse.json({
    cards: cards.blobs.filter((b) => !b.pathname.endsWith('/')).map((b) => ({ url: b.url, pathname: b.pathname }))
  })
}
