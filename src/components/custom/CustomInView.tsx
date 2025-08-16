'use client'

import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  minHeight?: number
  rootMargin?: string
}

export const CustomInView = ({ ...props }: Props) => {
  const { ref, inView } = useInView({
    rootMargin: props.rootMargin,
    triggerOnce: true
  })

  return (
    <div className={`min-h-[${props.minHeight}px]`} ref={ref}>
      {inView && props.children}
    </div>
  )
}
