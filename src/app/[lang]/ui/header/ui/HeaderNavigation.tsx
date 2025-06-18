"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const HeaderNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-12 lg:flex lg:gap-20">
      <ul className="flex items-center gap-4 lg:gap-8">
        <li>
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "border-b-1 border-red-500 pb-1 text-red-500"
                : "relative pb-1 text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-500 after:duration-300 after:content-[''] hover:after:w-full"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`${
              pathname === "/about"
                ? "border-b-1 border-red-500 pb-1 text-red-500"
                : "relative pb-1 text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-500 after:duration-300 after:content-[''] hover:after:w-full"
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className={`${
              pathname === "/services"
                ? "border-b-1 border-red-500 pb-1 text-red-500"
                : "relative pb-1 text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-500 after:duration-300 after:content-[''] hover:after:w-full"
            }`}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/gallery"
            className={`${
              pathname === "/gallery"
                ? "border-b-1 border-red-500 pb-1 text-red-500"
                : "relative pb-1 text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-500 after:duration-300 after:content-[''] hover:after:w-full"
            }`}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={`${
              pathname.startsWith("/blog")
                ? "border-b-1 border-red-500 pb-1 text-red-500"
                : "relative pb-1 text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-500 after:duration-300 after:content-[''] hover:after:w-full"
            }`}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/course"
            className={`${
              pathname === "/course"
                ? "border-b-1 border-red-500 pb-1 text-red-500"
                : "relative pb-1 text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-500 after:duration-300 after:content-[''] hover:after:w-full"
            }`}
          >
            Course
          </Link>
        </li>
        <li>
          <Link
            href="/contacts"
            className={`${
              pathname === "/contacts"
                ? "border-b-1 border-red-500 pb-1 text-red-500"
                : "relative pb-1 text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-500 after:duration-300 after:content-[''] hover:after:w-full"
            }`}
          >
            Contacts
          </Link>
        </li>
      </ul>
      <LanguageSwitcher />
    </nav>
  );
};
