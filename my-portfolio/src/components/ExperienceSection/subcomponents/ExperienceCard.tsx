'use client'
import React, { useState } from 'react';
import { useExperience } from '@/services/experienceService';
import { ReadMore } from '@/ui/button/ReadMore';
import { motion, AnimatePresence } from 'motion/react';
import type { Experience } from '@/util/type';
import { useTranslation } from 'next-i18next';

const Experience = () => {
  const experience = useExperience();
  const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});
  const { t: tCommon } = useTranslation('common');

  const toggleShowMore = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      {experience.map((item, index) => (
        <div
          key={index}
          className='w-full border-4 border-coalBlue rounded-2xl shadow-lg shadow-black'
          aria-label={`Experiencia Laboral: ${item.role} en ${item.company}`}
        >
          <div className={`flex flex-col lg:flex-row justify-between ${expandedItems[index] ? 'lg:items-center' : 'items-start'}`}>
            <div className='w-full lg:w-[450px] h-full flex flex-col gap-2 p-5'>
              <h2 className='text-vibrantOrange text-base'>{item.role}</h2>
              <h3 className='text-lightSeaGreen text-sm mt-2'>{item.company}</h3>
              <h4 className='text-whiteOff text-xs'>
                {item.startDate} <span className='text-aquaCyan'>-</span> {item.endDate}
              </h4>
            </div>
            <div className='w-full lg:h-full border-t-[1px] border-aquaCyan/60 lg:border-l-[1px] lg:border-t-0 p-5'>
              <p className='text-whiteOff text-xs sm:text-sm lg:text-base leading-relaxed mb-4'>{item.details}</p>
              <AnimatePresence initial={false}>
                {expandedItems[index] && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className='list-disc list-inside text-whiteOff text-sm mt-3 mb-3 w-full h-full flex flex-col justify-between gap-2 overflow-hidden'
                  >
                    {item.responsibilities.map((res, idx) => (
                      <li key={idx} className='text-xs sm:text-sm lg:text-base'>{res}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
              <span className='flex items-center gap-2 text-[10px] sm:text-xs text-white font-semibold'>
                {!expandedItems[index] ? tCommon('interesed') : tCommon('notInteresed')}
                <ReadMore
                  expanded={!!expandedItems[index]}
                  onClick={() => toggleShowMore(index)}
                />
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Experience;
