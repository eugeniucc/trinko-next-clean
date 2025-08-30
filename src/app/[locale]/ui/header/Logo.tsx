'use client'

import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Logo() {
  const locale = useLocale()

  const pathname = usePathname()

  return (
    <Link href={`/${locale}`}>
      <Image
        src={pathname === `/${locale}/permanent` ? '/logo/logo-pickme.png' : `/logo/logo.png`}
        alt="Тату салон в Кишиневе OblivionTattoo"
        width={64}
        height={91}
        priority
      />
    </Link>
  )
}
