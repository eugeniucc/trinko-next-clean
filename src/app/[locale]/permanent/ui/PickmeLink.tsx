import { cn } from '@/lib/utils'

type Props = {
  text: string
  className?: string
}

export const PickmeLink = ({ ...props }: Props) => {
  return (
    <a
      href="https://t.me/TrinkoTattoo"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'mx-auto w-fit rounded-full bg-linear-to-r from-rose-500 to-pink-500 px-4 py-3 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-rose-500/25 sm:px-8',
        props.className
      )}
    >
      {props.text}
    </a>
  )
}
