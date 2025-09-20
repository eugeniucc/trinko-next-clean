import { LucideIcon } from 'lucide-react'
import Image from 'next/image'
import { CustomLinkAppointment } from '@/components/custom/CustomLinkAppointment'
import { SinglePhoto } from '@/features/permanentpage-photo/types/permanentpage-photo.types'
import { HeroCardProps } from '../types/tattoo.types'

type Props = {
  item: HeroCardProps
  Icon: LucideIcon
  img?: SinglePhoto
}
export const HeroCard = ({ item, img, Icon }: Props) => {
  return (
    <div className="flex h-full flex-col">
      <div className="h-48 overflow-hidden rounded-t-lg">
        <Image
          className="h-auto w-full object-cover object-center"
          src={img?.url ?? '/images/homePage/about-section/tatu-2-lastochki-na-pleche-kishinev.webp'}
          alt={img?.pathname ?? 'tattoo-1'}
          width={400}
          height={192}
          priority
          unoptimized
        />
      </div>
      <div className="flex h-full flex-col justify-between gap-6 rounded-b-lg bg-zinc-800 p-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-full bg-red-500 p-2">
            <Icon className="size-8 shrink-0 text-white" strokeWidth={2} />
          </div>
          <h2 className="text-xl font-semibold text-white">{item.title}</h2>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <p className="text-gray-400">{item.text}</p>
          <ul className="flex list-disc flex-col gap-1 pl-5 text-gray-400 marker:text-gray-300">
            {item.list.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        </div>
        <CustomLinkAppointment className="w-full bg-red-500 text-center text-white hover:text-white" text={item.button} />
      </div>
    </div>
  )
}
