'use client'

import React, { createContext, FunctionComponent, useContext, useEffect, useState } from 'react'

import getUserLocale from 'get-user-locale'

import frTranslations from '../locales/fr.json'
import enTranslations from '../locales/en.json'

import TranslationsEnFr from '../types/TranslationsEnFr'

type LanguageContextType = {
    language: string;
    setLanguage: (lang: string) => void;
    translations: TranslationsEnFr | any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
    children: React.ReactNode;
}

export const LanguageProvider: FunctionComponent<LanguageProviderProps> = ({ children }) => {
    const userLocale = getUserLocale().toLowerCase().substring(0, 2)

    const [language, setLanguage] = useState<any>(getUserLocale)

    const translations = language === 'fr' ? frTranslations : enTranslations

    useEffect(() => {
        setLanguage(userLocale)

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
