import { NextRequest, NextResponse } from 'next/server';
import { type SupportedLocales, locales } from './internationlization/locales';

function ignorePath(path: string): boolean {
 const targetPaths = ['/api', '/static'];
 return path.includes('.') || targetPaths.some((item) => path.startsWith(item));
}

function getLocale(): SupportedLocales {
 return 'fa';
}

export function middleware(req: NextRequest) {
 const path = req.nextUrl.pathname;
 if (ignorePath(path)) return;
 const pathIncludesLocale = locales.some(
  (locale) => path.startsWith(`/${locale}/`) || path === `/${locale}`
 );
 if (pathIncludesLocale) return;
 const locale = getLocale();
 req.nextUrl.pathname = `/${locale}${path}`;
 return NextResponse.redirect(req.nextUrl);
}

export const config = {
 matcher: ['/((?!_next).*)'],
};
