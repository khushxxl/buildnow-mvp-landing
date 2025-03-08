import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const subdomain = hostname.split(".")[0]; // Extracts "subdomain" from "subdomain.example.com"

  if (subdomain === "studio") {
    // Rewrite to a specific route or modify the request
    return NextResponse.rewrite(new URL("/studio", request.url));
  }

  // Default behavior for main domain
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"], // Apply to all routes except static assets
};
