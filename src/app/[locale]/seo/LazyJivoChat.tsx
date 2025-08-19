'use client'

import { useEffect } from 'react'

export const LazyJivoChat = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const script = document.createElement('script')
      script.src = 'https://code.jivosite.com/widget/z65l5BJYyj'
      script.async = true
      document.body.appendChild(script)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  return null
}
