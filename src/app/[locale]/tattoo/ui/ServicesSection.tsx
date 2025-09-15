import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/custom/Container'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { FramerMotionContainer } from '@/components/custom/FramerMotionContainer'
import { ServiceCard } from './ServiceCard'

export const ServicesSection = async () => {
  const t = await getTranslations('tattooPage.servicesSection')

  const list = t.raw('servicesCards') as {
    title: string
    text?: string
    size?: string
    price: string
    button: string
  }[]

  const usp = t.raw('usp') as string[]

  return (
    <CustomSectionAria aria="services" className="bg-zinc-900">
      <Container className="flex flex-col gap-12 py-20">
        <FramerMotionContainer initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-center text-3xl font-bold text-white">{t('title')}</h2>
            <p className="text-center text-lg text-zinc-400">{t('description')}</p>
            <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-red-500">
              {usp.map((item, i) => (
                <li key={i} className="text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FramerMotionContainer>

        <FramerMotionContainer initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {list.map((item, i) => (
              <ServiceCard key={i} {...item} />
            ))}
          </div>
        </FramerMotionContainer>
      </Container>
    </CustomSectionAria>
  )
}
