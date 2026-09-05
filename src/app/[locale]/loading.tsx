import { Skeleton } from '@/components/ui/skeleton'

export default function LocaleLoading() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-900 pt-30 pb-20">
      <div className="container flex flex-col gap-10">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4">
          <Skeleton className="h-10 w-3/4 bg-zinc-800" />
          <Skeleton className="h-6 w-2/3 bg-zinc-800" />
          <Skeleton className="h-5 w-full bg-zinc-800" />
          <Skeleton className="h-5 w-5/6 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} className="h-80 w-full bg-zinc-800" />
          ))}
        </div>
      </div>
    </main>
  )
}
