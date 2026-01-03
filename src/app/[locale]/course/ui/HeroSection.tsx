import { getTranslations } from 'next-intl/server'
import { FramerMotionContainer } from '@/app/ui/FramerMotionContainer'

export const HeroSection = async () => {
  const t = await getTranslations('coursesPage')

  const overviewParagraphs = t.raw('overview.paragraphs') as string[]
  const curriculumItems = t.raw('curriculum.items') as string[]
  const tattooBullets = t.raw('details.tattooPM.bullets') as string[]
  const piercingBullets = t.raw('details.piercing.bullets') as string[]

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-zinc-900 pt-30 pb-20">
      <div className="container flex flex-col gap-10">
        <FramerMotionContainer
          className="flex flex-col gap-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          duration={0.5}
        >
          <h1 className="text-center text-3xl font-bold break-all sm:text-4xl">{t('hero.title')}</h1>
          <p className="text-center">{t('hero.lead')}</p>
        </FramerMotionContainer>

        <FramerMotionContainer className="flex flex-col text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <p className="text-left text-3xl font-bold">{t('overview.title')}</p>
          <div className="my-4 h-px w-full bg-gray-700"></div>

          <div className="grid grid-cols-1 gap-10 text-white lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              {overviewParagraphs.map((p, i) => (
                <h2 key={i} className="text-lg">
                  {p}
                </h2>
              ))}

              <p className="text-lg font-bold">{t('curriculum.title')}</p>
              <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-red-500">
                {curriculumItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="sticky top-25 flex h-fit flex-col gap-6 rounded-lg bg-zinc-800 p-4">
              <p className="text-2xl font-bold">{t('details.title')}</p>

              <h3 className="text-xl font-bold text-red-500">{t('details.tattooPM.title')}</h3>
              <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-red-500">
                {tattooBullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-red-500">{t('details.piercing.title')}</h3>
              <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-red-500">
                {piercingBullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </FramerMotionContainer>

        <FramerMotionContainer className="flex flex-col text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <p className="text-left text-3xl font-bold">{t('types.title')}</p>
          <div className="my-4 h-px w-full bg-gray-700"></div>

          <div className="grid grid-cols-1 gap-10 text-white lg:grid-cols-3">
            <div className="flex h-full flex-col justify-between gap-6 rounded-lg bg-zinc-800 p-4">
              <h2 className="text-2xl font-bold">{t('types.tattoo.title')}</h2>
              <p className="flex flex-1 text-lg">{t('types.tattoo.text')}</p>
            </div>

            <div className="flex h-full flex-col justify-between gap-6 rounded-lg bg-zinc-800 p-4">
              <h2 className="text-2xl font-bold">{t('types.permanent.title')}</h2>
              <p className="flex flex-1 text-lg">{t('types.permanent.text')}</p>
            </div>

            <div className="flex h-full flex-col justify-between gap-6 rounded-lg bg-zinc-800 p-4">
              <h2 className="text-2xl font-bold">{t('types.piercing.title')}</h2>
              <p className="flex flex-1 text-lg">{t('types.piercing.text')}</p>
            </div>
          </div>
        </FramerMotionContainer>
      </div>
    </section>
  )
}
