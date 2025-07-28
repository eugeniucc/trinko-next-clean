import HeaderNavigation from './HeaderNavigation'
import { HeaderScrollWrapper } from './HeaderScrollWrapper'
import { LangSwitcher } from './LangSwitcher'
import Logo from './Logo'
import MobileMenu from './MobileMenu'

export default function HeaderMenu() {
  return (
    <HeaderScrollWrapper>
      <header className="fixed top-0 z-20 w-full transition-all duration-300">
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
