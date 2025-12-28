import { useTranslations } from 'next-intl'
import { CustomSectionAria } from '@/app/ui/CustomSectionAria'
import { FramerMotionContainer } from '@/app/ui/FramerMotionContainer'
import { PickmeLink } from './PickmeLink'

export const DescriptionSection = () => {
  const t = useTranslations('permanentPage.descriptionSection')

  const cards = t.raw('labels') as {
    badge: string
    text: string
  }[]

  return (
    <CustomSectionAria aria={t('ariaLabel')} className="bg-zinc-900 py-20">
      <div className="container">
        <FramerMotionContainer
          className="mx-auto max-w-4xl space-y-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          duration={0.5}
        >
          <div className="flex flex-col gap-10 text-zinc-200">
            <h2 className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-3xl font-bold text-transparent">{t('title')}</h2>
            <p className="text-lg leading-relaxed">{t('text')}</p>

            <PickmeLink text={t('button')} />

            <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
              {cards.map((item, i) => (
                <div key={i} className="rounded-xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 p-4 backdrop-blur-sm">
                  <p className="text-zinc-200">
                    {item.badge} {item.text}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold text-white">{t('subtitle')}</h3>
            <p className="text-lg leading-relaxed">{t('extraText')}</p>

            <PickmeLink text={t('secondButton')} />
          </div>
        </FramerMotionContainer>
      </div>
    </CustomSectionAria>
  )
}
