import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './lib/translations';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Si la ruta ya tiene un locale, permitirla
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Si es la raíz o una ruta sin locale, permitirla (será inglés por defecto)
  if (pathname === '/' || !pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};

