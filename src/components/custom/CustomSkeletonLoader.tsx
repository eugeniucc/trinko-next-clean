import Image from 'next/image'
import { cn } from '@/lib/utils'

type SkeletonLoaderProps = {
  className?: string
}

export const CustomSkeletonLoader = ({ className }: SkeletonLoaderProps) => {
  return (
    <div className={cn('flex w-full animate-pulse items-center justify-center rounded-md bg-neutral-400', className || '')}>
      <Image className="animate-spin" src="/logo/icon.png" alt="тату салон в Кишиневе TrinkoTattoo" width={72} height={72} priority />
    </div>
  )
}
