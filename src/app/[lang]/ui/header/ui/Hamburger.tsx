"use client";

import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Instagram,
  Menu,
  MessageCircleHeart,
  MessageCircleMore,
  PhoneOutgoing,
  Send,
  Sheet,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Hamburger = () => {
  const pathname = usePathname();

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex items-center lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="text-red-500" />
        </SheetTrigger>
        <SheetContent className="w-[300px] sm:w-[540px]" side="left">
          <SheetHeader>
            <SheetTitle>
              <span className="mb-12 text-red-500">Trinko Tattoo</span>
            </SheetTitle>
            <SheetDescription>
              Navigate through the menu to explore our services.
            </SheetDescription>
            <nav className="py-10">
              <ul className="flex flex-col gap-4">
                <li>
                  <SheetClose asChild>
                    <Link
                      href="/"
                      onClick={handleScroll}
                      className={`${
                        pathname === "/"
                          ? "border-b-1 border-red-500 font-bold text-red-500"
                          : "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-500 after:duration-300 after:content-[''] hover:after:w-full"
                      }`}
                    >
                      Home
                    </Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link
                      href="/about"
                      onClick={handleScroll}
                      className={`${
                        pathname === "/about"
                          ? "border-b-1 border-red-500 font-bold text-red-500"
                          : "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-500 after:duration-300 after:content-[''] hover:after:w-full"
                      }`}
                    >
                      About
                    </Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link
                      href="/services"
                      onClick={handleScroll}
                      className={`${
                        pathname === "/services"
                          ? "border-b-1 border-red-500 font-bold text-red-500"
                          : "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-500 after:duration-300 after:content-[''] hover:after:w-full"
                      }`}
                    >
                      Services
                    </Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link
                      href="/gallery"
                      onClick={handleScroll}
                      className={`${
                        pathname === "/gallery"
                          ? "border-b-1 border-red-500 font-bold text-red-500"
                          : "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-500 after:duration-300 after:content-[''] hover:after:w-full"
                      }`}
                    >
                      Gallery
                    </Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link
                      href="/blog"
                      onClick={handleScroll}
                      className={`${
                        pathname.startsWith("/blog")
                          ? "border-b-1 border-red-500 font-bold text-red-500"
                          : "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-500 after:duration-300 after:content-[''] hover:after:w-full"
                      }`}
                    >
                      Blog
                    </Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link
                      href="/course"
                      onClick={handleScroll}
                      className={`${
                        pathname === "/course"
                          ? "border-b-1 border-red-500 font-bold text-red-500"
                          : "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-500 after:duration-300 after:content-[''] hover:after:w-full"
                      }`}
                    >
                      Course
                    </Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link
                      href="/contacts"
                      onClick={handleScroll}
                      className={`${
                        pathname === "/contacts"
                          ? "border-b-1 border-red-500 font-bold text-red-500"
                          : "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-500 after:duration-300 after:content-[''] hover:after:w-full"
                      }`}
                    >
                      Contacts
                    </Link>
                  </SheetClose>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <a
                  className="flex items-center gap-2 duration-200 hover:text-red-500"
                  href="tel:+37379146506"
                >
                  <PhoneOutgoing className="h-5 w-5" />
                  <p>+37379146506</p>
                </a>
                <p>Opening Hours: Mn-Sun: 10 am-8 pm</p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.instagram.com/trinko_tattoo/"
                  target="_blank"
                  className="flex items-center gap-2 duration-200 hover:text-red-500"
                >
                  Instagram <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://t.me/Trinkonfox"
                  target="_blank"
                  className="flex items-center gap-2 duration-200 hover:text-red-500"
                >
                  Telegram <Send className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/37360833389"
                  target="_blank"
                  className="flex items-center gap-2 duration-200 hover:text-red-500"
                >
                  WhatsApp <MessageCircleMore className="h-5 w-5" />
                </a>
                <a
                  href="viber://chat?number=%2B37360833389"
                  target="_blank"
                  className="flex items-center gap-2 duration-200 hover:text-red-500"
                >
                  Viber <MessageCircleHeart className="h-5 w-5" />
                </a>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
