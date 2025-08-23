import { getLocale, getTranslations } from 'next-intl/server'
import NavigationLink from './NavigationLink'

export default async function HeaderNavigation() {
  const locale = await getLocale()
  const t = await getTranslations('homePage')

  const links = t.raw('header.links') as { label: string; href: string }[]

  return (
    <nav className="hidden items-center gap-12 lg:flex lg:gap-20">
      <NavigationLink locale={locale} links={links} />
    </nav>
  )
}
