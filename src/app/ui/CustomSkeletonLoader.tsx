import Image from 'next/image'
import { cn } from '@/lib/utils'

type SkeletonLoaderProps = {
  className?: string
}

export const CustomSkeletonLoader = ({ className }: SkeletonLoaderProps) => {
  return (
    <div className={cn('flex w-full animate-pulse items-center justify-center rounded-md bg-neutral-400', className || '')}>
      <Image src="/logo.svg" alt="тату салон в Кишиневе OblivionTattoo" width={64} height={91} unoptimized />
    </div>
  )
}
