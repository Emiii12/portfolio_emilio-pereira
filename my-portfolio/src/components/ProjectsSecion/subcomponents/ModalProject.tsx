import React from 'react';
import { Modal } from '@/ui/Modal';
import { useAppContext } from '@/context/AppContext';
import type { Project } from '@/util/type';

interface ModalProjectProps {
  project: Project;
}

const ModalProject = ({ project }: ModalProjectProps) => {
  const { toggleShowModal } = useAppContext();

  return (
    <Modal onClose={toggleShowModal}>
      <div className='w-full'>
        <h2 className='text-vibrantOrange text-2xl mb-4'>{project.title}</h2>
        <p className='text-white mb-4'>{project.description}</p>
        <div className='flex flex-wrap gap-2'>
          {project.stack.map((tech, i) => (
            <span key={i} className='bg-charcoalBlue px-3 py-1 text-xs rounded-full'>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default ModalProject;