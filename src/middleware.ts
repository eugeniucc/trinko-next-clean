import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const supportedLocales = ["ru", "en"];
const defaultLocale = "ru";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  const hasLocale = supportedLocales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    const acceptLang = request.headers.get("accept-language") || "";
    const detectedLang =
      acceptLang.split(",")[0]?.split("-")[0] || defaultLocale;

    const targetLocale = supportedLocales.includes(detectedLang)
      ? detectedLang
      : defaultLocale;

    return NextResponse.redirect(
      new URL(`/${targetLocale}${search}`, request.url)
    );
  }

  if (
    !hasLocale &&
    !pathname.startsWith("/_next") &&
    !pathname.startsWith("/api")
  ) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}${search}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|_next).*)"],
};
