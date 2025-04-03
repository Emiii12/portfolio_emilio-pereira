'use client';
import { OrangeLine } from '@/ui/OrangeLine';
import React from 'react';
import AboutText from './subcomponents/AboutText';
import AboutSkills from './subcomponents/AboutSkills';

const AboutMe = () => {

  return (
    <section className='mb-20 flex flex-col gap-10 max-w-[820px] lg:max-w-full m-auto'>
      <div className='w-full flex items-center gap-3'>
        <h1 className="text-white text-2xl whitespace-nowrap capitalize font-semibold">
          <span className="text-lightSeaGreen">#</span>
          sobre mí
        </h1>
        <OrangeLine />
      </div>
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