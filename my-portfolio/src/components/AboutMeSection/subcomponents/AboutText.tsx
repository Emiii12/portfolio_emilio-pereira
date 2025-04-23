'use client'
import { useAppContext } from '@/context/AppContext';
import ContainerText from '@/ui/common/ContainerText';
import { ReadMore } from '@/ui/button/ReadMore';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react'
import { useTranslation } from 'react-i18next';

const AboutText = () => {
	const { showMore, toggleShowMore } = useAppContext();
	const { t: tAbout } = useTranslation("aboutMeSection");
	const { t: tCommon } = useTranslation("common");

	return (
		<>
			<ContainerText >
				<div className='space-y-5 text-whiteOff text-sm lg:text-base'>
					<p>
						{tAbout("textSection")}
					</p>
					<AnimatePresence>
						{showMore && (
							<motion.div
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: 'auto', opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ duration: 0.4, ease: 'easeInOut' }}
								className='overflow-hidden flex flex-col gap-5'
							>
								<p className='whitespace-pre-line'>
									{tAbout("textExtra")}
								</p>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
				<span className='text-start text-xs sm:text-sm text-white'>
					{showMore ? tCommon("notInteresed") : tCommon("interesed")}{' '}
					<ReadMore expanded={showMore} onClick={toggleShowMore} className='font-semibold'/>
				</span>
			</ContainerText>
		</>
	);
};

export default AboutText;
