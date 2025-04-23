
import { XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'

interface ButtonXProps {
  onClick: () => void;
  className?: string;
  iconClassName?: string;
  borderColor: string,
};

const ButtonX: React.FC<ButtonXProps> = ({ onClick, className = '', iconClassName, borderColor }) => {
  return (
    <button
      className={`p-1 border border-${borderColor || 'lightSeaGreen'} rounded-full bg-coalBlue hover:bg-charcoalBlue transition-colors duration-150 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <XMarkIcon className={`size-4 sm:size-5 ${iconClassName}`} />
    </button>
  )
}

export default ButtonX