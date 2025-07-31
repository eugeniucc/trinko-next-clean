import { getLocale } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'

export default async function Logo() {
  const locale = await getLocale()

  return (
    <Link href={`/${locale}`}>
      <Image src="/logo/icon.png" alt="Тату салон в Кишиневе TrinkoTattoo" width={64} height={64} priority />
    </Link>
  )
}
