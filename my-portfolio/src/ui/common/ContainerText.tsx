
import React, { ReactNode } from 'react'

interface ContainerTextProps {
  children: ReactNode;
  className?: string;
};

const ContainerText: React.FC<ContainerTextProps> = ({ children, className }) => {
  return (
    <div className={`bg-coalBlue p-5 rounded-3xl shadow-lg shadow-black space-y-6 ${className || ''}`}>
      {children}
    </div>
  )
}

export default ContainerText;