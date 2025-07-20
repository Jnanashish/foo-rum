import React from 'react'

interface FormInputProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({ placeholder, type, value, onChange }: FormInputProps) => {
  return (
    <div>
      <input placeholder={placeholder} type={type} value={value} onChange={onChange} className='bg-[#F4F4F4] w-full h-[46px] rounded-[11px]  p-[12px] text-[14px] font-normal text-[#000000]' />
    </div>
  )
}

export default FormInput