'use client'

import React, { useState } from 'react'
import '../styles/_main.scss'
import 'react-toastify/dist/ReactToastify.css'

import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { ToastContainer } from 'react-toastify'
import { LanguageLangProvider } from '@/context/LanguageContext'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
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
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
      <title>Myaichat</title>
    </head>
    <body className='bg-slate-100'>
    <LanguageLangProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate>
          {children}
        </Hydrate>
        <ToastContainer />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </LanguageLangProvider>
    </body>
    </html>
  )
}

export default RootLayout