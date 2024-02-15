import { NewUser } from "@/types/types";
import { UseFormRegister } from "react-hook-form";

type InputProps = {
  label: string;
  placeholder?: string;
  id: keyof NewUser;
  type: string;
  register: UseFormRegister<NewUser>;
};
// rounded-[37px]

const Input = ({ label, placeholder, id, type, register }: InputProps) => {
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
        {...register(id)}
        placeholder={placeholder}
        className="px-[15px] py-[8px] rounded-[10px] outline-none w-[90%] bg-gray-100"
      />
    </div>
  );
};

export default Input;
