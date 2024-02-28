import classNames from "classnames";
import React from "react";

interface Props {
  type: "button" | "submit";
  text: string;
  handleClick?: () => void;
  disabled?: boolean;
  size?: string;
}

const Button = ({ type, text, handleClick, size, disabled }: Props) => {
  return (
    <div
      className={classNames(
        "  text-center bg-[#091f8e] text-[white] mx-auto my-4  px-0 rounded-[37px]",
        { "bg-slate-500": disabled },
        { "bg-[#091f8e]": !disabled },
        { "w-[90%]": !size },
        { "w-[65%]": size }
      )}
    >
      <button
        type={type}
        className="capitalize w-full h-full pt-[15px] pb-4"
        disabled={disabled}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
