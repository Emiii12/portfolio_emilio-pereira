"use client";
import { TitleSection } from '@/ui/common/CommonTexts';
import React from 'react'
import ExperienceText from './subcomponents/ExperienceText';
import ExperienceCard from './subcomponents/ExperienceCard';
import { useTranslation } from 'react-i18next';

const ExperienceSection = () => {
  const { t } = useTranslation("experienceSection");
  return (
    <section className='w-full max-w-[820px] lg:max-w-full mx-auto flex flex-col gap-10' id='experienceSection'>
			<TitleSection text={t("titleSection")} />
			<ExperienceText />
      <ExperienceCard />
		</section>
  );
};

export default ExperienceSection;