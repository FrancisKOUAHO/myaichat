import { useRouter } from 'next/router'
import { useEffect } from 'react'
import React from 'react'
import { useAuth } from '@/context/authContext'

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
