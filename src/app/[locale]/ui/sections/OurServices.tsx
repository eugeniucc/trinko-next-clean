import { SquareArrowOutUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/custom/Container'
import { FramerMotionContainer } from '@/components/custom/FramerMotionContainer'

export const OurServices = () => {
  const t = useTranslations('homePage.ourServicesSection')

  const cardsArray = t.raw('cards') as {
    title: string
    description: string
  }[]

  const cardsImages = [
    '/images/home/sections/services/icon-01-80x80.webp',
    '/images/home/sections/services/icon-02-80x80.webp',
    '/images/home/sections/services/icon-03-80x80.webp',
    '/images/home/sections/services/icon-04-80x80.webp',
    '/images/home/sections/services/icon-05-80x80.webp',
    '/images/home/sections/services/icon-06-80x80.webp'
  ]

  return (
    <Container className="grid grid-cols-1 bg-white py-20 md:grid-cols-2 xl:grid-cols-3">
      {cardsArray.map((card, i) => (
        <FramerMotionContainer initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5} key={i}>
          <Link href={`services`} className="relative -mb-[1px] -ml-[1px] flex flex-col items-center gap-4 border border-gray-200 p-6 text-center">
            <Image src={cardsImages[i]} width={80} height={80} alt={'Тату атрибуты'} className="h-18 w-18" />
            <h2 className="text-lg font-bold">{card.title}</h2>
            <p>{card.description}</p>
            <SquareArrowOutUpRight className="absolute top-4 right-4 size-4" />
          </Link>
        </FramerMotionContainer>
      ))}
    </Container>
  )
}
