'use client'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { usePathname } from 'next/navigation'
import { ReactNode, useLayoutEffect } from 'react'

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <SpeedInsights />
      <Analytics />
      {children}
    </>
  )
}
