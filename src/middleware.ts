import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostHeader = request.headers.get("host") || "";
  
  // Remove port from hostname if present (e.g., "smilexpertsdental.com:3000" -> "smilexpertsdental.com")
  const hostnameWithoutPort = hostHeader.split(":")[0];
  const hasPort = hostHeader.includes(":");
  
  // Skip redirects for localhost (development)
  if (hostnameWithoutPort === "localhost" || hostnameWithoutPort.startsWith("127.0.0.1")) {
    return NextResponse.next();
  }
  
  // Target domain: www.smilexpertsdental.com with https
  const targetHost = "www.smilexpertsdental.com";
  
  // Check if we need to redirect:
  // 1. Hostname doesn't match target (non-www, different domain)
  // 2. Hostname matches but has a port (e.g., www.smilexpertsdental.com:3000)
  // 3. Protocol is HTTP instead of HTTPS
  const needsRedirect = 
    hostnameWithoutPort !== targetHost || 
    hasPort || 
    url.protocol === "http:";
  
  if (needsRedirect) {
    // Build the target URL using URL constructor to ensure no port is included
    // Preserve pathname and search params
    const pathWithQuery = url.pathname + (url.search || "");
    const redirectUrl = new URL(pathWithQuery, `https://${targetHost}`);
    
    // Return 301 permanent redirect
    return NextResponse.redirect(redirectUrl, 301);
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
