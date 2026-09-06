'use client'

import 'photoswipe/style.css'
import { useEffect, useRef } from 'react'

type Props = {
  children: React.ReactNode
  gallery?: string
}

const Lightbox = ({ gallery, children }: Props) => {
  const lightboxRef = useRef<import('photoswipe/lightbox').default | null>(null)

  useEffect(() => {
    return () => lightboxRef.current?.destroy()
  }, [])

  const handleClick = async (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target
    if (!(target instanceof Element)) return

    const link = target.closest<HTMLAnchorElement>('a')
    if (!link) return

    const container = event.currentTarget
    event.preventDefault()

    if (!lightboxRef.current) {
      const { default: PhotoSwipeLightbox } = await import('photoswipe/lightbox')
      const lightbox = new PhotoSwipeLightbox({
        gallery: `#${gallery}`,
        children: 'a',
        pswpModule: () => import('photoswipe')
      })
      lightbox.init()
      lightboxRef.current = lightbox
    }

    const links = Array.from(container.querySelectorAll('a'))
    lightboxRef.current.loadAndOpen(links.indexOf(link))
  }

  return <div className="contents" onClick={handleClick}>{children}</div>
}

export default Lightbox
