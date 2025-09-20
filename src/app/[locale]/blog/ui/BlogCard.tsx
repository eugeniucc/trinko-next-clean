import dayjs from 'dayjs'
import parse from 'html-react-parser'
import { Calendar } from 'lucide-react'
import Image from 'next/image'
import { CustomLinkRouter } from '@/components/custom/CustomLinkRouter'

interface Props {
  id: number
  title: string
  slug: string
  content: string
  createdAt: string
}

export const BlogCard = (props: Props) => {
  return (
    <div className="flex flex-col gap-6 rounded-md border border-gray-200 p-4">
      <Image className="mx-auto" width={64} height={91} src="/logo/logo.png" alt="Oblivion Tattoo Logo" />
      <h3 className="line-clamp-2 text-2xl font-bold break-all text-white">{props.title}</h3>
      <div className="line-clamp-6 text-white [&>a]:text-red-400 [&>a]:underline [&>a]:hover:text-red-300 [&>article]:text-white [&>blockquote]:mb-4 [&>blockquote]:border-l-4 [&>blockquote]:border-red-500 [&>blockquote]:pl-4 [&>blockquote]:text-white [&>blockquote]:italic [&>em]:text-red-400 [&>em]:italic [&>h1]:mb-4 [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:text-white [&>h2]:mb-3 [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:text-red-500 [&>h3]:mb-2 [&>h3]:text-lg [&>h3]:font-medium [&>h3]:text-red-400 [&>h4]:mb-2 [&>h4]:text-base [&>h4]:font-medium [&>h4]:text-red-300 [&>img]:mb-4 [&>img]:h-auto [&>img]:max-w-full [&>img]:rounded [&>li]:mb-1 [&>li]:text-white [&>ol]:mb-4 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:text-white [&>p]:mb-3 [&>p]:leading-relaxed [&>strong]:font-semibold [&>strong]:text-red-500 [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:text-white">
        {parse(props.content)}
      </div>
      <div className="flex items-center gap-2">
        <Calendar className="size-5 shrink-0 text-red-500" />
        <span className="text-white">{dayjs(props.createdAt).format('DD.MM.YYYY')}</span>
      </div>
      <CustomLinkRouter
        target="_blank"
        href={`/blog/${props.slug}`}
        className="w-full bg-red-500 text-center text-white hover:text-white"
        text="Читать далее"
      />
    </div>
  )
}
