'use client';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { CustomSelect } from '@/ui/input/CustomSelect';
import { useLanguageContext } from '@/context/LanguageContext';

export const SelectLanguage = () => {
  const { language, setLanguage } = useLanguageContext();
  const handleLanguageChange = (value: string) => {
    setLanguage(value);
  };

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
  const { language, setLanguage } = useLanguageContext();

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
  };

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