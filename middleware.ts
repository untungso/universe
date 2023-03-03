import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "@/utils";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    [
      "/assets/512x512.png",
      "/music/cyber-war-126419.mp3",
      "/music/snow-132947.mp3",
      "/music/space-120280.mp3",
      "/favicon.ico",
      "/robots.txt",
    ].includes(pathname)
  )
    return;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = "id";

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
