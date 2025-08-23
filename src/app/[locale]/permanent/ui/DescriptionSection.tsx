import { Container } from '@/components/custom/Container'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { FramerMotionContainer } from '@/components/custom/FramerMotionContainer'
import { PickmeLink } from './PickmeLink'

export const DescriptionSection = () => {
  return (
    <CustomSectionAria aria="Описание перманентного макияжа" className="bg-zinc-900 py-20">
      <Container>
        <FramerMotionContainer
          className="mx-auto max-w-4xl space-y-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          duration={0.5}
        >
          <div className="flex flex-col gap-10 text-zinc-200">
            <h2 className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-3xl font-bold text-transparent">
              Перманентный макияж в Кишинёве — брови, губы и стрелки
            </h2>
            <p className="text-lg leading-relaxed">
              Перманентный макияж (татуаж) — это современная косметологическая процедура, которая позволяет создать стойкий и естественный макияж на
              срок от 1,5 до 3 лет. Забудьте о ежедневной рутине с карандашами и помадами.
            </p>

            <PickmeLink text="Записаться на консультацию" />

            <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
              <div className="rounded-xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 p-4 backdrop-blur-sm">
                <p className="text-zinc-200">✨ Просыпайтесь уже красивой и экономьте время каждое утро</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-4 backdrop-blur-sm">
                <p className="text-zinc-200">🏊‍♀️ Уверенность в любой ситуации: спорт, бассейн, пляж</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 p-4 backdrop-blur-sm">
                <p className="text-zinc-200">🎨 Идеальная форма и оттенок под ваш тип внешности</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-4 backdrop-blur-sm">
                <p className="text-zinc-200">💯 Подчеркиваем природные черты, не маскируем их</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white">Перманентный макияж и татуаж глаз в Кишинёве</h3>
            <p className="text-lg leading-relaxed">
              Перманентный макияж позволяет экономить время и выглядеть безупречно каждый день. Мы предлагаем прозрачные цены и гарантируем качество
              работы. Запишитесь на консультацию онлайн или по телефону — и узнайте, какой вид татуажа подойдёт именно вам.
            </p>

            <PickmeLink text="Записаться на консультацию" />
          </div>
        </FramerMotionContainer>
      </Container>
    </CustomSectionAria>
  )
}
