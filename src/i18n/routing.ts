import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['ru', 'ro', 'uk', 'it', 'en'],
  defaultLocale: 'ru',
  localePrefix: 'as-needed',
  alternateLinks: false,
  localeDetection: false
})

export type AppLocale = (typeof routing.locales)[number]
