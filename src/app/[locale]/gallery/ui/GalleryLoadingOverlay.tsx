import Image from 'next/image'

export const GalleryLoadingOverlay = () => (
  <div className="absolute inset-0 z-10 flex min-h-0 items-center justify-center bg-zinc-900/80" aria-label="Loading gallery">
    <Image src="/logo.svg" alt="Oblivion Tattoo" width={64} height={91} unoptimized />
  </div>
)
