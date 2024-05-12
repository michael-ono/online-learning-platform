import React from 'react'

const SettingsInput = ({type, name, placeholder, labelName, value, onChange, disabled}) => {
  return (
    <div className='w-1/2 mb-4'>
       <label className="block mb-1 text-[0.9rem] font-bold">{labelName}</label>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="text-[0.6rem] md:text-[0.85rem] py-2 w-3/6 bg-[#fffe] pl-2 rounded-[10px] focus:outline-none focus:ring-2 border border-black"
            disabled={disabled}
            autoComplete="off"
        />
    </div>
  )
}

export default SettingsInput;