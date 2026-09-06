'use client'

import { Languages } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { AppLocale, routing } from '@/i18n/routing'

export const LangSwitcher = ({ locale, ariaLabel }: { locale: string; ariaLabel: string }) => {
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const handleLanguageChange = (newLocale: AppLocale) => {
    startTransition(() => {
      const segments = pathname.split('/')

      if (routing.locales.includes(segments[1] as AppLocale)) {
        segments[1] = newLocale
      } else {
        segments.splice(1, 0, newLocale)
      }

      const newPath = segments.join('/')
      router.push(newPath)
    })
  }

  return (
    <Select value={locale} onValueChange={handleLanguageChange} disabled={isPending}>
      <SelectTrigger
        aria-label={ariaLabel}
        data-gtm="language-switcher"
        className="flex w-fit min-w-30 items-center gap-2 bg-transparent text-white [&>svg]:text-white!"
      >
        <Languages className="text-white" size={16} />
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((localeOption) => (
          <SelectItem key={localeOption} value={localeOption} data-gtm="language-switch" data-gtm-locale={localeOption}>
            <div className="flex items-center gap-2">{localeOption.toUpperCase()}</div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
