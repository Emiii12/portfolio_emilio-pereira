
import { XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'

interface ButtonXProps {
  onClick: () => void;
  className?: string;
}

const ButtonX: React.FC<ButtonXProps> = ({ onClick, className = '' }) => {
  return (
    <button
      className={`p-1 border border-lightSeaGreen rounded-full hover:bg-charcoalBlue transition-colors duration-150 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <XMarkIcon className="text-lightSeaGreen size-4 sm:size-5" />
    </button>
  )
}

export default ButtonX