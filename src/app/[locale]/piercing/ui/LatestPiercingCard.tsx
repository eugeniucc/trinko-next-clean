import { Expand } from 'lucide-react'
import Image from 'next/image'

type Props = {
  src: string
  alt: string
}

export const LatestPiercingCard = (props: Props) => {
  return (
    <div className="min-h-100">
      <a className="relative block" href={props.src} data-pswp-width={1200} data-pswp-height={1600} aria-label={props.alt}>
      <Image
        className="h-full w-full rounded-md object-cover"
        src={props.src}
        width={450}
        height={650}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        alt={props.alt}
      />
        <Expand className="pointer-events-none absolute right-3 bottom-3 size-10 rounded-full bg-zinc-900/70 p-2 text-white shadow-lg backdrop-blur-sm" />
      </a>
    </div>
  )
}
