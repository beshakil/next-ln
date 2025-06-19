// import createMiddleware from 'next-intl/middleware';
// import { routing } from './i18n/routing';

// export default createMiddleware(routing);

// export const config = {
//     // Match all pathnames except for
//     // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
//     // - … the ones containing a dot (e.g. `favicon.ico`)
//     matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
// };

import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// --- Create next-intl middleware ---
const intlMiddleware = createMiddleware(routing);

// --- Define private routes (without locale prefix) ---
const PRIVATE_PATHS = ['/dashboard'];

// --- Helper: remove locale prefix from pathname ---
function removeLocaleFromPath(pathname) {
    for (const locale of routing.locales) {
        if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
            return pathname.replace(`/${locale}`, '') || '/';
        }
    }
    return pathname;
}

// --- Combined middleware ---
export function middleware(request) {
    // Apply next-intl middleware first
    const response = intlMiddleware(request);

    if (response instanceof NextResponse) {
        const { pathname } = request.nextUrl;
        const cleanedPath = removeLocaleFromPath(pathname);
        const token = request.cookies.get('auth_token')?.value;
        console.log("🚀 ~ middleware ~ token:", token)

        const isProtected = PRIVATE_PATHS.some((path) =>
            cleanedPath.startsWith(path)
        );
        console.log("🚀 ~ middleware ~ isProtected:", isProtected)

        if (isProtected && !token) {
            const loginUrl = request.nextUrl.clone();
            loginUrl.pathname = `/${routing.defaultLocale}/login`; // default locale fallback
            return NextResponse.redirect(loginUrl);
        }

        return response;
    }

    return response;
}

// --- Apply to all routes except API, static, etc. ---
export const config = {
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
