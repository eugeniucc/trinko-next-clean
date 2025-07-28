import Image from 'next/image'

export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-zinc-900">
      <Image className="animate-spin [animation-duration:3s]" src="/logo/icon.png" alt="Логотип TrinkoTattoo" width={120} height={120} />
      <div className="flex flex-col gap-2 text-center">
        <p className="text-muted-foreground text-sm font-medium">Loading...</p>
        <div className="h-1.5 w-48 overflow-hidden rounded-full bg-white">
          <div className="bg-primary h-full animate-[loading-bar_2s_infinite] rounded-full" />
        </div>
      </div>
    </div>
  )
}
