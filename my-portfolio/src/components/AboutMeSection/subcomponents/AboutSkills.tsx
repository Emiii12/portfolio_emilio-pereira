'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import htmlIcon from '../../../../public/icon/front/htmlIcon.svg';
import cssIcon from '../../../../public/icon/front/cssIcon.svg';
import javaScriptIcon from '../../../../public/icon/front/javaScriptIcon.svg';
import typeScriptIcon from '../../../../public/icon/front/typeScript.svg';
import reactIcon from '../../../../public/icon/front/reactIcon.svg';
import nextJsIcon from '../../../../public/icon/front/nextJsIcon.svg';
import viteIcon from '../../../../public/icon/front/viteIcon.svg';
import tailwindCssIcon from '../../../../public/icon/front/tailwindCssIcon.svg';
import tanstackQueryIcon from '../../../../public/icon/front/tanstackQueryIcon.png';
import styledComponentIcon from '../../../../public/icon/front/styledComponentIcon.png';

import gitIcon from '../../../../public/icon/tools/gitIcon.svg';
import gitHubIcon from '../../../../public/icon/tools/gitHubIcon.svg';
import npmIcon from '../../../../public/icon/tools/npmIcon.svg';
import vsCodeIcon from '../../../../public/icon/tools/vsCodeIcon.svg';
import jiraIcon from '../../../../public/icon/tools/jiraIcon.svg';
import bitbucketIcon from '../../../../public/icon/tools/bitbucketIcon.svg';

import astroIcon from '../../../../public/icon/learning/astroIcon.svg';
import expressIcon from '../../../../public/icon/learning/expressIcon.svg';
import nodeJsIcon from '../../../../public/icon/learning/nodeJsIcon.svg';
import mongoDbIcon from '../../../../public/icon/learning/mongoDbIcon.svg';

import cSharpIcon from '../../../../public/icon/extras/cSharpIcon.svg';
import javaIcon from '../../../../public/icon/extras/javaIcon.svg';
import mySqlIcon from '../../../../public/icon/extras/mySqlIcon.svg';
import phpIcon from '../../../../public/icon/extras/phpIcon.svg';
import pythonIcon from '../../../../public/icon/extras/pythonIcon.svg';

const cards = [
  {
    title: 'Front-End',
    icons: [htmlIcon, cssIcon, javaScriptIcon, typeScriptIcon, reactIcon, tailwindCssIcon, nextJsIcon, viteIcon, tanstackQueryIcon, styledComponentIcon],
    alt: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Next.js', 'Vite', 'Tanstack Query', 'Styled Component'],
    levels: ['Avanzado', 'Avanzado', 'Avanzado', 'Intermedio', 'Avanzado', 'Avanzado', 'Intermedio', 'Intermedio', 'Intermedio', 'Intermedio']
  },
  {
    title: 'Herramientas',
    icons: [gitIcon, gitHubIcon, npmIcon, vsCodeIcon, jiraIcon, bitbucketIcon],
    alt: ['Git', 'GitHub', 'NPM', 'VS Code', 'Jira', 'Bitbucket'],
    levels: ['Intermedio', 'Intermedio', 'Avanzado', 'Avanzado', 'Intermedio', 'Intermedio']
  },
  {
    title: 'Aprendiendo',
    icons: [astroIcon, expressIcon, nodeJsIcon, mongoDbIcon],
    alt: ['Astro', 'Express', 'Node.js', 'MongoDB'],
    levels: ['Básico', 'Básico', 'Básico', 'Básico']
  },
  {
    title: 'Extras',
    icons: [cSharpIcon, javaIcon, mySqlIcon, phpIcon, pythonIcon],
    alt: ['C#', 'Java', 'MySQL', 'PHP', 'Python'],
    levels: ['Básico', 'Básico', 'Intermedio', 'Básico', 'Intermedio']
  },
];

const cardGroups = [
  [0, 1],
  [2, 3],
];

const AboutSkills = () => {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className='w-full flex flex-col gap-4'>
      {cardGroups.map((group, groupIndex) => (
        <div key={groupIndex} className='flex flex-col sm:flex-row gap-4'>
          {group.map((cardIndex) => {
            const card = cards[cardIndex];
            return (
              <div
                key={cardIndex} 
                className='flex-1 relative flex flex-col items-center bg-coalBlue text-white text-lg font-semibold rounded-3xl shadow-lg shadow-black p-5 py-6'
              >
                <h2 className='mb-6 text-xl text-white font-semibold'>{card.title}</h2>
                <div className='w-full grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 place-items-center'>
                  {card.icons.map((icon, idx) => {
                    const isHovered = hoveredIcon === idx && hoveredCard === cardIndex;
                    return (
                      <div
                        key={idx}
                        className='relative flex flex-col items-center'
                        onMouseEnter={() => { setHoveredIcon(idx); setHoveredCard(cardIndex); }}
                        onMouseLeave={() => setHoveredIcon(null)}
                      >
                        <Image 
                          src={icon} 
                          alt={card.alt[idx] || 'Icon'} 
                          width={50} 
                          height={50} 
                          priority 
                          className='transition-transform duration-300 hover:scale-110'
                        />

                        <AnimatePresence>
                          {isHovered && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.1 }}
                              className="absolute bottom-[70px] left-1/2 transform -translate-x-1/2 w-36 smx:w-44 bg-charcoalBlue text-white text-center p-2 smx:p-2 rounded-lg shadow-2xl shadow-black z-50 
                              before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-t-charcoalBlue"
                            >
                              <p className='font-bold text-lightSeaGreen text-base'>{card.alt[idx]}</p>
                              <p className='text-gray-300 text-sm mt-1'>Nivel: {card.levels[idx]}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default AboutSkills;