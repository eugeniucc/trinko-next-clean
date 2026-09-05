'use client'

import { Messages, NextIntlClientProvider } from 'next-intl'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { ReactNode } from 'react'

type ProvidersProps = {
  children: ReactNode
  locale: string
  messages: Messages
}

export function Providers({ children, locale, messages }: ProvidersProps) {
  return (
    <NuqsAdapter>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </NuqsAdapter>
  )
}
