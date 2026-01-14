import createMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

const BLOG_ONLY_LOCALE = 'ru'
const LOCALES = routing.locales.join('|')
const BLOG_PATH_RE = new RegExp(`^/(?:${LOCALES})/blog(?:/|$)`)

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname === '/') {
    const url = req.nextUrl.clone()
    url.pathname = `/${routing.defaultLocale}`
    url.search = ''
    return NextResponse.redirect(url, 301)
  }

  if (BLOG_PATH_RE.test(pathname)) {
    const locale = pathname.split('/')[1]
    if (locale && locale !== BLOG_ONLY_LOCALE) {
      const url = req.nextUrl.clone()
      url.pathname = `/${locale}`
      url.search = ''
      return NextResponse.redirect(url, 301)
    }
  }

  return intlMiddleware(req)
}

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)']
}
