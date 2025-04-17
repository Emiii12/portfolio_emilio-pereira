"use client"
import React, { useState } from 'react';

interface OptionCustomSelect {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: OptionCustomSelect[];
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
  containerClass?: string; 
  selectClass?: string; 
  labelClass?: string;
  label?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  icon,
  containerClass = '',
  selectClass = '',
  labelClass = '',
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (newValue: string) => {
    onChange(newValue); 
    setIsOpen(false); 
  };

  return (
    <div className={`relative ${containerClass}`}>
      {label && <label className={`block mb-2 ${labelClass}`}>{label}</label>}
      <select
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        className={`bg-coalBlue text-white w-full appearance-none outline-none cursor-pointer ${selectClass}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {icon && (
        <div
          className={`w-5 h-5 text-lightSeaGreen absolute right-2 top-1/2 transform -translate-y-1/2 transition-transform duration-150 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          {icon}
        </div>
      )}
    </div>
  );
};