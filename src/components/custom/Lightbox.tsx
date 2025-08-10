'use client'

import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import { useEffect } from 'react'

type Props = {
  children: React.ReactNode
  gallery?: string
}

const Lightbox = ({ gallery, children }: Props) => {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: `#${gallery}`,
      children: 'a',
      pswpModule: () => import('photoswipe')
    })
    lightbox.init()
    return () => lightbox.destroy()
  }, [gallery])

  return <>{children}</>
}

export default Lightbox
