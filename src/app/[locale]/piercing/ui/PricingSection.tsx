import { Calendar, Star } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/custom/Container'
import { CustomLinkAppointment } from '@/components/custom/CustomLinkAppointment'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { FramerMotionContainer } from '@/components/custom/FramerMotionContainer'

type Service = { name: string; price: number; hasBase?: boolean }
type Category = { title: string; icon: string; services: Service[] }

export const PricingSection = async () => {
  const t = await getTranslations('piercingPage.pricingSection')

  const pricingCategories = t.raw('categories') as Category[]
  const includes = t.raw('includes') as string[]

  return (
    <CustomSectionAria aria={t('ariaLabel')} className="relative bg-zinc-900">
      <Container className="flex flex-col gap-10 sm:gap-15">
        <FramerMotionContainer className="space-y-6 text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} duration={0.6}>
          <h2 className="text-4xl font-bold text-white">{t('title')}</h2>
          <p className="mx-auto max-w-3xl text-xl text-white">{t('description')}</p>

          <div className="flex items-center justify-center space-x-6 text-sm text-white">
            <div className="flex items-center gap-2">
              <Star className="size-4 text-yellow-500" />
              {t('badges.quality')}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-4 text-red-500" />
              {t('badges.onlineBooking')}
            </div>
          </div>
        </FramerMotionContainer>

        <div className="flex flex-col gap-10">
          {pricingCategories.map((category, categoryIndex) => (
            <FramerMotionContainer
              key={categoryIndex}
              className="rounded-xl bg-zinc-800 p-4 sm:p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              duration={0.6}
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="rounded-lg bg-zinc-700">
                {category.services.map((service, i) => (
                  <div
                    key={`${service.name}-${i}`}
                    className={`flex flex-col items-center justify-between gap-6 p-4 sm:flex-row sm:gap-0 ${i !== category.services.length - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <div className="flex-1">
                      <h4 className="text-center text-lg font-semibold text-white sm:text-left">{service.name}</h4>
                      {service.hasBase && <p className="mt-1 text-sm text-white">{t('labels.includesBaseJewelry')}</p>}
                    </div>

                    <div className="flex w-full flex-col items-center gap-6 sm:w-fit sm:flex-row">
                      <div className="flex items-center gap-2 text-right">
                        <span className="text-2xl font-bold text-red-600">{service.price}</span>
                        <span className="text-white">{t('labels.currency')}</span>
                      </div>

                      <CustomLinkAppointment className="w-full text-center sm:w-fit" text={t('buttons.book')} />
                    </div>
                  </div>
                ))}
              </div>
            </FramerMotionContainer>
          ))}
        </div>

        <FramerMotionContainer
          className="flex flex-col gap-6 rounded-xl bg-zinc-800 p-4 text-center text-white sm:p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          duration={0.6}
        >
          <h3 className="text-2xl font-bold">{t('includesTitle')}</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {includes.map((item, i) => (
              <div className="flex items-center justify-center gap-2" key={i}>
                <div className="rounded-full bg-red-500 p-1"></div>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <p className="text-white">{t('includesNote')}</p>
        </FramerMotionContainer>
      </Container>
    </CustomSectionAria>
  )
}
