import { getTranslations } from 'next-intl/server'

export default async function AboutPage() {
  const t = await getTranslations('aboutPage')

  return <div className="text-white">{t('title')}</div>
}
