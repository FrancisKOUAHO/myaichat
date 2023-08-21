'use client'

import Chat from '@/components/Chat'
import '../styles/_main.scss'
import Providers from '@/components/Providers'
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='fr_FR'>
      <Providers>
        <body>
          <Chat />
          {children}
        </body>
      </Providers>
    </html>
  )
}
