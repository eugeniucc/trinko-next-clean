import { getTranslations } from 'next-intl/server'
import { CustomLinkAppointment } from '@/app/ui/CustomLinkAppointment'
import { CustomLinkRouter } from '@/app/ui/CustomLinkRouter'
import { FramerMotionContainer } from '@/app/ui/FramerMotionContainer'

export const HeroSection = async () => {
  const t = await getTranslations('contactsPage')

  const raw = t.raw('hero.paragraphs') as string[]

  const features = t.raw('features') as { title: string; text: string }[]

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-zinc-900 pt-30 pb-20">
      <div className="container flex flex-col items-center gap-8 text-center">
        <FramerMotionContainer
          className="flex flex-col items-center gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          duration={0.5}
        >
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">{t('hero.title')}</h1>
          <h2 className="text-xl font-light text-zinc-300 md:text-2xl">{t('hero.subtitle')}</h2>

          <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-zinc-400">
            {raw.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div key={i} className="flex h-full flex-col justify-between gap-6 rounded-lg bg-zinc-800 p-6">
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-zinc-400">{feature.text}</p>
              </div>
            ))}
          </div>
        </FramerMotionContainer>

        <FramerMotionContainer
          className="flex flex-col items-center gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          duration={0.5}
        >
          <div className="flex w-full flex-col gap-6 text-center">
            <p className="text-zinc-300">{t('cta.lead')}</p>
            <div className="mx-auto flex w-full max-w-112.5 flex-col gap-4">
              <CustomLinkAppointment className="w-full" text={t('cta.appointment')} />
              <CustomLinkRouter className="w-full border border-gray-500 bg-transparent text-white" href="/gallery" text={t('cta.portfolio')} />
            </div>
          </div>

          <div className="max-w-2xl text-sm text-zinc-500">
            <p>{t('seoLine')}</p>
          </div>
        </FramerMotionContainer>
      </div>
    </section>
  )
}
