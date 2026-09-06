import { Expand } from 'lucide-react'
import Image from 'next/image'

const SUPABASE_S3_URL = process.env.NEXT_PUBLIC_SUPABASE_URL_S3

type Props = {
  src: string
  alt: string
}

export const LatestTattooCard = (props: Props) => {
  const url = `${SUPABASE_S3_URL}/${props.src}`

  return (
    <a className="relative block h-125" href={url} data-gtm="tattoo-image-open" data-pswp-width={1200} data-pswp-height={1600} aria-label={props.alt}>
      <Image
        className="h-full w-full rounded-md object-cover"
        src={url}
        width={450}
        height={400}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
        fetchPriority="low"
        alt={props.alt}
      />
      <Expand className="pointer-events-none absolute right-3 bottom-3 size-10 rounded-full bg-zinc-900/70 p-2 text-white shadow-lg backdrop-blur-sm" />
    </a>
  )
}
