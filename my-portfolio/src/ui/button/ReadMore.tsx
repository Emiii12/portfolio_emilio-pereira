import React from 'react';

export const ReadMore = ({
	text,
	onClick,
	className = '',
}: {
	text: string;
	onClick: () => void;
	className?: string;
}) => (
	<button
		onClick={onClick}
		className={`text-aquaCyan hover:text-lightSeaGreen transition-colors duration-150 cursor-pointer ${className}`}
	>
		{text}
	</button>
);
