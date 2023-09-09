import React, { createContext, useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import { Message } from '@/lib/validators/message'

const defaultValue = [
  {
    id: nanoid(),
    text: 'Bienvenue ! Comment puis-je vous aider ?',
    isUserMessage: false,
  },
]

export const MessagesContext = createContext<{
  messages: Message[];
  isMessageUpdating: boolean;
  domain: string;
  addMessage: (message: Message) => void;
  removeMessage: (id: string) => void;
  updateMessage: (id: string, updateFn: (prevText: string) => string) => void;
  setIsMessageUpdating: (isUpdating: boolean) => void;
}>({
  messages: [],
  isMessageUpdating: false,
  domain: '',
  addMessage: () => {},
  removeMessage: () => {},
  updateMessage: () => {},
  setIsMessageUpdating: () => {},
})

export function MessagesProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState(defaultValue)
  const [isMessageUpdating, setIsMessageUpdating] = useState<boolean>(false)
  const [domain, setDomain] = useState<string>('')

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message])
  }

  const removeMessage = (id: string) => {
    setMessages((prev) => prev.filter((message) => message.id !== id))
  }

  const updateMessage = (
    id: string,
    updateFn: (prevText: string) => string,
  ) => {
    setMessages((prev) =>
      prev.map((message) => {
        if (message.id === id) {
          return { ...message, text: updateFn(message.text) }
        }
        return message
      }),
    )
  }

  useEffect(() => {
    const siteURL = document.referrer || window.location.href
    const hostname = new URL(siteURL).hostname
    const domain = hostname.replace('www.', '').split('.')[0]
    setDomain(domain)
  }, [])

  return (
    <MessagesContext.Provider
      value={{
        messages,
        isMessageUpdating,
        domain,
        addMessage,
        removeMessage,
        updateMessage,
        setIsMessageUpdating,
      }}>
      {children}
    </MessagesContext.Provider>
  )
}

