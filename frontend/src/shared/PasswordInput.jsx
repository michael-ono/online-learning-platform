import React, { useState } from 'react';
import { FaLock, FaEye } from 'react-icons/fa';

const PasswordInput = ({ id, name, placeholder, value, onChange, onBlur, className }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='relative'>
      <div className=''>
        <span
          className="z-10 h-[2.95rem] leading-snug font-normal absolute text-blueGray-300 bg-[#6a8e3a] rounded text-base items-center justify-center w-10 pl-3 py-3"
        >
          <FaLock color="white" />
        </span>
        <input
          id={id}
          name={name}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={className}
        />
        <span
          className="z-10 h-full leading-snug font-normal absolute right-3 text-blueGray-300 rounded text-base items-center justify-center w-10 pl-3 py-4"
          onClick={togglePasswordVisibility}
        >
          <FaEye color="white" className='cursor-pointer'/>
        </span>
      </div>
    </div>
  );
};

export default PasswordInput;