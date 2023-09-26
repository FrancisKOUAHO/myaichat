"use client"

import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import React, {useState} from 'react'

import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import {Hydrate, QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient(
      {
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 0,
          },
        },
      },
  ))

  return (
    <html lang='fr'>
    <body className={inter.className}>
    <QueryClientProvider client={queryClient}>
      <Hydrate>
        {children}
      </Hydrate>
      <ToastContainer />
      <ReactQueryDevtools />
    </QueryClientProvider>
    </body>
    </html>
  )
}
