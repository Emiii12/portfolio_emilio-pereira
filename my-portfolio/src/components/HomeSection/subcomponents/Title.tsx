'use client'
import React from 'react';
import Image from 'next/image';
import flagArIcon from '../../../../public/icon/flagArIcon.svg'

const Title = () => {
  return (
    <div className='space-y-3 lg:space-y-5'>
      <h2 className="text-[26px] smx:text-3xl md:text-4xl lg:text-[28px] xl:text-3xl text-white font-bold text-center lg:text-start lg:text-nowrap">
        <span className="">Desarrollador Web</span> <br className="block smx:hidden" />
        <span className="text-lightSeaGreen whitespace-nowrap">
          Front<span className="text-white">-</span>End
        </span>
      </h2>
      <p className='flex flex-col smx:flex-row justify-center lg:justify-start items-center font-playwrite font-medium text-base sm:text-lg md:text-xl lg:text-base xl:text-lg'>
        <span className='text-aquaCyan text-center'>Emilio Pereira</span> 
        <span className='text-lightSeaGreen hidden smx:inline px-2'>|</span> 
        <span className='text-white text-center flex items-center justify-center'>
          Buenos Aires, Argentina
          <Image src={flagArIcon} alt='Bandera de Argentina' className='size-6 sm:size-8 ml-1 mt-1'/>
        </span>
      </p>
    </div>
  );
};

export default Title;
