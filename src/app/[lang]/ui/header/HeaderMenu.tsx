import MobileMenu from "./MobileMenu";
import { LangSwitcher } from "./LangSwitcher";
import { Logo } from "./Logo";
import { HeaderScrollWrapper } from "./HeaderScrollWrapper";
import HeaderNavigation from "./HeaderNavigation";

export default function HeaderMenu() {
  return (
    <HeaderScrollWrapper>
      <header className="fixed top-0 w-full z-20 transition-all duration-300">
        <div className="container py-2 px-4 mx-auto flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-6 md:gap-10">
            <HeaderNavigation />
            <MobileMenu />
            <LangSwitcher />
          </div>
        </div>
      </header>
    </HeaderScrollWrapper>
  );
}
