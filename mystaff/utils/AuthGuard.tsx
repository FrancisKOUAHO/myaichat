'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import React from 'react'

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated()) {
    return null
  }

  return <>{children}</>
}

export default AuthGuard
