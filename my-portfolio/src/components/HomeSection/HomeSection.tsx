import Image from 'next/image';
import React from 'react';
import ImgFoto from '../../../public/image/fotocv.webp';
import ARFlag from '../../../public/image/ar.webp'
import { FlagArIcon } from '../../../public/icon/icons';

const HomeSection = () => {
  return (
    <>
      <section className='w-full pt-20'>
        <div className='max-w-5xl mx-auto flex flex-col lg:flex-row justify-center items-center pt-8 lg:px-20 gap-7'>
          <div className='order-last lg:order-first w-full lg:w-1/2 space-y-4'>
            <div className='space-y-3 md:space-y-1'>
              <h2 className="text-[26px] text-white font-bold text-center lg:text-start lg:text-nowrap">
                <span className="whitespace-nowrap">Desarrollador Web</span> <br className="block smx:hidden" />
                <span className="text-lightSeaGreen whitespace-nowrap text-3xl smx:text-[26px]">
                  Front<span className="text-white">-</span>End
                </span>
              </h2>
              <p className='flex flex-col smx:flex-row justify-center lg:justify-start items-center font-playwrite text-base font-medium'>
                <span className='text-aquaCyan text-center text-xl smx:text-base'>Emilio Pereira</span> 
                <span className='text-lightSeaGreen hidden smx:inline px-2'>|</span> 
                <span className='text-white text-center flex items-center justify-center'>
                  Buenos Aires, Argentina
                  <FlagArIcon className='w-6 ml-1 mt-1 ' />
                </span>
              </p>
            </div>
            <p className='text-white text-sm text-center lg:text-start text-balance sm:px-10'>
              Construyo webs tan responsive que se adaptan hasta a los cambios de humor del usuario.
            </p>

            <div className='mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3'>
              <button className='col-span-2 sm:col-span-1 py-2 w-full bg-vibrantOrange'>Proyectos</button>
              <button className='col-span-1 py-2 w-full bg-vibrantOrange'>Ver CV</button>
              <button className='col-span-1 py-2 w-full bg-vibrantOrange'>Contáctame</button>
            </div>
          
          </div>
          <div className='order-first lg:order-last lg:w-1/2 flex justify-center items-center'>
            <div className='p-1 rounded-full border-[2px] border-vibrantOrange '>
              <div className='w-60 h-60 smx:w-64 smx:h-64 md:w-72 md:h-72 lg:w-[300px] lg:h-[300px]'>
                <Image src={ImgFoto} alt='foto ejemplo' className=' rounded-full'/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;