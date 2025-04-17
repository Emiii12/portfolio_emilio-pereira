import React from 'react';

interface TechStackProps {
  tech: string;
  className?: string;
}

const TechStack: React.FC<TechStackProps> = ({ tech, className = '' }) => {
  return (
    <span
      className={`bg-charcoalBlue text-nowrap rounded-full transition-all duration-150 hover:-translate-y-1 hover:scale-105 hover:shadow-sm hover:shadow-charcoalBlue cursor-default ${className}`}
    >
			{tech}
    </span>
  );
};

export default TechStack;