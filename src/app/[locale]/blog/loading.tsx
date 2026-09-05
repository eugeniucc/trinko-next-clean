import { BlogCardSkeleton } from '@/app/[locale]/blog/ui/BlogCardSkeleton'
import { Skeleton } from '@/components/ui/skeleton'

export default function BlogLoading() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-zinc-900 pt-30">
      <div className="container flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <Skeleton className="mx-auto h-10 w-3/4 bg-zinc-800" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-full bg-zinc-800" />
            <Skeleton className="mx-auto h-6 w-5/6 bg-zinc-800" />
          </div>
          <Skeleton className="mx-auto h-6 w-2/3 bg-zinc-800" />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {[...Array(6)].map((_, i) => <BlogCardSkeleton key={i} />)}
        </div>
      </div>
    </section>
  )
}
