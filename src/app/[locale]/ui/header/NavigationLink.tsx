'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

type Props = {
  locale: string
  links: { label: string; href: string }[]
}

export default function NavigationLink({ locale, links }: Props) {
  const pathname = usePathname()

  return (
    <ul className="flex items-center gap-6">
      {links.map(({ label, href }) => {
        const fullPath = `/${locale}${href}`
        const isActive = pathname === fullPath
        const isPermanent = href === '/permanent'

        return (
          <li key={href}>
            <Link
              href={href}
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
