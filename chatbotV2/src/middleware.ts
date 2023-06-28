// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { rateLimiter } from '@/lib/rate-limiter'

// Cette fonction peut être marquée comme `async` si vous utilisez `await` à l'intérieur
export async function middleware(req: NextRequest) {
  const ip = req.ip ?? `default-${Math.random()}`

  console.log(req.ip)

  try {
    const { success } = await rateLimiter.limit(ip)

    if (!success) return new NextResponse("Vous écrivez des messages trop rapidement.")
    return NextResponse.next()
  } catch (error) {
    return new NextResponse(
      "Désolé, une erreur s'est produite lors du traitement de votre message. Veuillez réessayer plus tard."
    )
  }
}

// Voir la section "Correspondance des chemins" ci-dessous pour en savoir plus
export const config = {
  matcher: '/api/message/:path*',
}