'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import i18next from 'i18next';

interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<string>('es');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'es';
    setLanguage(savedLang);
    i18next.changeLanguage(savedLang); 
  }, []);

  const changeLanguage = (lang: string) => {
    localStorage.setItem('language', lang);
    i18next.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguageContext debe estar dentro de un LanguageProvider");
  }
  return context;
};
