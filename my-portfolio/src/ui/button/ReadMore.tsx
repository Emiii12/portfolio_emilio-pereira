import React from 'react';
import { useTranslation } from "react-i18next";

export const ReadMore = ({
	expanded,
	onClick,
	className = '',
}: {
	expanded: boolean;
	onClick: () => void;
	className?: string;
}) => {
	const { t } = useTranslation("common");
	
	return (
		<button
			onClick={onClick}
			className={`text-aquaCyan hover:text-lightSeaGreen transition-colors duration-150 cursor-pointer ${className}`}
		>
			{expanded ? t('readLess') : t('readMore')}
		</button>
	);
};