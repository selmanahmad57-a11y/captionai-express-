// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Routes publiques (non protégées)
const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  // ajoute ici toutes les routes que tu veux laisser libres
]);

export default clerkMiddleware((auth, req) => {
  // Protège toutes les autres routes
  if (!isPublicRoute(req)) auth().protect();
});

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)',
    '/',
    '/(api|trpc)(.*)',
  ],
};