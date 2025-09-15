import { ArrowRight, Calendar, Star } from 'lucide-react'
import { Container } from '@/components/custom/Container'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { FramerMotionContainer } from '@/components/custom/FramerMotionContainer'

export const PricingSection = () => {
  const pricingCategories = [
    {
      title: 'Пирсинг ушей',
      icon: '👂',
      services: [
        { name: 'Мочка (Lobe)', price: 100 },
        { name: 'Верхний хрящ (Helix)', price: 150 },
        { name: 'Forward Helix', price: 150 },
        { name: 'Tragus', price: 150 },
        { name: 'Anti-Tragus', price: 150 },
        { name: 'Conch', price: 150 },
        { name: 'Daith', price: 150 },
        { name: 'Rook', price: 150 },
        { name: 'Snug', price: 150 },
        { name: 'Орбитал (2 прокола)', price: 300 },
        { name: 'Industrial (2 прокола)', price: 350 }
      ]
    },
    {
      title: 'Пирсинг лица',
      icon: '👃',
      services: [
        { name: 'Бровь', price: 250 },
        { name: 'Нос крыло (nostril)', price: 150 },
        { name: 'Septum', price: 250 },
        { name: 'Bridge (переносица)', price: 350 }
      ]
    },
    {
      title: 'Пирсинг губ',
      icon: '👄',
      services: [
        { name: 'Лабрет (1 прокол)', price: 150 },
        { name: 'Monroe / Madonna', price: 150 },
        { name: 'Medusa (philtrum)', price: 150 },
        { name: 'Snake bites (2 прокола)', price: 300 },
        { name: 'Spider bites (2 прокола)', price: 300 },
        { name: 'Angel bites (2 прокола)', price: 300 },
        { name: 'Dolphin bites (2 прокола)', price: 300 },
        { name: 'Cyber bites (верх+низ)', price: 300 },
        { name: 'Shark bites (4 прокола)', price: 600 }
      ]
    },
    {
      title: 'Другие виды пирсинга',
      icon: '✨',
      services: [
        { name: 'Язык', price: 250 },
        { name: 'Пупок', price: 300 }
      ]
    }
  ]

  return (
    <CustomSectionAria aria="PricingSection" className="relative bg-white py-20">
      <Container className="space-y-12">
        <FramerMotionContainer className="space-y-6 text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} duration={0.6}>
          <h2 className="text-4xl font-bold text-gray-900">Цены на пирсинг в Кишиневе</h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Прозрачные цены, качественные материалы и профессиональная работа. В стоимость входит прокол и базовое украшение из хирургической стали.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Star className="mr-2 h-4 w-4 text-yellow-500" />
              Гарантия качества
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 text-red-500" />
              Запись онлайн
            </div>
          </div>
        </FramerMotionContainer>

        <div className="grid gap-8">
          {pricingCategories.map((category, categoryIndex) => (
            <FramerMotionContainer
              key={categoryIndex}
              className="rounded-xl bg-gray-50 p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              duration={0.6}
            >
              <div className="mb-6 flex items-center space-x-3">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="overflow-hidden rounded-lg bg-white shadow-sm">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className={`flex items-center justify-between p-4 transition-colors duration-200 hover:bg-gray-50 ${
                      serviceIndex !== category.services.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                  >
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900">{service.name}</h4>
                      {service.name.includes('прокол') && <p className="mt-1 text-sm text-gray-500">Включает базовое украшение</p>}
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <span className="text-2xl font-bold text-red-600">{service.price}</span>
                        <span className="ml-1 text-gray-500">лей</span>
                      </div>

                      <button className="group flex items-center space-x-2 rounded-lg bg-red-500 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-red-600">
                        <span>Записаться</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </FramerMotionContainer>
          ))}
        </div>

        {/* Дополнительная информация */}
        <FramerMotionContainer
          className="space-y-4 rounded-xl bg-gradient-to-r from-red-500 to-red-600 p-8 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          duration={0.6}
        >
          <h3 className="text-2xl font-bold">Что входит в стоимость пирсинга?</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-4">
            {['Консультация мастера', 'Стерильные инструменты', 'Базовое украшение', 'Инструкции по уходу'].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-white"></div>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-red-100">* Premium украшения из титана, золота и с камнями оплачиваются отдельно</p>
        </FramerMotionContainer>

        {/* CTA секция */}
        <FramerMotionContainer className="space-y-6 text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} duration={0.6}>
          <h3 className="text-3xl font-bold text-gray-900">Готовы сделать пирсинг в Кишиневе?</h3>
          <p className="mx-auto max-w-2xl text-gray-600">
            Записывайтесь на консультацию и получите профессиональный пирсинг в лучшей студии столицы. Работаем ежедневно с 10:00 до 20:00.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="flex items-center justify-center space-x-2 rounded-lg bg-red-500 px-8 py-3 text-lg font-bold text-white transition-colors duration-200 hover:bg-red-600">
              <Calendar className="h-5 w-5" />
              <span>Записаться сейчас</span>
            </button>
            <button className="rounded-lg border-2 border-red-500 px-8 py-3 text-lg font-bold text-red-500 transition-colors duration-200 hover:bg-red-500 hover:text-white">
              Получить консультацию
            </button>
          </div>
        </FramerMotionContainer>
      </Container>
    </CustomSectionAria>
  )
}
