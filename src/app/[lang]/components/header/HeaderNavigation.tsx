import { getTranslations } from "next-intl/server";
import Link from "next/link";

type Props = {
  activePath?: string;
};

export default async function HeaderNavigation({ activePath = "" }: Props) {
  const t = await getTranslations("homePage.header");
  const links = t.raw("links") as { label: string; href: string }[];

  return (
    <nav className="hidden items-center gap-12 md:flex lg:gap-20">
      <ul className="flex items-center gap-6 lg:gap-8">
        {links.map((link) => {
          const isActive =
            activePath === link.href || activePath.startsWith(link.href + "/");

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative pb-1 text-white transition-colors duration-300 ${
                  isActive
                    ? "border-b border-red-500 text-red-500"
                    : "hover:text-red-500"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
