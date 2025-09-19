'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { usePathname } from 'next/navigation'
import { ReactNode, useLayoutEffect, useState } from 'react'
import { LazyGTM } from './seo/LazyGTM'
import { LazyJivoChat } from './seo/LazyJivoChat'

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  const [queryClient] = useState(() => new QueryClient())

  useLayoutEffect(() => {
    if (location.hash) return
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <QueryClientProvider client={queryClient}>
      <SpeedInsights />
      <LazyGTM />
      <LazyJivoChat />
      {children}
    </QueryClientProvider>
  )
}
