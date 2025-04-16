import projectsJson from '@/util/json/projects.json';
import type { Project } from '@/util/type';

export const getProjects = (): Project[] => {
  return projectsJson as Project[];
};
