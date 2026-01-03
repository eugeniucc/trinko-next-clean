import dayjs from 'dayjs'
import parse, { Element } from 'html-react-parser'
import { Calendar } from 'lucide-react'
import Image from 'next/image'
import { CustomLinkRouter } from '@/app/ui/CustomLinkRouter'
import { BlogPostListItem } from '@/lib/blog/blog.types'

interface Props {
  item: BlogPostListItem
}

export const BlogCard = ({ item }: Props) => {
  const contentWithoutH1 = parse(item.content, {
    replace(domNode) {
      if (domNode instanceof Element && domNode.name === 'h1') {
        return <></>
      }
    }
  })

  return (
    <div className="flex flex-col gap-6 rounded-md border border-gray-200 p-4">
      <Image className="mx-auto" width={64} height={91} src="/logo.svg" alt="Oblivion Tattoo Logo" unoptimized />
      <h3 className="line-clamp-2 text-2xl font-bold text-white">{item.title}</h3>

      <div className="line-clamp-6 text-white">{contentWithoutH1}</div>

      <div className="flex items-center gap-2">
        <Calendar className="size-5 shrink-0 text-red-500" />
        <span className="text-white">{dayjs(item.createdAt).format('DD.MM.YYYY')}</span>
      </div>

      <CustomLinkRouter
        target="_blank"
        href={`/blog/${item.slug}`}
        className="w-full bg-red-500 text-center text-white hover:text-white"
        text="Читать далее"
      />
    </div>
  )
}
