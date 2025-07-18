"use client";

import { useEffect, useState } from "react";
import { HeaderNavigation } from "./HeaderNavigation";
import { MobileMenu } from "./MobileMenu";
import { Logo } from "./Logo";
import { LangSwitcher } from "./LangSwitcher";

export default function HeaderMenu() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-20 transition-all duration-300 ${
        isScrolled ? "bg-zinc-900 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container py-2 px-4 mx-auto flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-6 md:gap-10">
          <HeaderNavigation />
          <MobileMenu />
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
}
