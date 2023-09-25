import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import React from "react"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MyaiChat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
      {children}
      <ToastContainer />
      </body>
    </html>
  )
}
