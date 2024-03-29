import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get("refreshToken");

  if (request.nextUrl.pathname.startsWith("/")) {
    if (!refreshToken) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }
}

export const config = {
  matcher: ["/"],
};
