import React, { createContext, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Message } from '@/lib/validators/message';
import { api } from '@/config/api';

const defaultValue = [
  {
    id: nanoid(),
    text: 'Bienvenue ! Comment puis-je vous aider ?',
    isUserMessage: false,
  },
];

export const MessagesContext = createContext<{
  messages: Message[];
  isMessageUpdating: boolean;
  domain: string;
  allowedResponses: number | null;
  addMessage: (message: Message) => void;
  removeMessage: (id: string) => void;
  updateMessage: (id: string, updateFn: (prevText: string) => string) => void;
  setIsMessageUpdating: (isUpdating: boolean) => void;
}>({
  messages: [],
  isMessageUpdating: false,
  domain: '',
  allowedResponses: null,
  addMessage: () => {},
  removeMessage: () => {},
  updateMessage: () => {},
  setIsMessageUpdating: () => {},
});

export function MessagesProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState(defaultValue);
  const [isMessageUpdating, setIsMessageUpdating] = useState<boolean>(false);
  const [domain, setDomain] = useState<string>('');
  const [allowedResponses, setAllowedResponses] = useState<number | null>(null); // Initialement, la valeur est null

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  }

  const removeMessage = (id: string) => {
    setMessages((prev) => prev.filter((message) => message.id !== id));
  }

  const updateMessage = (
    id: string,
    updateFn: (prevText: string) => string
  ) => {
    setMessages((prev) =>
      prev.map((message) => {
        if (message.id === id) {
          return { ...message, text: updateFn(message.text) };
        }
        return message;
      })
    );
  }

  const getAllowNumberResponse = (url: string): void => {
    api.get('users/user-plan', { params: { 'shopify_url': url } })
      .then((response) => {
        setAllowedResponses(response.data.allowed_responses);
        console.log(response.data.allowed_responses)
      })
      .catch((error) => {
        console.error('Error fetching response:', error);
      });
  }

  useEffect(() => {
    const siteURL = document.referrer || window.location.href;
    const hostname = new URL(siteURL).hostname;
    const domain = hostname.replace('www.', '').split('.')[0];
    setDomain(domain);
    getAllowNumberResponse(domain);
  }, []);

  return (
    <MessagesContext.Provider
      value={{
        messages,
        isMessageUpdating,
        allowedResponses,
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

