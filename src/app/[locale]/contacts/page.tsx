import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { withSeo } from '@/lib/metadata'
import { ContactsSection } from '@/shared/ContactsSection'
import { LocationSection } from '../ui/LocationSection'

export const generateMetadata = withSeo('metadata.contactsPageMetadata', '/contacts')

export default async function Contacts() {
  const t = await getTranslations('contactsPage')
  const raw = t.raw('hero.paragraphs') as string[]
  const features = t.raw('features') as { title: string; text: string }[]

  return (
    <main className="flex flex-col bg-zinc-900">
      <section className="relative flex min-h-screen items-center justify-center bg-zinc-900 pt-30 pb-20">
        <div className="container flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-8 text-center">
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">{t('hero.title')}</h1>
            <h2 className="text-xl font-light text-zinc-300 md:text-2xl">{t('hero.subtitle')}</h2>

            <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-zinc-400">
              {raw.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="flex h-full flex-col justify-between gap-6 rounded-lg bg-zinc-800 p-6">
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-zinc-400">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 text-center">
            <div className="flex w-full flex-col gap-6 text-center">
              <p className="text-zinc-300">{t('cta.lead')}</p>
              <div className="mx-auto flex w-full max-w-112.5 flex-col gap-4">
                <a
                  href="https://t.me/TrinkoTattoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-md bg-white px-6 py-4 font-bold text-black transition-colors duration-200 hover:text-red-500"
                >
                  {t('cta.appointment')}
                </a>
                <Link
                  href="/gallery"
                  className="w-full rounded-md border border-gray-500 bg-transparent px-6 py-4 font-bold text-white transition-colors duration-200 hover:text-red-500"
                >
                  {t('cta.portfolio')}
                </Link>
              </div>
            </div>

            <div className="max-w-2xl text-sm text-zinc-500">
              <p>{t('seoLine')}</p>
            </div>
          </div>
        </div>
      </section>
      <ContactsSection />
      <LocationSection className="bg-zinc-900 pt-0 text-white" />
    </main>
  )
}
