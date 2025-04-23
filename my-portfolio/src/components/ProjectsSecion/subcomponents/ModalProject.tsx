'use client';
import React from 'react';
import { Modal } from '@/ui/modal/Modal';
import { useAppContext } from '@/context/AppContext';
import type { Project } from '@/util/type';
import { motion } from 'framer-motion';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';
import TechStack from './TechStack';
import ImageCarouselModal from './ImageCarouselModal';
import { useTranslation } from 'react-i18next';

interface ModalProjectProps {
  project: Project;
}

const ModalProject = ({ project }: ModalProjectProps) => {
  const { toggleShowModal } = useAppContext();
  const { t } = useTranslation("projectsSection");

  return (
    <Modal onClose={toggleShowModal}>
      <div className='flex flex-col max-h-[calc(100vh-8rem)] md:max-h-[calc(100vh-7rem)] overflow-y-auto gap-4 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-charcoalBlue scrollbar-thumb-aquaCyan'>
        <div className='flex-shrink-0 flex flex-col gap-2'>
          <h2 className='text-lightSeaGreen text-xl font-semibold'>{project.title}</h2>
          <h4 className='text-white uppercase text-xs mb-2'>{project.role}</h4>
          <div className="relative">
            <motion.div
              className='flex items-center overflow-x-auto gap-2 pt-1 pb-3 scroll-smooth scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-charcoalBlue scrollbar-thumb-aquaCyan'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {project.stack.map((tech, i) => (
                <TechStack tech={tech} key={i} className='px-3 py-1 text-xs flex-shrink-0' />
              ))}
            </motion.div>
          </div>
        </div>

        <div className='flex-shrink-0 max-h-[280px] overflow-y-auto border-2 border-charcoalBlue shadow-xs shadow-charcoalBlue rounded-2xl px-2 py-2 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-charcoalBlue scrollbar-thumb-aquaCyan'>
          <h4 className='text-base font-semibold mb-4'>
            {t("modalTextDescription")}:
          </h4>
          <p className='text-whiteOff text-sm whitespace-pre-line mb-4'>
            {project.details}
          </p>
          <h4 className='text-base font-semibold mb-3'>
            {t("modalTextResponsabilites")}:
          </h4>
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
          <ImageCarouselModal project={project} />
        </div>
      </div>
    </Modal>
  );
};

export default ModalProject;