import { db } from "@/database/db";
import { User } from "@/database/schema";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()

    const dbUsers = await db.select()
      .from(User)
      .catch((error) => {
        console.log(error);
      })
    
    console.log(dbUsers);

    return res
  }

// Ensure the middleware is only called for relevant paths.
export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       * - login, signup, and auth callbacks (auth routes)
       */
      '/((?!_next/static|_next/image|favicon.ico|login|sign-up|auth/callback|api/auth).*)',
    ],
  }