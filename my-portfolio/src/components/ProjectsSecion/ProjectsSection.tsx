import { TitleSection } from '@/ui/CommonTexts'
import React from 'react'

const ProjectsSection = () => {
  return (
    <section className='max-w-[820px] lg:max-w-full mx-auto flex flex-col gap-10 mb-20'>
			<TitleSection text='proyectos' />
			<div className='bg-coalBlue p-4 md:p-8 rounded-3xl shadow-lg shadow-black space-y-6'>
				<p className='text-whiteOff '>
					Durante 1 año y 3 meses en una startup, desarrollé y actualicé múltiples páginas web. 
					Complementé esta experiencia profesional con diversos proyectos personales y académicos.
				</p>
			</div>
			<div className='w-full grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-2'>
				<div className='w-full grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 place-items-center'>
													
				</div>
			</div>
		</section>
  )
}

export default ProjectsSection;