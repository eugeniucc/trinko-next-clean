import { Container } from '@/components/custom/Container'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { FramerMotionContainer } from '@/components/custom/FramerMotionContainer'
import { PickmeLink } from './PickmeLink'

export const HeroSection = () => {
  return (
    <CustomSectionAria
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 py-30 2xl:py-0"
      aria="heroSection"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-rose-500/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-rose-500/30 blur-3xl"></div>
      </div>

      <Container className="relative z-2">
        <div className="flex flex-col gap-12 text-white">
          <FramerMotionContainer
            className="flex flex-col items-center gap-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            duration={0.5}
          >
            <h1 className="bg-gradient-to-r from-white via-rose-100 to-fuchsia-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
              Перманентный макияж в Кишиневе
              <span className="block text-3xl sm:text-4xl lg:text-5xl">от мастера экстра-класса</span>
            </h1>
            <p className="text-lg sm:text-xl">
              Подчеркните вашу естественную красоту с помощью профессионального перманентного макияжа. Мы специализируемся на самых востребованных
              техниках: пудровое напыление бровей, акварельный татуаж губ и изящная межресничная стрелка.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
              <PickmeLink text="Записаться на консультацию" />
            </div>
          </FramerMotionContainer>

          <div className="mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3">
            <FramerMotionContainer
              className="flex h-full flex-col justify-between gap-4 rounded-2xl bg-white/5 p-6 text-center backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              duration={0.5}
            >
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-amber-500/20">
                <span className="text-xl">👁️</span>
              </div>
              <h2 className="mx-auto max-w-2xs text-lg font-semibold text-white">Перманентный макияж бровей в Кишинёве</h2>
              <p className="text-sm text-zinc-400">
                Современное пудровое напыление с использованием сертифицированных пигментов. Естественный результат держится до 3 лет. Лучшие мастера
                в Кишинёве.
              </p>
            </FramerMotionContainer>

            <FramerMotionContainer
              className="flex h-full flex-col justify-between gap-4 rounded-2xl bg-white/5 p-6 text-center backdrop-blur-sm"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              duration={0.8}
            >
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-rose-500/20">
                <span className="text-xl">👄</span>
              </div>
              <h2 className="mx-auto max-w-2xs text-lg font-semibold text-white">Перманентный макияж губ в Кишинёве</h2>
              <p className="text-sm text-zinc-400">
                Акварельная техника обеспечивает ровный тон и красивый контур без помады. Полная стерильность и европейские стандарты качества в нашем
                салоне в Кишинёве.
              </p>
            </FramerMotionContainer>

            <FramerMotionContainer
              className="flex h-full flex-col justify-between gap-4 rounded-2xl bg-white/5 p-6 text-center backdrop-blur-sm"
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 1, y: 0 }}
              duration={1}
            >
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-purple-500/20">
                <span className="text-xl">💎</span>
              </div>
              <h2 className="mx-auto max-w-2xs text-lg font-semibold text-white">Перманентный макияж век и стрелки Кишинёв</h2>
              <p className="text-sm text-zinc-400">
                Межресничное заполнение и эффект стрелки подчёркивают взгляд и экономят время. Надёжные мастера в Кишинёве (Молдова), стойкий и
                безопасный результат.
              </p>
            </FramerMotionContainer>
          </div>
        </div>
      </Container>
    </CustomSectionAria>
  )
}
