import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/request';

const protectedRoutes = [
  '/dashboard',
  '/profile',
  '/settings',
  '/lessons',
  '/courses',
  '/leaderboard',
  '/help',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the path is a protected route
  const isProtectedRoute = protectedRoutes.some((route) => 
    pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    const authToken = request.cookies.get('auth_token')?.value;

    if (!authToken) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/settings/:path*',
    '/lessons/:path*',
    '/courses/:path*',
    '/leaderboard/:path*',
    '/help/:path*',
  ],
};
