'use client'

import { ReactNode } from 'react'
import { LazyGTM } from './seo/LazyGTM'
import { LazyJivoChat } from './seo/LazyJivoChat'

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <>
      <LazyGTM />
      <LazyJivoChat />
      {children}
    </>
  )
}
