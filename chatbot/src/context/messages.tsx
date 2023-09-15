import React, { createContext, useEffect, useState, useContext } from 'react';
import { nanoid } from 'nanoid';
import { Message } from '@/lib/validators/message';
import { useLanguage } from '@/context/LanguageContext';

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
});

export function MessagesProvider({ children }: { children: React.ReactNode }) {
  const { translations } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: nanoid(),
      text: translations.welcome,
      isUserMessage: false,
    },
  ]);
  const [isMessageUpdating, setIsMessageUpdating] = useState<boolean>(false);
  const [domain, setDomain] = useState<string>('');

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  const removeMessage = (id: string) => {
    setMessages((prev) => prev.filter((message) => message.id !== id));
  };

  const updateMessage = (
    id: string,
    updateFn: (prevText: string) => string
  ) => {
    setMessages((prev) =>
      prev.map((message) =>
        message.id === id
          ? { ...message, text: updateFn(message.text) }
          : message
      )
    );
  };

  useEffect(() => {
    const siteURL = document.referrer || window.location.href;
    const hostname = new URL(siteURL).hostname;
    const domain = hostname.replace('www.', '').split('.')[0];
    setDomain(domain);
  }, []);

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
  );
}

export const useMessages = () => {
  const context = useContext(MessagesContext);
  if (!context) {
    throw new Error('useMessages must be used within a MessagesProvider');
  }
  return context;
};