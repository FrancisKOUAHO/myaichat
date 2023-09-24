import React, { FunctionComponent } from 'react'
import LayoutCustomProps from '@/types/LayoutCustomProps'
import TopBar from '@/components/atoms/topbar/topBar'
import Sidebar from '@/components/atoms/sidebar/sidebar'
import '../styles/_main.scss'
import AuthGuard from '@/utils/AuthGuard'
import AuthContextProvider from '@/context/AuthContext'
import { LanguageLangProvider } from '@/context/LanguageContext'

const LayoutCustom: FunctionComponent<LayoutCustomProps> = ({ children }) => {

  return (
    <AuthContextProvider>
      <LanguageLangProvider>
        <AuthGuard>
          <TopBar />
          <div className='flex overflow-hidden ml-64 mr-8'>
            <Sidebar />
            <main className='w-full'>
              {children}
            </main>
          </div>
        </AuthGuard>
      </LanguageLangProvider>
    </AuthContextProvider>
  )
}

export default LayoutCustom
