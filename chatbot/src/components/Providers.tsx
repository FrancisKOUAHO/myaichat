'use client'

import { MessagesProvider } from '@/context/messages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FunctionComponent, ReactNode } from 'react'
import { LanguageProvider } from '@/context/LanguageContext'

interface LayoutProps {
  children: ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <MessagesProvider>
          {children}
        </MessagesProvider>
      </LanguageProvider>
    </QueryClientProvider>
  )
}

export default Layout
