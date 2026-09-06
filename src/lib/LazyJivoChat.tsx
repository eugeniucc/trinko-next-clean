'use client'

import { useEffect } from 'react'

export const LazyJivoChat = () => {
  useEffect(() => {
    let script: HTMLScriptElement | null = null
    let timeout: number | undefined

    const loadChat = () => {
      if (script) return
      script = document.createElement('script')
      script.src = 'https://code.jivosite.com/widget/w9UCfRlMLQ'
      script.async = true

      document.body.appendChild(script)
      events.forEach((event) => window.removeEventListener(event, loadChat))
    }

    const events: (keyof WindowEventMap)[] = ['pointerdown', 'keydown', 'touchstart']
    events.forEach((event) => window.addEventListener(event, loadChat, { once: true, passive: true }))
    timeout = window.setTimeout(loadChat, 15000)

    return () => {
      if (timeout) window.clearTimeout(timeout)
      events.forEach((event) => window.removeEventListener(event, loadChat))
      script?.remove()
    }
  }, [])

  return null
}
