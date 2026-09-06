import { cacheLife } from 'next/cache'
import { getTranslations } from 'next-intl/server'
import HeaderNavigation from './HeaderNavigation'
import { HeaderScrollWrapper } from './HeaderScrollWrapper'
import { LangSwitcher } from './LangSwitcher'
import Logo from './Logo'
import MobileMenu from './MobileMenu'

async function getCurrentYear() {
  'use cache'

  cacheLife('days')

  return new Date().getFullYear()
}

export default async function HeaderMenu({ locale }: { locale: string }) {
  const currentYear = await getCurrentYear()
  const t = await getTranslations('homePage')
  const labels = await getTranslations('pageSpeedLabel')
  const links = t.raw('header.links') as { label: string; href: string }[]
  const mobileLabels = {
    description: t('headerMobile.description'),
    home: t('headerMobile.home'),
    appointment: t('headerMobile.appointment'),
    workingHours: t('headerMobile.workingHours'),
    burgerMenu: labels('burgerMenu')
  }

  return (
    <HeaderScrollWrapper>
      <header>
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <Logo locale={locale} />
          <div className="flex items-center gap-6 md:gap-10">
            <HeaderNavigation locale={locale} links={links} />
            <MobileMenu currentYear={currentYear} locale={locale} links={links} labels={mobileLabels} />
            <LangSwitcher locale={locale} ariaLabel={labels('translationButton')} />
          </div>
        </div>
      </header>
    </HeaderScrollWrapper>
  )
}
