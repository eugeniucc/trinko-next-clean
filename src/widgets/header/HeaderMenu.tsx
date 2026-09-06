import { cacheLife } from 'next/cache'
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

export default async function HeaderMenu() {
  const currentYear = await getCurrentYear()

  return (
    <HeaderScrollWrapper>
      <header>
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <Logo />
          <div className="flex items-center gap-6 md:gap-10">
            <HeaderNavigation />
            <MobileMenu currentYear={currentYear} />
            <LangSwitcher />
          </div>
        </div>
      </header>
    </HeaderScrollWrapper>
  )
}
