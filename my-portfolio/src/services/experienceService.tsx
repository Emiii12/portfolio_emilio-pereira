import experienceEs from '@/util/json/translations/es/experience.json';
import experienceEn from '@/util/json/translations/en/experience.json';
import { useTranslation } from 'react-i18next';
import type { Experience } from '@/util/type';

export const useExperience = (): Experience[] => {
  const { i18n } = useTranslation();
  return i18n.language === 'es' ? experienceEs : experienceEn;
};
