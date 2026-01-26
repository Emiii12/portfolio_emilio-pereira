// src/ui/ButtonBackTop.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

export const ButtonBackTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="back-to-top"
          onClick={scrollToTop}
          aria-label="Volver arriba"
          initial={{ opacity: 0, y: 140 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="
            fixed bottom-6 right-6
            w-12 h-12
            rounded-full
            bg-coalBlue
            border-aquaCyan/50 border-2
            text-whiteOff
            flex items-center justify-center
            shadow-lg
            hover:scale-110
            transition-transform duration-200
            cursor-pointer
          "
        >
          <ChevronUpIcon className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
