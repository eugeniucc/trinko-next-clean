'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

type Props = {
  locale: string
  links: { label: string; href: string }[]
}

const normalize = (p: string) => (p !== '/' && p.endsWith('/') ? p.slice(0, -1) : p)

const getLocalizedPath = (locale: string, href: string) => {
  if (locale === 'ru') return normalize(href)
  return normalize(`/${locale}${href}`)
}

export default function NavigationLink({ locale, links }: Props) {
  const pathnameRaw = usePathname()
  const pathname = normalize(pathnameRaw)

  return (
    <ul className="flex items-center gap-6">
      {links.map(({ label, href }) => {
        if (locale !== 'ru' && href.startsWith('/blog')) return null

        const fullPath = getLocalizedPath(locale, href)
        const isPermanent = href === '/permanent'

        const isActive = pathname === fullPath || pathname.startsWith(fullPath + '/')

        return (
          <li key={href}>
            <Link
              href={getLocalizedPath(locale, href)}
              className={cn(
                'transition-colors duration-300',
                isActive ? (isPermanent ? 'text-fuchsia-500' : 'text-red-500') : 'text-white hover:text-red-500'
              )}
            >
              {label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
