import createMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

const ALLOWED_HOSTS = new Set(['obliviontattoo.xyz', 'www.obliviontattoo.xyz', 'localhost:3000', 'trinko-next-clean.vercel.app'])

const BLOG_ONLY_LOCALE = 'ru'

const LOCALES = routing.locales.join('|')
const BLOG_PATH_RE = new RegExp(`^/(?:${LOCALES})/blog(?:/|$)`)

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith('/api/')) {
    const host = req.headers.get('host')
    if (!host || !ALLOWED_HOSTS.has(host)) {
      return new NextResponse('Forbidden', { status: 403 })
    }
    return NextResponse.next()
  }

  if (BLOG_PATH_RE.test(pathname)) {
    const locale = pathname.split('/')[1]
    if (locale && locale !== BLOG_ONLY_LOCALE) {
      const url = req.nextUrl.clone()
      url.pathname = `/${locale}`
      url.search = ''
      return NextResponse.redirect(url, 307)
    }
  }

  return intlMiddleware(req)
}

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)']
}
