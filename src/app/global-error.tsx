'use client'

import * as Sentry from '@sentry/nextjs'
import { useEffect } from 'react'

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    Sentry.captureException(error)
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
                A serious error occurred. We have been notified and are working on a fix. Please try again later.
              </p>
              {error.digest && <p className="text-muted-foreground text-sm">Error reference: {error.digest}</p>}
            </div>

            <div className="text-muted-foreground text-sm">
              <p>
                Need immediate help?{' '}
                <a href="https://t.me/d0nt_sell" className="text-primary hover:underline">
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
