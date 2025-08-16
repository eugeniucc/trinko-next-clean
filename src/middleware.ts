import createMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

const ALLOWED_HOSTS = new Set(['trinkotattoo.ink', 'www.trinkotattoo.ink', 'localhost:3000', 'trinko-next-clean.vercel.app'])

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname

  if (pathname.startsWith('/api/')) {
    const host = req.headers.get('host')
    if (!host || !ALLOWED_HOSTS.has(host)) {
      return new NextResponse('Forbidden', { status: 403 })
    }
    return NextResponse.next()
  }

  return intlMiddleware(req)
}

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)']
}
