import React from "react";

type InputProps = {
  label?: string;
  placeholder?: string;
  id: string;
  type: string;
  required?: boolean;
};
// rounded-[37px]
const Input = ({ label, placeholder, id, type, required }: InputProps) => {
  return (
    <div className="text-center">
      <label
        htmlFor=""
        className="text-[#333] text-base not-italic font-medium leading-[normal] inline-block w-[90%] text-start pb-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        className="px-[15px] py-[8px] rounded-[10px] outline-none w-[90%]"
      />
    </div>
  );
};

export default Input;
