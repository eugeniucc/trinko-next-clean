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
    threshold: 0.8,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      className={props.className}
      initial={{ opacity: props.initial.opacity, y: props.initial.y }}
      animate={inView ? { opacity: props.animate.opacity, y: props.animate.y } : {}}
      transition={{ duration: props.duration }}
    >
      {props.children}
    </motion.div>
  )
}
