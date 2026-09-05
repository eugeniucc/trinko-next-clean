'use client'

import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Logo() {
  const locale = useLocale()

  const pathname = usePathname()
  const isPermanent = pathname?.split('/').filter(Boolean).at(-1) === 'permanent'

  return (
    <Link href={`/${locale}`}>
      <Image
        src={isPermanent ? '/logo-pickme.svg' : '/logo.svg'}
        alt={isPermanent ? 'PickMe Permanent Makeup' : 'Тату салон в Кишиневе Oblivion Tattoo'}
        width={64}
        height={91}
        loading="eager"
        fetchPriority="high"
        unoptimized
      />
    </Link>
  )
}
