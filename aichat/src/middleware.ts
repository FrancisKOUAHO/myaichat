// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { rateLimiter } from '@/lib/rate-limiter'

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  const ip = req.ip ?? '127.0.0.1'

  try {
    const { success } = await rateLimiter.limit(ip)

    if (!success) return new NextResponse('Vous écrivez des messages trop rapidement.')
    return NextResponse.next()
  } catch (error) {
    return new NextResponse(
      'Désolé, un problème est survenu lors du traitement de votre message. Veuillez réessayer plus tard.'
    )
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/message/:path*',
}
