import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function HeaderNavigation() {
  const t = await getTranslations("homePage");

  const links = t.raw("header.links") as { label: string; href: string }[];

  return (
    <nav className="hidden items-center gap-12 md:flex lg:gap-20">
      <ul className="flex items-center gap-6 lg:gap-8">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              className=" text-white transition-colors duration-300 hover:text-red-500"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
