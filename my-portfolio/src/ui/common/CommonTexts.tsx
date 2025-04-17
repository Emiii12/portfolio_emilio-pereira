import React from 'react';
import { OrangeLine } from './OrangeLine';

interface NamePageProps {
  className?: string; 
}

interface TitleSectionProps {
  text: string;
}

export const NamePage: React.FC<NamePageProps> = ({ className }) => {
  return (
    <p className={`text-white font-semibold ${className}`}>
      Emilio<span className='text-lightSeaGreen'>.</span>
    </p>
  );
};

export const TitleSection: React.FC<TitleSectionProps> = ({ text}) => {
  return (
    <div className='w-full flex items-center gap-3'>
      <h1 className="text-white text-2xl whitespace-nowrap capitalize font-semibold">
        <span className="text-lightSeaGreen">#</span>
        {text}
      </h1>
      <OrangeLine />
    </div>
  );
};
