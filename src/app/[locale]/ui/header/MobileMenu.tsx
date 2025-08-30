import { Instagram, Menu, MessageCircleHeart, MessageCircleMore, PhoneOutgoing, Send } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

export default async function MobileMenu() {
  const [t, tSpeed] = await Promise.all([getTranslations('homePage'), getTranslations('pageSpeedLabel')])

  const links = t.raw('header.links') as { label: string; href: string }[]
  const burgerAria = tSpeed('burgerMenu')

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
            <nav className="flex flex-col gap-4 py-6">
              {links.map((link) => (
                <SheetClose key={link.href} asChild>
                  <Link href={link.href} className="relative pb-1 transition-colors duration-300 hover:text-red-500">
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="flex flex-col gap-10">
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
