"use client"
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import htmlIcon from '../../../../public/icon/front/htmlIcon.svg';
import cssIcon from '../../../../public/icon/front/cssIcon.svg';
import javaScriptIcon from '../../../../public/icon/front/javaScriptIcon.svg';
import typeScriptIcon from '../../../../public/icon/front/typeScript.svg';
import reactIcon from '../../../../public/icon/front/reactIcon.svg';
import nextJsIcon from '../../../../public/icon/front/nextJsIcon.svg';
import viteIcon from '../../../../public/icon/front/viteIcon.svg';
import tailwindCssIcon from '../../../../public/icon/front/tailwindCssIcon.svg';

import gitIcon from '../../../../public/icon/tools/gitIcon.svg';
import gitHubIcon from '../../../../public/icon/tools/gitHubIcon.svg';
import npmIcon from '../../../../public/icon/tools/npmIcon.svg';
import vsCodeIcon from '../../../../public/icon/tools/vsCodeIcon.svg';

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
    title: "Front-End",
    icons: [htmlIcon, cssIcon, javaScriptIcon, typeScriptIcon, reactIcon, tailwindCssIcon, nextJsIcon, viteIcon],
    alt: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Next.js', 'Vite'],
    levels: ['Avanzado', 'Avanzado', 'Avanzado', 'Intermedio', 'Avanzado', 'Avanzado', 'Intermedio', 'Intermedio']
  },
  {
    title: "Herramientas",
    icons: [gitIcon, gitHubIcon, npmIcon, vsCodeIcon],
    alt: ['Git', 'GitHub', 'NPM', 'VS Code'],
    levels: ['Intermedio', 'Intermedio', 'Avanzado', 'Avanzado']
  },
  {
    title: "Aprendiendo",
    icons: [astroIcon, expressIcon, nodeJsIcon, mongoDbIcon],
    alt: ['Astro', 'Express', 'Node.js', 'MongoDB'],
    levels: ['Básico', 'Básico', 'Básico', 'Básico']
  },
  {
    title: "Extras",
    icons: [cSharpIcon, javaIcon, mySqlIcon, phpIcon, pythonIcon],
    alt: ['C#', 'Java', 'MySQL', 'PHP', 'Python'],
    levels: ['Básico', 'Básico', 'Intermedio', 'Básico', 'Intermedio']
  },
];

const AboutSkills = () => {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-2">
      {cards.map((card, cardIndex) => (
        <div
          key={cardIndex} 
          className="relative flex flex-col items-center bg-coalBlue text-white text-lg font-semibold rounded-3xl shadow-2xl shadow-black p-5 py-6"
        >
          <h2 className="mb-6 text-xl text-white font-semibold">{card.title}</h2>
          <div className="w-full grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 place-items-center">
            {card.icons.map((icon, idx) => (
              <div 
                key={idx} 
                className="relative flex flex-col items-center"
                onMouseEnter={() => { setHoveredIcon(idx); setHoveredCard(cardIndex); }}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <Image 
                  src={icon} 
                  alt={card.alt[idx] || "Icon"} 
                  width={50} 
                  height={50} 
                  priority 
                  className="transition-transform duration-300 hover:scale-110"
                />
                
                <AnimatePresence>
                  {hoveredIcon === idx && hoveredCard === cardIndex && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.1 }}
                      className="absolute top-12 left-1/2 transform -translate-x-1/2 w-36 smx:w-44 bg-charcoalBlue border-[1px] border-vibrantOrange text-white text-center p-1 smx:p-2 rounded-lg shadow-2xl z-50"
                    >
                      <p className="font-bold text-lightSeaGreen text-base">{card.alt[idx]}</p>
                      <p className="text-gray-300 text-sm">Nivel: {card.levels[idx]}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutSkills;