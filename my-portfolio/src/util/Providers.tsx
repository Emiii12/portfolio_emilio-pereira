// src/util/Providers.tsx
'use client';
import { AppProvider } from "@/context/AppContext";
import { SidebarProvider } from "@/context/SidebarContext";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { LanguageProvider } from "@/context/LanguageContext";

import layout_es from '@/util/json/translations/es/layout.json';
import common_es from '@/util/json/translations/es/common.json';
import homeSection_es from '@/util/json/translations/es/homeSection.json';

import layout_en from '@/util/json/translations/en/layout.json';
import common_en from '@/util/json/translations/en/common.json';
import homeSection_en from '@/util/json/translations/en/homeSection.json';

const getUserLanguage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('language') || 'es';
  }
  return 'es';
};

i18next.init({
  interpolation: { escapeValue: false },
  lng: getUserLanguage(),
  resources: {
    es: { 
      layout: layout_es,
      common: common_es,
      homeSection: homeSection_es,
    },
    en: { 
      layout: layout_en,
      common: common_en,
      homeSection: homeSection_en,
    },
  },
});

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <I18nextProvider i18n={i18next}>
      <LanguageProvider>
        <SidebarProvider>
          <AppProvider>
            {children}
          </AppProvider>
        </SidebarProvider>
      </LanguageProvider>
    </I18nextProvider>
  );
};
