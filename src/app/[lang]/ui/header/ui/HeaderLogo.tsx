import Link from 'next/link'
import Image from 'next/image'

export const HeaderLogo = () => {
  return (
    <Link href={'/'}>
      <Image src="/logo/icon.png" alt="Logo" width={72} height={72} priority />
    </Link>
  )
}
