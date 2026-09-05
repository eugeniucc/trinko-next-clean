import { Skeleton } from '@/components/ui/skeleton'

export const BlogCardSkeleton = () => (
  <div className="flex h-100 flex-col gap-6 rounded-md border border-zinc-700 p-4">
    <Skeleton className="mx-auto h-24 w-16 bg-zinc-800" />
    <Skeleton className="h-8 w-4/5 bg-zinc-800" />
    <div className="space-y-3">
      <Skeleton className="h-4 w-full bg-zinc-800" />
      <Skeleton className="h-4 w-11/12 bg-zinc-800" />
      <Skeleton className="h-4 w-3/4 bg-zinc-800" />
    </div>
    <Skeleton className="mt-auto h-5 w-28 bg-zinc-800" />
    <Skeleton className="h-10 w-full bg-zinc-800" />
  </div>
)
