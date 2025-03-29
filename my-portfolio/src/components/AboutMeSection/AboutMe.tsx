'use client'
import { OrangeLine } from '@/ui/OrangeLine'
import React from 'react'
import AboutText from './subcomponents/AboutText'
import { useAppContext } from '@/context/AppContext';

const AboutMe = () => {
	const {showMore, toggleShowMore} = useAppContext();

  return (
    <section className='bg-coalBlue p-9 rounded-3xl shadow-lg shadow-black'>
			<div className='flex flex-col gap-6 '>
				<div className='w-full flex items-center space-x-5'>
					<h1 className="text-white text-2xl whitespace-nowrap">
						<span className="text-lightSeaGreen">#</span>
						sobre mí
					</h1>
					<OrangeLine />
				</div>
				<AboutText />
				<p className='text-start text-xs'>
          {showMore ? '¿Ya no te intereso?' : 'Si te intereso:'}{' '}
          <button 
            className='relative cursor-pointer text-aquaCyan hover:text-lightSeaGreen transition-colors duration-100'
            onClick={toggleShowMore}
          >
            {showMore ? 'Leer menos...' : 'Leer más...'}
          </button>
        </p>
			</div>
			
    </section>
  )
}

export default AboutMe