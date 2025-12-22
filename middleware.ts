import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const pathname = req.nextUrl.pathname;

  const isCustomDomain =
    host === "oxyloc.fr" ||
    host === "www.oxyloc.fr";

  // Laisse passer les assets Next, API, favicon, etc.
  const isSystemPath =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml";

  // Page standby accessible seulement sur le domaine custom
  if (isCustomDomain && !isSystemPath && pathname !== "/standby") {
    const url = req.nextUrl.clone();
    url.pathname = "/standby";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
