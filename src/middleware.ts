import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const SUPPORTED_LOCALES = ["en", "ru", "de", "fr"];
const DEFAULT_LOCALE = "ru";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const pathnameIsMissingLocale = SUPPORTED_LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const acceptLang = request.headers.get("accept-language");
    const preferredLocale =
      acceptLang?.split(",")[0].split("-")[0] || DEFAULT_LOCALE;

    const locale = SUPPORTED_LOCALES.includes(preferredLocale)
      ? preferredLocale
      : DEFAULT_LOCALE;

    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  const localeFromPath =
    SUPPORTED_LOCALES.find((locale) => pathname.startsWith(`/${locale}`)) ||
    DEFAULT_LOCALE;

  const response = NextResponse.next();
  response.headers.set("x-locale", localeFromPath);

  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
