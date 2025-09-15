import { list } from '@vercel/blob'
import { NextResponse } from 'next/server'

export const revalidate = 86400

export async function GET() {
  const cards = await list({ prefix: 'permanent/cards/' })
  const slider = await list({ prefix: 'permanent/slider/' })

  return NextResponse.json({
    cards: cards.blobs.filter((b) => !b.pathname.endsWith('/')).map((b) => ({ url: b.url, pathname: b.pathname })),
    slider: slider.blobs.filter((b) => !b.pathname.endsWith('/')).map((b) => ({ url: b.url, pathname: b.pathname }))
  })
}
