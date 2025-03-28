import React from 'react';
import Image from 'next/image';
import ImgFoto from '../../../../public/image/fotocv.webp';

const ProfileImage = () => {
  return (
    <div className='p-1 pb-3 rounded-full border-[2px] border-vibrantOrange '>
      <div className='w-60 h-60 smx:w-64 smx:h-64 md:w-80 md:h-80 '>
        <Image src={ImgFoto} alt='Foto de Emilio Pereira' className='rounded-full'/>
      </div>
    </div>
  );
};

export default ProfileImage;
