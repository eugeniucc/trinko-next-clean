import HeaderNavigation from './HeaderNavigation'
import { HeaderScrollWrapper } from './HeaderScrollWrapper'
import { LangSwitcher } from './LangSwitcher'
import Logo from './Logo'
import MobileMenu from './MobileMenu'

export default function HeaderMenu() {
  return (
    <HeaderScrollWrapper>
      <header>
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <Logo />
          <div className="flex items-center gap-6 md:gap-10">
            <HeaderNavigation />
            <MobileMenu />
            <LangSwitcher />
          </div>
        </div>
      </header>
    </HeaderScrollWrapper>
  )
}
