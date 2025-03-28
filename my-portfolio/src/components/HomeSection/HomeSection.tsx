import React from 'react';
import Title from './subcomponents/Title';
import Description from './subcomponents/Description';
import ButtonsGroup from './subcomponents/ButtonsGroup';
import ProfileImage from './subcomponents/ProfileImage';

const HomeSection = () => {
  return (
    <>
      <section className='w-full pt-16 lg:pt-32'>
        <div className='flex flex-col lg:flex-row justify-center items-center pt-8 gap-7'>
          <div className='order-last lg:order-first w-full lg:w-1/2 space-y-4 lg:space-y-5'>
            <Title />
            <Description />
            <ButtonsGroup />
          </div>
          <div className='order-first lg:order-last lg:w-1/2 flex justify-center items-center'>
            <ProfileImage />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;