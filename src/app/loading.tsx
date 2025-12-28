import Image from 'next/image'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
}

export default function Loading({ className }: Props) {
  return (
    <div className={cn('flex h-screen w-full flex-col items-center justify-center gap-4 bg-zinc-900', className || '')}>
      <Image src="/logo.svg" alt="Логотип OblivionTattoo" width={64} height={91} unoptimized />
      <div className="flex flex-col gap-2 text-center">
        <p className="text-muted-foreground text-sm font-medium">OblivionTattoo...</p>
        <div className="h-1.5 w-48 overflow-hidden rounded-full bg-white">
          <div className="bg-primary h-full animate-[loading-bar_2s_infinite] rounded-full" />
        </div>
      </div>
    </div>
  )
}
