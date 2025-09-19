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

  return (
    <div className="flex items-center lg:hidden">
      <Sheet>
        <SheetTrigger aria-label={burgerAria}>
          <Menu className="text-red-500" />
        </SheetTrigger>
        <SheetContent className="w-[300px] sm:w-[540px]" side="left">
          <SheetHeader>
            <SheetTitle>
              <span className="mb-12 text-red-500">OblivionTattoo</span>
            </SheetTitle>
            <SheetDescription>{t('headerMobile.description')}</SheetDescription>
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
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
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <a className="flex items-center gap-2 duration-200 hover:text-red-500" href="tel:+37379146506" rel="noopener noreferrer">
                  <PhoneOutgoing className="h-5 w-5" />
                  <p>+37379146506</p>
                </a>
                <p>{t('headerMobile.workingHours')}</p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.instagram.com/trinko_tattoo/"
                  target="_blank"
                  className="flex items-center gap-2 duration-200 hover:text-red-500"
                  rel="noopener noreferrer"
                >
                  Instagram <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://t.me/Trinkonfox"
                  target="_blank"
                  className="flex items-center gap-2 duration-200 hover:text-red-500"
                  rel="noopener noreferrer"
                >
                  Telegram <Send className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/37360833389"
                  target="_blank"
                  className="flex items-center gap-2 duration-200 hover:text-red-500"
                  rel="noopener noreferrer"
                >
                  WhatsApp <MessageCircleMore className="h-5 w-5" />
                </a>
                <a
                  href="viber://chat?number=%2B37360833389"
                  target="_blank"
                  className="flex items-center gap-2 duration-200 hover:text-red-500"
                  rel="noopener noreferrer"
                >
                  Viber <MessageCircleHeart className="h-5 w-5" />
                </a>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}
