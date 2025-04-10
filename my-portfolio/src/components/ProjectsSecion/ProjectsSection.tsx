import { TitleSection } from '@/ui/CommonTexts';
import React from 'react';
import ProjectText from './subcomponents/ProjectText';
import ProjectCards from './subcomponents/ProjectCards';

const ProjectsSection = () => {
  return (
    <section className='max-w-[820px] lg:max-w-full mx-auto flex flex-col gap-10 mb-20'>
			<TitleSection text='proyectos' />
			<ProjectText />
			{/* <div className='w-full flex flex-col gap-6 justify-center items-center'>
				<h2 className='font-bold text-xl md:text-2xl text-aquaCyan uppercase'>Experiencia</h2>
			</div> */}
			<ProjectCards />
		</section>
  );
};

export default ProjectsSection;