'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { usePathname } from 'next/navigation'
import { ReactNode, useLayoutEffect } from 'react'

const queryClient = new QueryClient()

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <SpeedInsights />
      <Analytics />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  )
}
