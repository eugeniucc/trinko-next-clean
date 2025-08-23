import Image from 'next/image'
import { PermanentCardProps } from '../types/permanent.types'
import { PickmeLink } from './PickmeLink'

type Props = {
  item: PermanentCardProps
}

export const ProductCard = ({ item }: Props) => {
  return (
    <div className="flex w-full items-center justify-center bg-zinc-900">
      <article className="group overflow-hidden rounded-2xl bg-gradient-to-br from-rose-500/20 via-rose-500/10 to-transparent backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-rose-500/20">
        <div className="relative aspect-[4/3] overflow-x-hidden">
          <Image
            src={'/images/permanentPage/permanent-tattoo-kishynev.webp'}
            alt="Placeholder"
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center rounded-full bg-black/30 px-3 py-1 font-medium text-white backdrop-blur-sm">
              ✨ {item.badge}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-4 sm:p-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-white transition-colors group-hover:text-rose-100">{item.title}</h3>
            <p className="text-sm leading-relaxed text-zinc-300">{item.text}</p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white">{item.subtitle}</h4>
            <ul className="flex flex-col gap-1">
              {item.list.map((text, i) => (
                <li key={i} className="flex items-start gap-2 text-zinc-400">
                  <span className="mt-0.5 flex-shrink-0 text-rose-300">•</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 items-center gap-3">
            <div className="space-y-1">
              <span className="block text-zinc-500">{item.priceTitle}</span>
              <span className="text-lg font-bold text-rose-300">{item.price}</span>
            </div>
            <div className="space-y-1">
              <span className="block text-zinc-500">{item.timeTitle}</span>
              <span className="block font-medium text-white">{item.time}</span>
            </div>
            <div className="col-span-2 space-y-1">
              <span className="block text-zinc-500">{item.healTitle}</span>
              <span className="block font-medium text-zinc-300">{item.heal}</span>
            </div>
          </div>

          <PickmeLink className="w-full px-2 text-center sm:px-4" text={item.button} />
        </div>
      </article>
    </div>
  )
}
