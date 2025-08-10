'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  const router = useRouter()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-zinc-900 p-4">
      <div className="bg-card w-full max-w-md space-y-6 rounded-lg border p-8 text-center shadow-sm">
        <div className="space-y-2">
          <h1 className="text-destructive text-4xl font-bold tracking-tight">Something went wrong</h1>
          <p className="text-muted-foreground">We apologize for the inconvenience. Please try again or contact support if the problem persists.</p>
          <p className="text-muted-foreground text-sm">Error: {error.message || 'Unknown error'}</p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Button variant="outline" onClick={() => router.back()} className="w-full sm:w-auto">
            Go Back
          </Button>
          <Button onClick={() => reset()} variant="default" className="w-full sm:w-auto">
            Try Again
          </Button>
        </div>

        <div className="text-muted-foreground pt-4 text-sm">
          <p>
            Need help?{' '}
            <a href="https://t.me/d0nt_sell" className="text-primary font-medium hover:underline">
              Contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
