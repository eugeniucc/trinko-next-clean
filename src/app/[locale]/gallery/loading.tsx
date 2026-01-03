import { CustomSkeletonLoader } from '@/app/ui/CustomSkeletonLoader'

export default function GalleryLoading() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-zinc-900 py-30">
      <div className="container flex flex-col gap-10">
        <div className="flex flex-col gap-6 text-center">
          <div className="mx-auto h-10 w-3/4 animate-pulse rounded bg-zinc-800" />
          <div className="mx-auto h-6 w-2/3 animate-pulse rounded bg-zinc-800" />
          <div className="mx-auto max-w-5xl space-y-2">
            <div className="h-6 w-full animate-pulse rounded bg-zinc-800" />
            <div className="mx-auto h-6 w-5/6 animate-pulse rounded bg-zinc-800" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <CustomSkeletonLoader className="h-100" key={i} />
          ))}
        </div>

        <div className="flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-10 w-10 animate-pulse rounded bg-zinc-800" />
          ))}
        </div>
      </div>
    </section>
  )
}
