import { TitleSection } from '@/ui/common/CommonTexts';
import React from 'react'
import ExperienceText from './subcomponents/ExperienceText';
import ExperienceCard from './subcomponents/ExperienceCard';

const ExperienceSection = () => {
  return (
    <section className='w-full max-w-[820px] lg:max-w-full mx-auto flex flex-col gap-10' id='experienceSection'>
			<TitleSection text='experiencia' />
			<ExperienceText />
      <ExperienceCard />
		</section>
  );
};

export default ExperienceSection;