'use client'

import React, { createContext, FunctionComponent, useContext, useEffect, useState } from 'react'

import frTranslations from '../locales/fr.json'

import Translations from '@/types/Translations'

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  translations: Translations | any,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageLangProvider: FunctionComponent<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<any>('fr');
  const translations = language === 'fr' && frTranslations

  useEffect(() => {
    const browserLang = navigator.language
    setLanguage(browserLang)
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}