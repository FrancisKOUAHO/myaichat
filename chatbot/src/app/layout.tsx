'use client'

import Chat from '@/components/Chat'
import './globals.css'
import Providers from '@/components/Providers'
import React from "react";
import { setCookie } from "cookies-next";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const siteURL = document.referrer;
  const hostname = new URL(siteURL).hostname;
  const domain: any = hostname.replace('www.', '').split('.')[0];

  setCookie('domain', domain);

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
