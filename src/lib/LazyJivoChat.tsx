'use client'

import { useEffect } from 'react'

export const LazyJivoChat = () => {
  useEffect(() => {
    let script: HTMLScriptElement | null = null

    const timeout = window.setTimeout(() => {
      script = document.createElement('script')
      script.src = 'https://code.jivosite.com/widget/w9UCfRlMLQ'
      script.async = true

      document.body.appendChild(script)
    }, 3000)

    return () => {
      window.clearTimeout(timeout)
      script?.remove()
    }
  }, [])

  return null
}
