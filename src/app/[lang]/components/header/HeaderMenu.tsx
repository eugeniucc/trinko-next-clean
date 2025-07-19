import { headers } from "next/headers";
import MobileMenu from "./MobileMenu";
import { LangSwitcher } from "./LangSwitcher";
import { Logo } from "./Logo";
import { HeaderScrollWrapper } from "./HeaderScrollWrapper";
import HeaderNavigation from "./HeaderNavigation";
import { CloseSheetWrapper } from "./CloseSheetWrapper";

export default async function HeaderMenu() {
  const headersObj = await headers();
  const pathname = headersObj.get("x-pathname") || "";

  return (
    <HeaderScrollWrapper>
      <header className="fixed top-0 w-full z-20 transition-all duration-300">
        <div className="container py-2 px-4 mx-auto flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-6 md:gap-10">
            <HeaderNavigation activePath={pathname} />
            <MobileMenu activePath={pathname} closeSheet={CloseSheetWrapper} />
            <LangSwitcher />
          </div>
        </div>
      </header>
    </HeaderScrollWrapper>
  );
}
