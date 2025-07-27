"use client";

import { useEffect, useState, ReactNode } from "react";

export const HeaderScrollWrapper = ({ children }: { children: ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`transition-all duration-300 ${
        isScrolled ? "bg-zinc-900 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      {children}
    </div>
  );
};
