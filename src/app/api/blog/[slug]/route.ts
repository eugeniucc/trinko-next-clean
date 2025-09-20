import { NextResponse } from 'next/server'
import { neonDb } from '@/lib/prisma-neon'

export const revalidate = 86400

export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params
    const post = await neonDb.blogPost.findUnique({ where: { slug: slug } })

    if (!post) {
      return NextResponse.json(
        {
          message: 'Post not found'
        },
        {
          status: 404
        }
      )
    }

    return NextResponse.json(post)
  } catch (error: unknown) {
    console.log('erorr on /api/blog/[slug]', error)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
