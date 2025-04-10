import React from 'react';
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <div className='w-full max-w-[820px] p-4 bg-coalBlue rounded-2xl shadow-2xl pointer-events-auto'>
      <div className='mb-4'>
        <button
          onClick={onClose}
          className='flex justify-center items-center gap-2 text-aquaCyan hover:text-lightSeaGreen transition-colors duration-150 cursor-pointer'
        >
          <ArrowLongLeftIcon className='size-4' />
          <span className='text-xs'>Regresar</span>
        </button>
      </div>
      <div className='text-white'>
        {children}
      </div>
    </div>
  );
};