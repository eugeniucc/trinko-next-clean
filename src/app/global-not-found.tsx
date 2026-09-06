import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: '404 — Page Not Found | Oblivion Tattoo',
  description: 'The requested page could not be found.'
}

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white">
        <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center justify-center gap-4">
              <p className="font-montserrat text-9xl font-bold text-white">4</p>
              <Image
                src="/logo.svg"
                alt="Oblivion Tattoo logo"
                width={120}
                height={120}
                loading="eager"
                unoptimized
              />
              <p className="font-montserrat text-9xl font-bold text-white">4</p>
            </div>

            <h1 className="font-montserrat text-4xl font-bold">Page not found</h1>
            <p className="text-gray-400">But you can still get a tattoo!</p>

            <Link href="/" className="text-white transition-colors hover:text-red-500">
              Go back and book a tattoo
            </Link>
          </div>
        </main>
      </body>
    </html>
  )
}
