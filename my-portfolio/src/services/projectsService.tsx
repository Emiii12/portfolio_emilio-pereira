import projects from '@/util/json/projects.json';
import { Project } from '@/util/type';

export const getProjects = (): Project[] => {
  return projects;
};