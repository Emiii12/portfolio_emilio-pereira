import React from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

interface CustomTextareaProps {
  id: string;
  labelText?: string;
  labelClass?: string;
  placeholder?: string;
  rows?: number;
  register?: UseFormRegisterReturn;
  error?: FieldError | undefined;
  errorMessage?: string;
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  id,
  labelText,
  labelClass = '',
  placeholder = '',
  rows = 4,
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
        <textarea
          id={id}
          placeholder={placeholder}
          rows={rows}
          className={`w-full text-sm min-h-[120px] max-h-[250px] text-whitep-3 rounded-lg bg-coalBlue border ${error ? 'border-red-500' : 'border-aquaCyan/50'} transition-all duration-100 ease-in-out focus:border-lightSeaGreen focus:ring focus:ring-lightSeaGreen outline-none appearance-none`}
          {...(register || {})}
        ></textarea>
      </div>
      {error && (
        <p className="mt-1 text-red-500 text-sm">{errorMessage}</p>
      )}
    </div>
  );
};

export default CustomTextarea;