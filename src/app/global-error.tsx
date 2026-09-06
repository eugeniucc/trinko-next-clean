'use client'

import { useEffect } from 'react'
import { SUPPORT_TELEGRAM } from '@/lib/contactLinks'

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html>
      <body>
        <div className="flex h-screen w-full flex-col items-center justify-center bg-zinc-900 p-4">
          <div className="flex w-full max-w-md flex-col gap-4 rounded-lg border bg-white p-8 text-center shadow-sm">
            <div className="flex flex-col gap-4">
              <h1 className="text-destructive text-4xl font-bold tracking-tight">Critical Error</h1>
              <p className="text-muted-foreground">
                A serious error occurred. Please try again later.
              </p>
              {error.digest && <p className="text-muted-foreground text-sm">Error reference: {error.digest}</p>}
            </div>

            <div className="text-muted-foreground text-sm">
              <p>
                Need immediate help?{' '}
                <a href={SUPPORT_TELEGRAM} data-gtm="telegram" className="text-primary hover:underline">
                  Contact support
                </a>
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
