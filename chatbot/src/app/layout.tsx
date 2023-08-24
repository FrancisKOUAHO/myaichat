'use client'

import React from "react";
import Head from 'next/head'

import Providers from '@/components/Providers'
import Chat from '@/components/Chat'

import '../styles/_main.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='fr_FR'>
    <Head>
      <meta charSet='utf-8' />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
    </Head>
      <Providers>
        <body>
          <Chat />
          {children}
        </body>
      </Providers>
    </html>
  )
}
