import projectsJson from '@/util/json/experience.json';
import type { Experience } from '@/util/type';

export const getExperience = (): Experience[] => {
  return projectsJson as Experience[];
};
