'use client';
import React from 'react';
import AboutText from './subcomponents/AboutText';
import AboutSkills from './subcomponents/AboutSkills';
import { TitleSection } from '@/ui/CommonTexts';

const AboutMe = () => {

  return (
    <section className='flex flex-col gap-10 max-w-[820px] lg:max-w-full mx-auto'>
      <TitleSection text='sobre mí' />
			<div className='bg-coalBlue p-4 md:p-8 rounded-3xl shadow-lg shadow-black space-y-6'>
        <AboutText />
      </div>
      <div className='w-full flex flex-col gap-6 justify-center items-center'>
        <h2 className='font-bold text-xl md:text-2xl text-aquaCyan uppercase'>Stack Tecnológico</h2>
        <AboutSkills />
      </div>
    </section>
  )
}

export default AboutMe