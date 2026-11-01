'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { routing } from '@/i18n/routing'

export default function Logo({ locale }: { locale: string }) {
  const pathname = usePathname()
  const isPermanent = pathname?.split('/').filter(Boolean).at(-1) === 'permanent'

  return (
    <Link href={locale === routing.defaultLocale ? '/' : `/${locale}`} data-gtm="nav-home-logo">
      <Image
        src={isPermanent ? '/logo-pickme.svg' : '/logo.svg'}
        alt={isPermanent ? 'PickMe Permanent Makeup' : 'Тату салон в Кишиневе Oblivion Tattoo'}
        width={64}
        height={91}
        loading="eager"
        fetchPriority="low"
        unoptimized
      />
    </Link>
  )
}
