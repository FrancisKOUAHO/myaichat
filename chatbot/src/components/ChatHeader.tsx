'use client'

import React, { useContext } from 'react'
import { MessagesContext } from '@/context/messages'

const ChatHeader = () => {
const { domain } = useContext(MessagesContext)

  return (
    <div className='w-full bg-black flex gap-3 justify-start items-center text-zinc-800 p-4 border-b border-zinc-300'>
      <div className='flex flex-col items-start text-sm'>
        <p className='font-medium text-white'>Chat Support</p>
        <div className='flex gap-1.5 items-center'>
          <p className='w-2 h-2 rounded-full bg-green-500' />
          <p className='font-medium text-white'>{domain}</p>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader