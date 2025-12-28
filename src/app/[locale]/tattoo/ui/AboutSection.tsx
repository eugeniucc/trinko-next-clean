import { getTranslations } from 'next-intl/server'
import { CustomSectionAria } from '@/app/ui/CustomSectionAria'
import { FramerMotionContainer } from '@/app/ui/FramerMotionContainer'

export const AboutSection = async () => {
  const t = await getTranslations('tattooPage.aboutSection')
  const paragraphs = t.raw('paragraphs') as string[]
  const advantages = t.raw('advantages') as string[]

  return (
    <CustomSectionAria aria={t('ariaLabel')} className="bg-zinc-900">
      <div className="container pb-20">
        <FramerMotionContainer
          className="grid grid-cols-1 items-center gap-12 xl:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          duration={0.5}
        >
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold break-words text-white">{t('title')}</h2>
            <div className="flex flex-col gap-4 text-lg leading-relaxed text-zinc-300">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-2xl bg-zinc-700 p-4 sm:p-8">
            <h3 className="text-xl font-semibold text-white">{t('advantagesTitle')}</h3>
            <ul className="flex list-disc flex-col gap-2 pl-5 text-white marker:text-red-500">
              {advantages.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          </div>
        </FramerMotionContainer>
      </div>
    </CustomSectionAria>
  )
}
