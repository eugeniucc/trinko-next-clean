'use client'

import { useEffect } from 'react'

export const JivoChat = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.src = 'https://code.jivosite.com/widget/z65l5BJYyj'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])
  return null
}
