import Image from 'next/image'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
}

export const CustomLoading = ({ className }: Props) => {
  return (
    <div className={cn('container flex h-full min-h-[50dvh] w-full items-center justify-center bg-transparent', className || '')}>
      <Image src="/logo.svg" alt="тату салон в Кишиневе OblivionTattoo" width={64} height={91} unoptimized />
    </div>
  )
}
