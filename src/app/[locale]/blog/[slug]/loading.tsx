import { Skeleton } from '@/components/ui/skeleton'

export default function BlogPostLoading() {
  return (
    <main className="min-h-screen bg-zinc-900 pt-30 pb-20">
      <article className="container flex flex-col gap-8 text-white">
        <Skeleton className="mx-auto h-12 w-3/4 bg-zinc-800" />
        <Skeleton className="mx-auto h-5 w-40 bg-zinc-800" />
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
          <Skeleton className="h-5 w-full bg-zinc-800" />
          <Skeleton className="h-5 w-full bg-zinc-800" />
          <Skeleton className="h-5 w-5/6 bg-zinc-800" />
          <Skeleton className="mt-6 h-80 w-full bg-zinc-800" />
          <Skeleton className="h-5 w-full bg-zinc-800" />
          <Skeleton className="h-5 w-11/12 bg-zinc-800" />
          <Skeleton className="h-5 w-4/5 bg-zinc-800" />
        </div>
      </article>
    </main>
  )
}
