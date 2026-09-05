'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import React from 'react'

type Props = {
  className?: string
  children: React.ReactNode
  initial: { opacity: number; y: number }
  animate: { opacity: number; y: number }
  duration?: number
}

export const FramerMotionContainer = ({ ...props }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px',
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      className={props.className}
      initial={{ opacity: props.initial.opacity, y: props.initial.y }}
      animate={inView ? { opacity: props.animate.opacity, y: props.animate.y } : { opacity: props.initial.opacity, y: props.initial.y }}
      transition={{ duration: props.duration }}
    >
      {props.children}
    </motion.div>
  )
}
