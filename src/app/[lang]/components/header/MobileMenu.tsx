"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Instagram,
  Menu,
  MessageCircleHeart,
  MessageCircleMore,
  PhoneOutgoing,
  Send,
} from "lucide-react";
import { CustomLink } from "@/shared/CustomLink";
import { useTranslations } from "next-intl";

export const MobileMenu = () => {
  const t = useTranslations("homePage.header");
  const links = t.raw("links") as { label: string; href: string }[];

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex items-center md:hidden">
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
            <nav className="py-6 flex flex-col gap-4">
              {links.map((link) => (
                <SheetClose key={link.href} asChild>
                  <CustomLink
                    href={link.href}
                    onClick={handleScroll}
                    label={link.label}
                    className="text-black"
                  />
                </SheetClose>
              ))}
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
