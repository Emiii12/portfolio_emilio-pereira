import React from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

interface CustomInputProps {
  id: string;
  labelText?: string;
  labelClass?: string;
  inputClass?: string;
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
  iconClass?: string;
  register?: UseFormRegisterReturn;
  error?: FieldError | undefined;
  errorMessage?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  id,
  labelText,
  labelClass = '',
  inputClass = '',
  placeholder = '',
  type = 'text',
  icon,
  iconClass = '',
  register,
  error,
  errorMessage = 'Este campo es obligatorio'
}) => {
  return (
    <div className="w-full flex flex-col">
      {labelText && (
        <label htmlFor={id} className={`mb-2 ${labelClass}`}>
          {labelText} {register && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`px-3 py-2 rounded-lg bg-coalBlue border ${error ? 'border-red-500' : 'border-aquaCyan/50'} transition-all duration-100 ease-in-out focus:border-lightSeaGreen focus:ring focus:ring-lightSeaGreen outline-none appearance-none w-full pr-10 ${inputClass}`}
          {...(register || {})}
        />
        {icon && (
          <span className={`absolute inset-y-0 right-3 flex items-center ${iconClass} ${error ? 'text-red-500' : 'text-aquaCyan'}`}>
            {icon}
          </span>
        )}
      </div>
      {error && (
        <p className="mt-1 text-red-500 text-sm">{errorMessage}</p>
      )}
    </div>
  );
};

export default CustomInput;