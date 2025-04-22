'use client';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { CustomSelect } from '@/ui/input/CustomSelect';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export const SelectLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('es');

  const handleLanguageChange = (value: string) => {
    localStorage.setItem('language', value);
    i18next.changeLanguage(value);
    setLanguage(value);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'es';
    i18n.changeLanguage(savedLang);
    setLanguage(savedLang);
  }, [i18n]);

  return (
    <CustomSelect
      value={language}
      onChange={handleLanguageChange}
      options={[
        { value: 'es', label: 'Español' },
        { value: 'en', label: 'English' },
      ]}
      icon={<ChevronDownIcon className='absolute w-5 h-5 text-lightSeaGreen' />}
      selectClass='pr-10 text-sm xl:text-base pl-2'
    />
  );
};


export const SelectLanguageSideBar = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('es');

  const handleLanguageChange = (value: string) => {
    localStorage.setItem('language', value);
    i18next.changeLanguage(value);
    setLanguage(value);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'es';
    i18n.changeLanguage(savedLang);
    setLanguage(savedLang);
  }, [i18n]);

  return (
    <CustomSelect
      value={language}
      onChange={handleLanguageChange}
      options={[
        { value: 'es', label: 'Español' },
        { value: 'en', label: 'English' },
      ]}
      icon={<ChevronDownIcon className='w-4 h-4 text-lightSeaGreen xs:w-5 xs:h-5 sm:w-6 sm:h-6' />}
      selectClass='text-base sm:text-xl xs:text-lg px-0 py-1 '
    />
  );
};