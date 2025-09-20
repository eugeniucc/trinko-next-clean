import Link from 'next/link'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
  href: string
  children?: ReactNode
  text: string
  target?: string
}

export const CustomLinkRouter = ({ ...props }: Props) => {
  return (
    <Link
      target={props.target}
      className={cn('w-fit rounded-md bg-white px-6 py-4 font-bold text-black transition-colors duration-200 hover:text-red-500', props.className)}
      href={props.href}
    >
      {props.text}
    </Link>
  )
}
