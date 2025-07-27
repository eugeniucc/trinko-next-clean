import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import Link from "next/link";

export default async function HeaderNavigation() {
  const locales = await headers();
  const locale = locales.get("x-lang") as string;
  const t = await getTranslations({ locale, namespace: "homePage.header" });
  const links = t.raw("links") as { label: string; href: string }[];

  return (
    <nav className="hidden items-center gap-12 md:flex lg:gap-20">
      <ul className="flex items-center gap-6 lg:gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={`/${locale}${link.href}`}
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
