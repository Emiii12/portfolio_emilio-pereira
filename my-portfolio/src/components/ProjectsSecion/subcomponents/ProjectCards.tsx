'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { LinkIcon } from '@heroicons/react/24/outline';

import { useProjects } from '@/services/projectsService';
import { CardText } from './CardText';
import { imageMap } from './ImageMap';
import { useAppContext } from '@/context/AppContext';
import ModalProject from './ModalProject';
import { ButtonCard } from '@/ui/button/ButtonCard';
import TechStack from './TechStack';

import { useTranslation } from "react-i18next";

const ProjectCards = () => {
  const { showModal, toggleShowModal, setSelectedProject, selectedProject } = useAppContext();
  const { t: tCommon } = useTranslation("common");
  const { t: tProjects } = useTranslation("projectsSection");
  const projects = useProjects();

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showModal]);

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='bg-coalBlue p-6 rounded-3xl text-white flex flex-col h-full shadow-lg shadow-black'
          >
            <div className='flex flex-col h-full justify-between gap-4'>
              <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                  <h3 className='text-base smx:text-lg sm:text-base font-bold'>{project.title}</h3>
                  <h4 className='text-lightSeaGreen text-xs sm:text-sm uppercase'>{project.state}</h4>
                </div>
                <ButtonCard 
                  as='link' 
                  onClick={() => {
                    setSelectedProject(project);
                    toggleShowModal();
                  }}
                  className='px-3 smx:px-3 sm:px-2 md:px-3 py-1' 
                >
                  <span className='text-xs sm:text-sm text-nowrap'>
                    {tCommon("buttonCardProjectsDetails")}
                  </span>
                </ButtonCard>
              </div>
              <div className='flex gap-1 flex-wrap'>
                {project.stack.slice(0, 3).map((tech, i) => (
                  <TechStack tech={tech} key={i} className='px-2 py-1 text-xs text-white'/>
                ))}
              </div>
              <div className='text-whiteOff text-sm'>
                <CardText text={project.description} />
              </div>
              <div className='rounded-2xl border-2 border-charcoalBlue hover:scale-[102%] transition-transform duration-200 shadow-lg shadow-charcoalBlue'>
                <Image
                  src={imageMap[project.images[0]?.keys[0]]}
                  alt='Imagen proyecto'
                  className='w-full h-full object-contain rounded-2xl'
                  loading='lazy'
                />
              </div>
              <div className='w-full h-full flex justify-center items-center p-1'>
                {project.link ? (
                  <ButtonCard as='link' className='px-3 py-2' href={project.link} >
                    <span className='text-xs sm:text-sm flex items-center justify-center gap-2'>
                      <LinkIcon className='size-4' />
                      {tCommon("buttonCardProjectsSeeWeb")}
                    </span>
                  </ButtonCard>
                ) : (
                  <span className='text-sm text-red-500 font-semibold uppercase'>
                    {tProjects("cardWebLink")}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal && selectedProject && (
        <div className='fixed top-0 left-0 z-[1100] flex justify-center items-center w-full h-full bg-black/80 p-4 sm:p-6'>
          <ModalProject project={selectedProject} />
        </div>
      )}
    </>
  );
};

export default ProjectCards;
