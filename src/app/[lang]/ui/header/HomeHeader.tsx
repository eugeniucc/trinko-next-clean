import { Hamburger } from "lucide-react";
import { HeaderLogo } from "./ui/HeaderLogo";
import { HeaderNavigation } from "./ui/HeaderNavigation";
import { LanguageSwitcher } from "./ui/LanguageSwitcher";

export const HomeHeader = () => {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between px-4">
        <HeaderLogo />
        <HeaderNavigation />
        <div className="flex items-center gap-6 pr-2 lg:hidden">
          <Hamburger />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};
