import projectsEs from '@/util/json/translations/es/projects.json';
import projectsEn from '@/util/json/translations/en/projects.json';
import { useTranslation } from 'react-i18next';
import type { Project } from '@/util/type';

export const useProjects = (): Project[] => {
  const { i18n } = useTranslation();
  
  return i18n.language === 'es' ? projectsEs : projectsEn;
};