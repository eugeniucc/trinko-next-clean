import { Expand } from 'lucide-react'
import Image from 'next/image'
import { SUPABASE_S3_URL } from '@/lib/config'

type Props = {
  src: string
  alt: string
}

export const LatestPiercingCard = (props: Props) => {
  const url = `${SUPABASE_S3_URL}/${props.src}`

  return (
    <div className="min-h-100">
      <a className="relative block aspect-square" href={url} data-pswp-width={1200} data-pswp-height={1600} aria-label={props.alt}>
        <Image className="h-full w-full rounded-md object-cover" src={url} width={450} priority height={650} alt={props.alt} />
        <Expand className="absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 text-white" />
      </a>
    </div>
  )
}
