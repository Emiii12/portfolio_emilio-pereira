import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ButtonX from '../button/ButtonX';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className='w-full max-w-[820px] max-h-[calc(100vh-2rem)] p-4 bg-coalBlue rounded-2xl shadow-2xl pointer-events-auto flex flex-col'
      >
        <div className='relative w-full'>
          <ButtonX onClick={onClose} className='absolute top-0 right-0 z-[50]' borderColor='vibrantOrange' iconClassName='text-vibrantOrange' />
          <div className='overflow-y-auto'>
            {children}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
