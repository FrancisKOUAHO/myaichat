// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
//import { rateLimiter } from '@/lib/rate-limiter'
import url from 'url'

// Cette fonction peut être marquée comme `async` si vous utilisez `await` à l'intérieur
export async function middleware(req: NextRequest) {
  const referer = req.headers.get('Referer')
  const domain: any = referer ? url.parse(referer).hostname : `default-${Math.random()}`
  console.log(domain)

  console.log(URL)

  try {
   /* const { success } = await rateLimiter.limit(domain)

    if (!success) return new NextResponse("Vous écrivez des messages trop rapidement.")*/
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