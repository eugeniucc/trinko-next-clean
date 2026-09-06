'use client'

import React, { useEffect, useRef, useState } from 'react'

type Props = {
  className?: string
  children: React.ReactNode
}

const INITIAL_OPACITY = 0
const INITIAL_Y = 20
const ANIMATE_OPACITY = 1
const ANIMATE_Y = 0
const TRANSITION_DURATION = 0.5

export const FramerMotionContainer = ({ className, children }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || inView) return

    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setInView(true)
        observer.disconnect()
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [inView])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? ANIMATE_OPACITY : INITIAL_OPACITY,
        transform: `translateY(${inView ? ANIMATE_Y : INITIAL_Y}px)`,
        transition: `opacity ${TRANSITION_DURATION}s ease, transform ${TRANSITION_DURATION}s ease`
      }}
    >
      {children}
    </div>
  )
}
