import classNames from "classnames";
import React from "react";

interface Props {
  type: "button" | "submit";
  text: string;
  handleClick?: () => void;
  disabled?: boolean;
  overide?: string;
}

const Button = ({ type, text, handleClick, overide, disabled }: Props) => {
  return (
    <div
      className={classNames(
        "  text-center bg-[#091f8e] text-[white] mx-auto my-4  px-0 rounded-[37px]",
        { "disabled:bg-slate-500": disabled },
        { "w-[90%]": !overide },
        {}
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
