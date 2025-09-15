import { Award, Shield, Sparkles } from 'lucide-react'
import { Container } from '@/components/custom/Container'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { FramerMotionContainer } from '@/components/custom/FramerMotionContainer'

export const AboutSection = () => {
  return (
    <CustomSectionAria aria="AboutSection" className="bg-zinc-900 pb-20">
      <Container className="flex flex-col gap-10 sm:gap-15">
        <FramerMotionContainer className="space-y-6 text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} duration={0.6}>
          <h2 className="text-4xl font-bold break-all text-white">О студии пирсинга Oblivion Tattoo в Кишиневе</h2>
          <p className="mx-auto max-w-5xl text-xl leading-relaxed text-white">
            Более 10 лет мы являемся ведущей студией боди-модификаций в Молдове. Наша команда сертифицированных мастеров выполнила тысячи проколов, от
            простого пирсинга ушей до сложных анатомических проектов. Мы гордимся репутацией самой безопасной и профессиональной пирсинг-студии в
            Кишиневе.
          </p>
        </FramerMotionContainer>

        <FramerMotionContainer initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8">
            <h3 className="text-center text-2xl font-bold text-white">Почему выбирают нас для пирсинга в Кишиневе?</h3>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <Shield className="size-6 flex-shrink-0 text-red-500" />
                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-red-500">100% стерильность</h4>
                  <p className="text-white">
                    Используем автоклав класса B, одноразовые иглы, соблюдаем все медицинские протоколы. Каждый инструмент проходит полный цикл
                    стерилизации.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Award className="size-6 flex-shrink-0 text-red-500" />
                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-red-500">Сертифицированные мастера</h4>
                  <p className="text-white">
                    Наши пирсеры имеют международные сертификаты, регулярно проходят обучение новым техникам и методам безопасности.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Sparkles className="size-6 flex-shrink-0 text-red-500" />
                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-red-500">Premium украшения</h4>
                  <p className="text-white">
                    Работаем только с титаном Grade 1, хирургической сталью 316L, золотом 14-18k. Украшения от ведущих мировых брендов: Anatometal,
                    BVLA, Neometal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FramerMotionContainer>

        <FramerMotionContainer className="space-y-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} duration={0.6}>
          <h3 className="text-center text-3xl font-bold text-white">Все виды пирсинга в одной студии</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                category: 'Пирсинг ушей',
                services: ['Мочка уха', 'Хеликс', 'Трагус', 'Конч', 'Индастриал', 'Дэйс'],
                description: 'От классических проколов до сложных композиций'
              },
              {
                category: 'Пирсинг лица',
                services: ['Нос', 'Септум', 'Бридж', 'Губы', 'Язык', 'Бровь'],
                description: 'Подчеркиваем индивидуальность безопасно'
              },
              {
                category: 'Пирсинг тела',
                services: ['Пупок', 'Соски', 'Поверхностный', 'Микродермалы', 'Интимный'],
                description: 'Интимные зоны с особой деликатностью'
              }
            ].map((category, index) => (
              <div key={index} className="flex flex-col gap-6 rounded-lg bg-zinc-700 p-6">
                <h4 className="text-xl font-bold text-white">{category.category}</h4>
                <p className="text-white">{category.description}</p>
                <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-red-500">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="font-semibold text-white">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FramerMotionContainer>

        <div className="flex flex-col gap-8 rounded-xl p-8 text-white">
          <h3 className="text-center text-3xl font-bold break-all">Наш процесс: безопасность превыше всего</h3>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                step: '1',
                title: 'Консультация',
                description: 'Обсуждаем анатомию, подбираем оптимальное размещение и украшения'
              },
              {
                step: '2',
                title: 'Подготовка',
                description: 'Стерилизация рабочего места, распаковка новых инструментов'
              },
              {
                step: '3',
                title: 'Прокол',
                description: 'Быстро и точно с использованием профессиональных игл'
              },
              {
                step: '4',
                title: 'Уход',
                description: 'Подробные инструкции по уходу и бесплатные консультации'
              }
            ].map((step, index) => (
              <div key={index} className="flex flex-col gap-4 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-red-500 text-xl font-bold">{step.step}</div>
                <h4 className="text-lg font-semibold">{step.title}</h4>
                <p className="text-sm text-white">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </CustomSectionAria>
  )
}
