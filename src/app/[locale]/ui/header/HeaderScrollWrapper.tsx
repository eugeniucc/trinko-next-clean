'use client'

import { ReactNode, useLayoutEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type Props = {
  children: ReactNode
}

export const HeaderScrollWrapper = ({ children }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useLayoutEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn('fixed top-0 z-20 w-full transition-all duration-300', isScrolled ? 'bg-zinc-900 shadow-md backdrop-blur' : 'bg-transparent')}
    >
      {children}
    </header>
  )
}
