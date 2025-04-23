"use client"
import ContainerText from '@/ui/common/ContainerText';
import React from 'react';
import { useTranslation } from 'react-i18next';

const ExperienceText = () => {
	const { t } = useTranslation("experienceSection");
  
	return (
		<ContainerText >
			<p className='text-whiteOff text-sm lg:text-base'>
				{t("textSection")}
			</p>
		</ContainerText>
  );
};

export default ExperienceText;