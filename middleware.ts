import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const pathname = req.nextUrl.pathname;

  const isCustomDomain =
    host === "oxyloc.fr" ||
    host === "www.oxyloc.fr";

  const isSystemPath =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml";

  // IMPORTANT: redirect (not rewrite) so pathname becomes /standby in the browser
  if (isCustomDomain && !isSystemPath && pathname !== "/standby") {
    const url = req.nextUrl.clone();
    url.pathname = "/standby";
    url.search = ""; // optional: keep it clean
    return NextResponse.redirect(url, 307);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
