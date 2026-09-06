import dayjs from 'dayjs'
import parse, { Element } from 'html-react-parser'
import { Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getBlogPosts } from '@/lib/cachedPrisma'

export async function BlogPosts() {
  const posts = await getBlogPosts()

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => {
        const contentWithoutH1 = parse(post.content, {
          replace(domNode) {
            if (domNode instanceof Element && domNode.name === 'h1') {
              return <></>
            }
          }
        })

        return (
          <article key={post.id} className="flex flex-col gap-6 rounded-md border border-gray-200 p-4">
            <Image className="mx-auto" width={64} height={91} src="/logo.svg" alt="Logo Oblivion Tattoo" unoptimized />
            <h3 className="line-clamp-2 text-2xl font-bold text-white">{post.title}</h3>
            <div className="line-clamp-6 text-white">{contentWithoutH1}</div>
            <div className="flex items-center gap-2">
              <Calendar className="size-5 shrink-0 text-red-500" />
              <span className="text-white">{dayjs(post.createdAt).format('DD.MM.YYYY')}</span>
            </div>
            <Link target="_blank" href={`/blog/${post.slug}`} data-gtm="blog-read-more" className="w-full rounded-md bg-red-500 px-6 py-3 text-center font-bold text-white hover:text-white">
              Читать далее
            </Link>
          </article>
        )
      })}
    </div>
  )
}
