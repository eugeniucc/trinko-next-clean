'use client'

import { PhoneOutgoing } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Send } from 'lucide-react'
import { MessageCircleMore } from 'lucide-react'
import { MessageCircleHeart } from 'lucide-react'
import { usePathname } from 'next/navigation'

export const HeaderContacts = () => {
  const pathname = usePathname()

  return (
    <div className="absolute top-4 left-1/2 z-20 container mx-auto -translate-x-1/2 transform p-4">
      <div className={`hidden lg:block ${pathname === '' ? 'bg-zinc-900 text-white' : 'bg-transparent text-black'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-20">
            <a className="flex items-center gap-2 text-white duration-200 hover:text-red-500" href="tel:+37379146506">
              <PhoneOutgoing className="h-5 w-5" />
              <p>+37379146506</p>
            </a>
            <p className="text-white">Opening Hours: Mn-Sun: 10 am-8 pm</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/trinko_tattoo/"
              target="_blank"
              className="flex items-center gap-2 text-white duration-200 hover:text-red-500"
            >
              Instagram <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://t.me/Trinkonfox"
              target="_blank"
              className="flex items-center gap-2 text-white duration-200 hover:text-red-500"
            >
              Telegram <Send className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/37360833389"
              target="_blank"
              className="flex items-center gap-2 text-white duration-200 hover:text-red-500"
            >
              WhatsApp <MessageCircleMore className="h-5 w-5" />
            </a>
            <a
              href="viber://chat?number=%2B37360833389"
              target="_blank"
              className="flex items-center gap-2 text-white duration-200 hover:text-red-500"
            >
              Viber <MessageCircleHeart className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
