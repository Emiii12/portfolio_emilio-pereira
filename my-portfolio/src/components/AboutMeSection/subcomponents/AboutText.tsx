'use client'
import { useAppContext } from '@/context/AppContext';
import { ReadMore } from '@/ui/common/ReadMore';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react'

const AboutText = () => {
	const { showMore, toggleShowMore } = useAppContext();

	return (
		<>
			<div className='space-y-5 text-whiteOff text-sm lg:text-base'>
				<p>
					Desarrollador front-end especializado en React con casi 3 años de experiencia. Me enfoco en crear interfaces 
					intuitivas y perfectamente adaptables, donde la funcionalidad y la estética coexisten para ofrecer la mejor 
					experiencia al usuario.
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
							<p>
								Siempre voy más allá de lo esperado, proponiendo ideas y mejoras que elevan la calidad del producto. Me apasiona explorar 
								nuevas tecnologías y tendencias en desarrollo web para encontrar soluciones más eficientes y seguir mejorando día a día.
							</p>
							<p>
								A largo plazo, sueño con crear un producto propio que realmente ayude a las personas, aportando valor y facilitando su día a día
								haciendo destacar la calidad del producto.
							</p>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
			<p className='text-start text-xs sm:text-sm text-white'>
				{showMore ? '¿Ya no te intereso?' : 'Si te intereso:'}{' '}
				<ReadMore text={showMore ? 'Leer menos...' : 'Leer más...'} onClick={toggleShowMore} className='font-semibold'/>
        </p>
		</>
	);
};

export default AboutText;
