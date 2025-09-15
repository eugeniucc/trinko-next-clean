import { Expand } from 'lucide-react'
import Image from 'next/image'

type Props = {
  src: string
  alt: string
}

export const LatestTattooCard = (props: Props) => {
  return (
    <div className="min-h-[400px]">
      <a className="relative" href={props.src} data-pswp-width={1200} data-pswp-height={1600} aria-label={props.alt}>
        <Image className="h-full w-full rounded-md object-cover" src={props.src} width={450} priority height={400} alt={props.alt} />
        <Expand className="absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 text-white" />
      </a>
    </div>
  )
}
