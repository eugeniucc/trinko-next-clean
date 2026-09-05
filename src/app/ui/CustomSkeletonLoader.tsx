import { cn } from '@/lib/utils'

type SkeletonLoaderProps = {
  className?: string
}

export const CustomSkeletonLoader = ({ className }: SkeletonLoaderProps) => {
  return <div className={cn('w-full animate-pulse rounded-md bg-zinc-800', className || '')} />
}
