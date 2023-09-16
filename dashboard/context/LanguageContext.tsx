import React, { createContext, FunctionComponent, useContext, useState } from 'react'

import { getLanguageName } from 'browser-language-auto-detector'

import enTranslations from '../locales/en.json'
import frTranslations from '../locales/fr.json'
import esTranslations from '../locales/es.json'
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

export const LanguageProvider: FunctionComponent<LanguageProviderProps> = ({ children }) => {

  const getLanguage = getLanguageName()?.origin.toLowerCase().substring(0, 2)

  const [language, setLanguage] = useState<any>(getLanguage)
  const translations = language === 'en' ? enTranslations : (language === 'fr' ? frTranslations : language === 'es' ? esTranslations : frTranslations)

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
