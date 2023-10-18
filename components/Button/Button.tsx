import React from "react";

interface Props {
  type: "button" | "submit";
  text: string;
  handleClick?: () => void;
  overide?: string;
}

const Button = ({ type, text, handleClick, overide }: Props) => {
  return (
    <div
      className={`
      ${overide ? `${overide}` : "w-[90%]"}
        text-center
       bg-[#091f8e]
        text-[white]
         mx-auto my-4
         pt-[15px]
         pb-4 px-0
         rounded-[37px]`}
    >
      <button type={type} className="capitalize " onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
