import { Award, Shield, Sparkles } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/custom/Container'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { FramerMotionContainer } from '@/components/custom/FramerMotionContainer'

type WhyItem = { icon: 'shield' | 'award' | 'sparkles'; title: string; text: string }
type CatalogItem = { category: string; description: string; services: string[] }
type ProcessItem = { step: string; title: string; description: string }

const ICONS = {
  shield: Shield,
  award: Award,
  sparkles: Sparkles
} as const

export const AboutSection = async () => {
  const t = await getTranslations('piercingPage.aboutSection')

  const why = t.raw('why') as WhyItem[]
  const catalog = t.raw('catalog') as CatalogItem[]
  const process = t.raw('process') as ProcessItem[]

  return (
    <CustomSectionAria aria={t('ariaLabel')} className="bg-zinc-900 pb-20">
      <Container className="flex flex-col gap-10 sm:gap-15">
        <FramerMotionContainer className="space-y-6 text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} duration={0.6}>
          <h2 className="text-4xl font-bold break-words text-white">{t('title')}</h2>
          <p className="mx-auto max-w-5xl text-xl leading-relaxed text-white">{t('lead')}</p>
        </FramerMotionContainer>

        <FramerMotionContainer initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8">
            <h3 className="text-center text-2xl font-bold text-white">{t('whyTitle')}</h3>

            <div className="flex flex-col gap-6">
              {why.map(({ icon, title, text }, i) => {
                const Icon = ICONS[icon]
                return (
                  <div key={i} className="flex items-center gap-4">
                    <Icon className="size-6 shrink-0 text-red-500" />
                    <div className="flex flex-col gap-2">
                      <h4 className="font-semibold text-red-500">{title}</h4>
                      <p className="text-white">{text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </FramerMotionContainer>

        <FramerMotionContainer className="space-y-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} duration={0.6}>
          <h3 className="text-center text-3xl font-bold text-white">{t('catalogTitle')}</h3>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {catalog.map((c, i) => (
              <div key={i} className="flex flex-col gap-6 rounded-lg bg-zinc-700 p-6">
                <h4 className="text-xl font-bold text-white">{c.category}</h4>
                <p className="text-white">{c.description}</p>
                <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-red-500">
                  {c.services.map((s, i) => (
                    <li key={i} className="font-semibold text-white">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FramerMotionContainer>

        <FramerMotionContainer
          className="flex flex-col gap-8 rounded-xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          duration={0.6}
        >
          <h3 className="text-center text-3xl font-bold break-words">{t('processTitle')}</h3>
          <div className="grid gap-6 md:grid-cols-4">
            {process.map((step, i) => (
              <div key={i} className="flex flex-col gap-4 text-center">
                <div className="mx-auto inline-flex size-12 items-center justify-center rounded-full bg-red-500 text-xl leading-none font-bold">
                  {step.step}
                </div>
                <h4 className="text-lg font-semibold">{step.title}</h4>
                <p className="text-sm text-white">{step.description}</p>
              </div>
            ))}
          </div>
        </FramerMotionContainer>
      </Container>
    </CustomSectionAria>
  )
}
