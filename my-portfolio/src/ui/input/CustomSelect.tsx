"use client"
import React from 'react';

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
  const handleChange = (newValue: string) => {
    onChange(newValue);
  };

  return (
    <div className={`relative`}>
      {label && <label className={`block mb-2 ${labelClass}`}>{label}</label>}
      <div className={`relative ${containerClass}`}>
        <select
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          className={`bg-coalBlue text-white w-full appearance-none outline-none cursor-pointer ${selectClass}`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {icon && (
          <div className="w-5 h-5 text-lightSeaGreen absolute right-2 top-1/2 transform -translate-y-1/2">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};