'use client'

import { Instagram, Menu, MessageCircleHeart, MessageCircleMore, PhoneOutgoing, Send } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

export default function MobileMenu() {
  const t = useTranslations('homePage')
  const tSpeed = useTranslations('pageSpeedLabel')

  const links = t.raw('header.links') as { label: string; href: string }[]
  const burgerAria = tSpeed('burgerMenu')

  const locale = useLocale()
  const pathname = usePathname()

  const withLocale = (href: string) => (href.startsWith('/') ? `/${locale}${href}` : href)
  const isActive = (href: string) => {
    const full = withLocale(href)
    return pathname === full || pathname.startsWith(full + '/')
  }

  const filteredLinks = links.filter((l) => !(locale !== 'ru' && l.href.startsWith('/blog')))

  const acctualYear = new Date().getFullYear()

  return (
    <div className="flex items-center lg:hidden">
      <Sheet>
        <SheetTrigger aria-label={burgerAria}>
          <Menu className="text-red-500" />
        </SheetTrigger>
        <SheetContent className="flex h-full flex-col p-0" side="left">
          <SheetHeader className="gap-4 px-6 pt-6">
            <SheetTitle>
              <span className="mb-12 text-red-500">Oblivion Tattoo</span>
            </SheetTitle>
            <SheetDescription>{t('headerMobile.description')}</SheetDescription>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            <nav className="flex flex-col gap-4">
              {filteredLinks.map((link) => (
                <SheetClose key={link.href} asChild>
                  <Link
                    href={withLocale(link.href)}
                    className={cn(
                      'transition-colors duration-300',
                      isActive(link.href) ? (link.href === '/permanent' ? 'text-fuchsia-500' : 'text-red-500') : 'text-black hover:text-red-500'
                    )}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </div>

          <div className="border-t border-gray-200 px-6 py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <a
                  className="flex items-center justify-center gap-2 text-lg font-medium text-black duration-200 hover:text-red-500"
                  href="tel:+37379146506"
                  rel="noopener noreferrer"
                >
                  <PhoneOutgoing className="size-5 shrink-0" />
                  <span>+373 79 146 506</span>
                </a>
                <p className="text-center text-sm text-red-500">{t('headerMobile.appointment')}</p>
                <p className="text-center text-sm text-gray-600">{t('headerMobile.workingHours')}</p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href="https://www.instagram.com/trinko_tattoo/"
                  target="_blank"
                  className="flex items-center justify-center gap-2 rounded-lg bg-gray-50 p-3 text-black duration-200 hover:bg-red-50 hover:text-red-500"
                  rel="noopener noreferrer"
                >
                  <Instagram className="size-5 shrink-0" />
                  <span className="text-sm">Instagram</span>
                </a>
                <a
                  href="https://t.me/TrinkoTattoo"
                  target="_blank"
                  className="flex items-center justify-center gap-2 rounded-lg bg-gray-50 p-3 text-black duration-200 hover:bg-blue-50 hover:text-blue-500"
                  rel="noopener noreferrer"
                >
                  <Send className="size-5 shrink-0" />
                  <span className="text-sm">Telegram</span>
                </a>
                <a
                  href="https://api.whatsapp.com/message/RLI5HPWJHFCHJ1"
                  target="_blank"
                  className="flex items-center justify-center gap-2 rounded-lg bg-gray-50 p-3 text-black duration-200 hover:bg-green-50 hover:text-green-500"
                  rel="noopener noreferrer"
                >
                  <MessageCircleMore className="size-5 shrink-0" />
                  <span className="text-sm">WhatsApp</span>
                </a>
                <a
                  href="viber://chat?number=%2B37379146506"
                  target="_blank"
                  className="flex items-center justify-center gap-2 rounded-lg bg-gray-50 p-3 text-black duration-200 hover:bg-purple-50 hover:text-purple-500 md:hidden"
                  rel="noopener noreferrer"
                >
                  <MessageCircleHeart className="size-5 shrink-0" />
                  <span className="text-sm">Viber</span>
                </a>
              </div>

              <p className="text-center text-xs text-gray-500">Oblivion Tattoo Studio © {acctualYear}</p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
