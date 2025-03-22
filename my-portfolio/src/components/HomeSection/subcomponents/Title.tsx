import React from 'react';
import { FlagArIcon } from '../../../../public/icon/icons';

const Title = () => {
  return (
    <div className='space-y-3 lg:space-y-5'>
      <h2 className="text-[26px] smx:text-3xl md:text-4xl lg:text-[28px] xl:text-3xl text-white font-bold text-center lg:text-start lg:text-nowrap">
        <span className="whitespace-nowrap">Desarrollador Web</span> <br className="block smx:hidden" />
        <span className="text-lightSeaGreen whitespace-nowrap">
          Front<span className="text-white">-</span>End
        </span>
      </h2>
      <p className='flex flex-col smx:flex-row justify-center lg:justify-start items-center font-playwrite font-medium text-base sm:text-lg md:text-xl lg:text-base xl:text-lg'>
        <span className='text-aquaCyan text-center'>Emilio Pereira</span> 
        <span className='text-lightSeaGreen hidden smx:inline px-2'>|</span> 
        <span className='text-white text-center flex items-center justify-center'>
          Buenos Aires, Argentina
          <FlagArIcon className='w-6 md:w-7 lg:w-6 xl:w-7 ml-1 mt-1' />
        </span>
      </p>
    </div>
  );
};

export default Title;
