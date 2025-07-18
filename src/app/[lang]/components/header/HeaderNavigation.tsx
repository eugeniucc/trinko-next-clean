"use client";

import { useTranslations } from "next-intl";
import { CustomLink } from "@/shared/CustomLink";

export const HeaderNavigation = () => {
  const t = useTranslations("homePage.header");
  const links = t.raw("links") as { label: string; href: string }[];

  return (
    <nav className="hidden items-center gap-12 md:flex lg:gap-20">
      <ul className="flex items-center gap-6 lg:gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <CustomLink href={link.href} label={link.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
