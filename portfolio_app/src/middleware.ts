import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'fr'] as const;
type Locale = (typeof locales)[number];

// Example function: detect locale from headers or default
function getLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferred = acceptLanguage.split(',')[0];
    const matched = locales.find((locale) => preferred.startsWith(locale));
    if (matched) return matched;
  }
  return 'en'; // fallback locale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip next internal and API routes (optional safety check)
  if (pathname.startsWith('/_next') || pathname.startsWith('/api')) {
    return;
  }

  // Check if there’s already a locale in the path
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if missing locale
  const locale = getLocale(request);
  const newUrl = request.nextUrl.clone();
  newUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Apply to all paths except internal (_next) and static files
    '/((?!_next|favicon.ico|assets|api).*)',
  ],
};