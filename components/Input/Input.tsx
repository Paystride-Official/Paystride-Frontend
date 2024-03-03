import { NewUser } from "@/types/types";
import { UseFormRegister } from "react-hook-form";

type InputProps = {
  label: string;
  placeholder?: string;
  id: keyof NewUser;
  type: string;
  required?: boolean;
  register: UseFormRegister<NewUser>;
};
// rounded-[37px]

const Input = ({
  label,
  placeholder,
  id,
  type,
  register,
  required,
}: InputProps) => {
  return (
    <div className="text-center">
      <label
        htmlFor=""
        className="text-[#333] text-base not-italic font-medium leading-[normal] inline-block w-[90%] text-start pb-1"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        id={id}
        {...register(id)}
        placeholder={placeholder}
        className="px-[15px] py-[8px] rounded-[10px] outline-none w-[90%] "
      />
    </div>
  );
};

export default Input;
