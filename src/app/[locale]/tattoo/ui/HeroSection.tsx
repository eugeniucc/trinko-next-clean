import { getTranslations } from 'next-intl/server'
import type { LucideIcon } from 'lucide-react'
import { Gem, PenTool, SprayCan } from 'lucide-react'
import { HeroCard, HeroCardData } from './HeroCard'

const heroCardsIcons: LucideIcon[] = [Gem, PenTool, SprayCan]

export const HeroSection = async () => {
  const t = await getTranslations('tattooPage')

  const raw = t.raw('heroSection.heroCards') as HeroCardData[]

  return (
    <section className="flex flex-col gap-10 bg-zinc-900">
      <div className="container flex min-h-screen flex-col items-center justify-center gap-10 pt-30">
        <div className="flex flex-col gap-6">
          <h1 className="text-center text-3xl font-bold text-white sm:text-4xl">{t('heroSection.title')}</h1>
          <h2 className="text-center text-2xl font-semibold text-gray-200">{t('heroSection.subtitle')}</h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {raw.map((item, i) => (
            <div key={i}>
              <HeroCard item={item} Icon={heroCardsIcons[i]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
