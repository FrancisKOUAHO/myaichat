import React, { createContext, FunctionComponent, useContext, useState } from 'react';

import enTranslations from '../locales/en.json';
import frTranslations from '../locales/fr.json';

type LanguageContextType = {
    language: string;
    setLanguage: (lang: string) => void;
    translations:  any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: React.ReactNode;
}

export const LanguageProvider: FunctionComponent<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState('fr');
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
