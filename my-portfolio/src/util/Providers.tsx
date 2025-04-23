'use client';
import { AppProvider } from "@/context/AppContext";
import { SidebarProvider } from "@/context/SidebarContext";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { LanguageProvider } from "@/context/LanguageContext";

import layout_es from '@/util/json/translations/es/layout.json';
import common_es from '@/util/json/translations/es/common.json';
import homeSection_es from '@/util/json/translations/es/homeSection.json';
import projectsSection_es from '@/util/json/translations/es/projectsSection.json';
import projects_es from '@/util/json/translations/es/projects.json';
import aboutMeSection_es from '@/util/json/translations/es/aboutMeSection.json';
import experienceSection_es from '@/util/json/translations/es/experienceSection.json';
import contactSection_es from '@/util/json/translations/es/contactSection.json';

import layout_en from '@/util/json/translations/en/layout.json';
import common_en from '@/util/json/translations/en/common.json';
import homeSection_en from '@/util/json/translations/en/homeSection.json';
import projectsSection_en from '@/util/json/translations/en/projectsSection.json';
import projects_en from '@/util/json/translations/en/projects.json';
import aboutMeSection_en from '@/util/json/translations/en/aboutMeSection.json';
import experienceSection_en from '@/util/json/translations/en/experienceSection.json';
import contactSection_en from '@/util/json/translations/en/contactSection.json';

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
      projectsSection: projectsSection_es,
      projects: projects_es,
      aboutMeSection: aboutMeSection_es,
      experienceSection: experienceSection_es,
      contactSection: contactSection_es
    },
    en: { 
      layout: layout_en,
      common: common_en,
      homeSection: homeSection_en,
      projectsSection: projectsSection_en,
      projects: projects_en,
      aboutMeSection: aboutMeSection_en,
      experienceSection: experienceSection_en,
      contactSection: contactSection_en
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
