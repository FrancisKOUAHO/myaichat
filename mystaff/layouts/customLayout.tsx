import Image from 'next/image'
import { Search } from '@/components/search'
import { UserNav } from '@/components/user-nav'
import { Tabs } from '@/components/ui/tabs'
import * as React from 'react'
import TableNav from '@/components/table-nav'
import AuthContextProvider from '@/app/context/authContext'

export default function customLayout({ children }: { children: any }) {
  return (
    <AuthContextProvider>
      <div className='flex-col md:flex'>
        <div className='border-b'>
          <div className='flex h-16 items-center px-4'>
            <div className='ml-auto flex items-center space-x-4'>
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className='flex-1 space-y-4 p-8 pt-6'>
          <div className='flex items-center justify-between space-y-2'>
            <h2 className='text-3xl font-bold tracking-tight'>Dashboard</h2>
            <div className='flex items-center space-x-2'>
            </div>
          </div>
          <Tabs defaultValue='apercu' className='space-y-4'>
            <TableNav />
            {children}
          </Tabs>
        </div>
      </div>
    </AuthContextProvider>
  )

}