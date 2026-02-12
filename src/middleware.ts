import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host") || "";
  
  // Target domain: www.smilexpertsdental.com with https
  const targetHost = "www.smilexpertsdental.com";
  
  // Check if we need to redirect (non-www or different hostname)
  if (hostname !== targetHost) {
    // Build the target URL with https and www
    url.host = targetHost;
    url.protocol = "https:";
    
    // Preserve the pathname and search params
    return NextResponse.redirect(url, 301);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|xml|txt)).*)",
  ],
};
