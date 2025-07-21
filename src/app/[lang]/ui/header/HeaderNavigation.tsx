import { headers } from "next/headers";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function HeaderNavigation() {
  const head = await headers();
  const locale = head.get("x-locale") ?? "ru";

  const t = await getTranslations({ locale, namespace: "homePage.header" });
  const links = t.raw("links") as { label: string; href: string }[];

  return (
    <nav className="hidden items-center gap-12 md:flex lg:gap-20">
      <ul className="flex items-center gap-6 lg:gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="transition-colors text-white duration-300 hover:text-red-500"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
