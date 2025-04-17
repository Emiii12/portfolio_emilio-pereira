'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { imageMap } from './ImageMap';
import { Project } from '@/util/type';
import { CustomSelect } from '@/ui/input/CustomSelect';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface ModalProjectProps {
  project: Project;
}

const ImageCarouselModal = ({ project }: ModalProjectProps) => {
  const [selectedVersion, setSelectedVersion] = useState(
    project.images[0]?.label || ''
  );

  const version = project.images.find(image => image.label === selectedVersion);

  if (!version) {
    return (
      <div className="flex-shrink-0 flex flex-col gap-4 w-full">
        <h4 className="text-white text-sm">{selectedVersion}</h4>
        <div className="text-red-500 text-center">No hay imágenes para {selectedVersion}</div>
      </div>
    );
  }

  return (
    <div className="flex-shrink-0 flex flex-col gap-4 w-full">
      {project.images.length > 1 && (
        <CustomSelect
          options={project.images.map(({ label }) => ({ label, value: label }))}
          value={selectedVersion}
          onChange={setSelectedVersion}
          containerClass="flex items-center justify-center w-full smx:w-32 md:w-40"
          selectClass="rounded bg-coalBlue px-2 py-1 text-sm border-b-[1px] border-aquaCyan rounded-lg"
          icon={<ChevronDownIcon className='absolute w-5 h-5 text-lightSeaGreen' />}
        />
      )}

      <div className="relative w-full">
        <Swiper
          spaceBetween={20}
          loop
          navigation={{
            nextEl: '.custom-swiper-button-next',
            prevEl: '.custom-swiper-button-prev',
          }}
          modules={[Pagination, Navigation]}
          className="rounded-2xl w-full max-w-full"
        >
          {version.keys.map((key, index) => (
            imageMap[key] ? (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <div className="relative w-full h-52 sm:h-64 md:h-80 rounded-2xl overflow-hidden">
                  <Image
                    src={imageMap[key]}
                    alt={`Imagen ${index + 1} de ${project.title}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 700px"
                  />
                </div>
              </SwiperSlide>
            ) : (
              <SwiperSlide key={index} className="flex justify-center items-center text-red-500">
                Imagen no disponible: {key}
              </SwiperSlide>
            )
          ))}
        </Swiper>

        <div className="custom-swiper-button-prev group absolute top-0 left-0 h-full w-14 cursor-pointer z-10 flex items-center justify-center">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-black/60 to-transparent transition-opacity duration-200"></div>
          <div className="bg-charcoalBlue/50 rounded-full p-2 z-10 group-hover:scale-110">
            <ChevronLeftIcon className="size-6 text-vibrantOrange" />
          </div>
        </div>

        <div className="custom-swiper-button-next group absolute top-0 right-0 h-full w-14 cursor-pointer z-10 flex items-center justify-center">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-l from-black/60 to-transparent transition-opacity duration-200"></div>
          <div className="bg-charcoalBlue/50 rounded-full p-2 z-10 group-hover:scale-110">
            <ChevronRightIcon className="h-6 w-6 text-vibrantOrange" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarouselModal;
