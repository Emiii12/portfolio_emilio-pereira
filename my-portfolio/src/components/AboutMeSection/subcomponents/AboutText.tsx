'use client'
import { useAppContext } from '@/context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react'

const AboutText = () => {
	const { showMore } = useAppContext();

	return (
		<div className='space-y-5'>
			<p className='text-sm'>
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
						<p className='text-sm'>
							Lo que me distingue es que siempre pienso más allá de lo que me piden. Me gusta sorprender con ideas y mejoras 
							que el cliente ni siquiera sabía que necesitaba, y que hacen que el producto final sea mucho mejor de lo esperado.
						</p>
						<p className='text-sm'>
							Me gusta probar tecnologías nuevas y estar al día con lo último del desarrollo web. Esta curiosidad me ayuda 
							a encontrar formas más efectivas de resolver problemas y a seguir mejorando mis habilidades día a día.
						</p>
						<p className='text-sm'>
							A largo plazo, sueño con crear algo propio que realmente ayude a otras personas. Quiero desarrollar un producto 
							que la gente use con confianza y que les haga la vida más fácil o mejor de alguna manera. Que le aporte calidad
							en vez de cantidad.
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default AboutText;
