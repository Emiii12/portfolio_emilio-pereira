'use client';
import React from 'react';
import { Modal } from '@/ui/Modal';
import { useAppContext } from '@/context/AppContext';
import type { Project } from '@/util/type';
import { motion } from 'framer-motion';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';

interface ModalProjectProps {
  project: Project;
}

const ModalProject = ({ project }: ModalProjectProps) => {
  const { toggleShowModal } = useAppContext();

  return (
    <Modal onClose={toggleShowModal}>
      <div className='w-full h-full'>
        <div className='flex flex-col gap-2 mb-2'>
          <h2 className='text-lightSeaGreen text-xl'>{project.title}</h2>
          <h4 className='text-white uppercase text-xs mb-2'>{project.role}</h4>
          <div className="relative">
            <motion.div
              className='flex items-center overflow-x-auto gap-2 pb-3 scroll-smooth scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-charcoalBlue scrollbar-thumb-aquaCyan'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className='bg-charcoalBlue px-3 py-1 text-xs text-nowrap rounded-full flex-shrink-0 hover:scale-110 transition-transform duration-150 cursor-default'
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
        <div className='overflow-auto max-h-[300px] pr-1 mb-4 border-[1px] border-charcoalBlue shadow-xs shadow-black rounded-2xl px-2 py-2 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-charcoalBlue scrollbar-thumb-aquaCyan'>
          <h4 className='text-base font-semibold mb-4'>Descripción: </h4>
          <p className='text-whiteOff text-sm whitespace-pre-line mb-4'>
            {project.details}
          </p>
          <h4 className='text-base font-semibold mb-3'>Responsabilidades:</h4>
          <ul className='flex flex-col gap-2'>
            {project.responsibilities.map((task, index) => (
              <li key={index} className='relative text-whiteOff'>
                <CheckBadgeIcon className='absolute text-vibrantOrange size-4 mt-1' />
                <span className='text-sm ml-6'>{task}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {/* ACA IRÍA EL CAROUSEL */}
        </div>
      </div>
    </Modal>
  );
};

export default ModalProject;
