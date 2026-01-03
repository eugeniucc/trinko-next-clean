import { SquareArrowOutUpRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import { FramerMotionContainer } from '@/app/ui/FramerMotionContainer'
import { cardsImages } from './mocks/mocks'

export const OurServicesSection = async () => {
  const t = await getTranslations('homePage.ourServicesSection')

  const cardsArray = t.raw('cards') as {
    title: string
    description: string
    href: string
  }[]

  return (
    <section>
      <div className="container flex flex-col gap-20 py-20">
        <h1 className="xl:3xl wrap-break-words text-center text-2xl 2xl:text-5xl">{t('mainTitle')}</h1>
        <div className="grid grid-cols-1 bg-white md:grid-cols-2 xl:grid-cols-3">
          {cardsArray.map((card, i) => (
            <FramerMotionContainer key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
              <Link href={card.href} className="group relative -mb-px -ml-px flex flex-col items-center gap-4 border border-gray-200 p-6 text-center">
                <Image
                  src={`${cardsImages[i]}`}
                  width={80}
                  height={80}
                  alt={card.title}
                  className="h-18 w-18 duration-300 group-hover:-translate-y-1 group-hover:rotate-15"
                  unoptimized
                />
                <h2 className="text-lg font-bold">{card.title}</h2>
                <p className="min-h-10">{card.description}</p>
                <SquareArrowOutUpRight className="absolute top-4 right-4 size-4" />
              </Link>
            </FramerMotionContainer>
          ))}
        </div>
      </div>
    </section>
  )
}
