import { Expand } from 'lucide-react'
import Image from 'next/image'

type Props = {
  src: string
  alt: string
}

export const LatestGalleryCard = (props: Props) => {
  return (
    <a className="relative block h-105 w-full overflow-hidden" href={props.src} data-pswp-width={1200} data-pswp-height={1600} aria-label={props.alt}>
      <Image
        className="rounded-md object-cover"
        src={props.src}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        alt={props.alt}
      />
      <Expand className="absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 text-white" />
    </a>
  )
}
