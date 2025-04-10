'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LinkIcon } from '@heroicons/react/24/outline';

import { getProjects } from '@/services/projectsService';
import { CardText } from './CardText';
import { imageMap } from './ImageMap';
import { useAppContext } from '@/context/AppContext';
import ModalProject from './ModalProject';

const projects = getProjects();

const ProjectCards = () => {
  const { showModal, toggleShowModal, setSelectedProject, selectedProject } = useAppContext();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-coalBlue p-6 rounded-3xl text-white flex flex-col h-full shadow-lg shadow-black"
          >
            <div className="flex flex-col h-full justify-between gap-4">
              <div className="w-full flex justify-between items-center">
                <h3 className="text-base font-bold">{project.title}</h3>
                <button
                  className="py-1 px-3 border-[1px] border-vibrantOrange rounded-2xl cursor-pointer transition-colors duration-150 hover:bg-charcoalBlue"
                  onClick={() => {
                    setSelectedProject(project);
                    toggleShowModal();
                  }}
                >
                  <span className="text-xs">Ver más</span>
                </button>
              </div>
              <div className="flex gap-1 flex-wrap">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-charcoalBlue px-2 py-1 text-xs rounded-full transition-transform duration-150 hover:scale-110 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="text-whiteOff text-sm">
                <CardText text={project.description} />
              </div>
              <div className="w-full">
                <Image
                  src={imageMap[project.imageKey]}
                  alt="Imagen proyecto"
                  className="w-full object-contain rounded-2xl"
                />
              </div>
              <div className="w-full h-full flex justify-center items-center">
                {project.link ? (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 border-[1px] border-vibrantOrange rounded-2xl cursor-pointer transition-colors duration-150 hover:bg-charcoalBlue"
                  >
                    <span className="text-xs flex items-center justify-center gap-2">
                      <LinkIcon className="size-4" />
                      Ver Web
                    </span>
                  </Link>
                ) : (
                  <span className="text-xs text-red-500">No disponible</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal && selectedProject && (
        <div className="fixed top-0 left-0 z-[1100] flex justify-center items-center w-full h-full bg-black/80 p-4 sm:p-6">
          <ModalProject project={selectedProject} />
        </div>
      )}
    </>
  );
};

export default ProjectCards;
