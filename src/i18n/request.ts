import { hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { locale as rootLocale } from 'next/root-params'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ locale: overrideLocale }) => {
  const requested = overrideLocale ?? (await rootLocale())

  if (!hasLocale(routing.locales, requested)) {
    notFound()
  }

  const locale = requested

  return {
    locale,
    timeZone: 'UTC',
    messages: (await import(`../../messages/${locale}.json`)).default
  }
})
