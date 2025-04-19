'use client';
import React from 'react';
import AboutText from './subcomponents/AboutText';
import AboutSkills from './subcomponents/AboutSkills';
import { TitleSection } from '@/ui/common/CommonTexts';

const AboutMe = () => {

  return (
    <section className='flex flex-col gap-10 max-w-[820px] lg:max-w-full mx-auto' id='aboutMeSection'>
      <TitleSection text='sobre mí' />
      <AboutText />
      <div className='w-full flex flex-col gap-6 justify-center items-center'>
        <h2 className='font-bold text-xl md:text-2xl text-aquaCyan uppercase'>Stack Tecnológico</h2>
        <AboutSkills />
      </div>
    </section>
  )
}

export default AboutMe