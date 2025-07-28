import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['ru', 'ro', 'uk', 'it', 'en'],
  defaultLocale: 'ru'
})

export type AppLocale = (typeof routing.locales)[number]
