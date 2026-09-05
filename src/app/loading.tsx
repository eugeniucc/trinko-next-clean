import { LoaderCircle } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
}

export default function Loading({ className }: Props) {
  return (
    <div className={cn('flex h-screen w-full flex-col items-center justify-center gap-5 bg-zinc-900', className || '')} role="status" aria-label="Loading">
      <Image src="/logo.svg" alt="Logo Oblivion Tattoo" width={64} height={91} unoptimized priority />
      <div className="flex items-center gap-2 text-sm font-medium text-zinc-400">
        <LoaderCircle className="size-4 animate-spin text-red-500" aria-hidden="true" />
        <span>Loading...</span>
      </div>
    </div>
  )
}
