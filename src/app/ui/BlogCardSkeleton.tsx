export const BlogCardSkeleton = () => (
  <div className="flex h-100 flex-col gap-6 rounded-md border border-zinc-700 p-4 animate-pulse">
    <div className="mx-auto h-24 w-16 rounded bg-zinc-800" />
    <div className="h-8 w-4/5 rounded bg-zinc-800" />
    <div className="space-y-3">
      <div className="h-4 w-full rounded bg-zinc-800" />
      <div className="h-4 w-11/12 rounded bg-zinc-800" />
      <div className="h-4 w-3/4 rounded bg-zinc-800" />
    </div>
    <div className="mt-auto h-5 w-28 rounded bg-zinc-800" />
    <div className="h-10 w-full rounded bg-zinc-800" />
  </div>
)
