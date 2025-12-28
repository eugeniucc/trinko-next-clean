import { CustomSectionAria } from '@/app/ui/CustomSectionAria'
import { CustomSkeletonLoader } from '@/app/ui/CustomSkeletonLoader'

export default function BlogLoading() {
  return (
    <CustomSectionAria aria="Блог Oblivion Tattoo" className="relative flex min-h-screen items-center justify-center bg-zinc-900 pt-30">
      <div className="container flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <div className="mx-auto h-10 w-3/4 animate-pulse rounded bg-zinc-800" />
          <div className="space-y-2">
            <div className="h-6 w-full animate-pulse rounded bg-zinc-800" />
            <div className="mx-auto h-6 w-5/6 animate-pulse rounded bg-zinc-800" />
          </div>
          <div className="mx-auto h-6 w-2/3 animate-pulse rounded bg-zinc-800" />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <CustomSkeletonLoader className="h-[400px]" key={i} />
          ))}
        </div>
      </div>
    </CustomSectionAria>
  )
}
