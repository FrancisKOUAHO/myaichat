import React, { createContext, FunctionComponent, useContext, useState } from 'react';

import enTranslations from '../locales/en.json';
import frTranslations from '../locales/fr.json';
import TranslationsEnFr from "../types/TranslationsEnFr";
import {useRouter} from "next/router";

type LanguageContextType = {
    language: string;
    setLanguage: (lang: string) => void;
    translations: TranslationsEnFr | any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: React.ReactNode;
}

export const LanguageProvider: FunctionComponent<LanguageProviderProps> = ({ children }) => {
    const router = useRouter();

    const locale: string| undefined | any = router?.locale;

    const [language, setLanguage] = useState(locale);
    const translations = language === 'en' ? enTranslations : frTranslations;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translations }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
