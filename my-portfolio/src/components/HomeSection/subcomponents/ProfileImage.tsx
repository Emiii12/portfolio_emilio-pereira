import React from 'react';
import Image from 'next/image';
import ImgFoto from '../../../../public/image/fotocv.webp';

const ProfileImage = () => {
  return (
    <div className='p-1 rounded-full border-[2px] border-vibrantOrange '>
      <div className='w-60 h-60 smx:w-64 smx:h-64 md:w-[350px] md:h-[350px] '>
        <Image src={ImgFoto} alt='Emilio Pereira' className='rounded-full w-full h-full object-cover'/>
      </div>
    </div>
  );
};

export default ProfileImage;
