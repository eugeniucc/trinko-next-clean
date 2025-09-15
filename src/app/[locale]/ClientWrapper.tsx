'use client'

import { SpeedInsights } from '@vercel/speed-insights/next'
import { usePathname } from 'next/navigation'
import { ReactNode, useLayoutEffect } from 'react'
import { LazyGTM } from './seo/LazyGTM'
import { LazyJivoChat } from './seo/LazyJivoChat'

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  useLayoutEffect(() => {
    if (location.hash) return
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <SpeedInsights />
      <LazyGTM />
      <LazyJivoChat />
      {children}
    </>
  )
}
