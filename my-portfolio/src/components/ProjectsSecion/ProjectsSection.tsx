"use client";
import { TitleSection } from '@/ui/common/CommonTexts';
import React from 'react';
import ProjectText from './subcomponents/ProjectText';
import ProjectCards from './subcomponents/ProjectCards';
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const { t } = useTranslation("projectsSection")
  return (
    <section className='w-full max-w-[820px] lg:max-w-full mx-auto flex flex-col gap-10' id='projectSection'>
      <TitleSection text={t("titleSection")} />
      <ProjectText />
      <ProjectCards />
    </section>
  );
};

export default ProjectsSection;