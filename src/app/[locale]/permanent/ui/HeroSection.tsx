import { useTranslations } from 'next-intl'
import { FramerMotionContainer } from '@/app/ui/FramerMotionContainer'
import { PickmeLink } from './PickmeLink'

export const HeroSection = () => {
  const t = useTranslations('permanentPage.heroSection')

  const cards = t.raw('subtitles') as {
    badge: string
    title: string
    text: string
  }[]

  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 py-30 2xl:py-0"
      
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-rose-500/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-rose-500/30 blur-3xl"></div>
      </div>

      <div className="relative z-2 container">
        <div className="flex flex-col gap-12 text-white">
          <FramerMotionContainer
            className="flex flex-col items-center gap-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            duration={0.5}
          >
            <h1 className="bg-linear-to-r from-white via-rose-100 to-fuchsia-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
              {t('title')}
              <span className="block text-3xl sm:text-4xl lg:text-5xl">{t('titleExtend')}</span>
            </h1>
            <p className="text-lg sm:text-xl">{t('text')}</p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
              <PickmeLink text={t('button')} />
            </div>
          </FramerMotionContainer>

          <div className="mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3">
            {cards.map((card, i) => (
              <FramerMotionContainer
                key={i}
                className="flex h-full flex-col justify-between gap-4 rounded-2xl bg-white/5 p-6 text-center backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                duration={0.5}
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-amber-500/20">
                  <span className="text-xl">{card.badge}</span>
                </div>
                <h2 className="mx-auto max-w-2xs text-lg font-semibold text-white">{card.title}</h2>
                <p className="text-sm text-zinc-400">{card.text}</p>
              </FramerMotionContainer>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
