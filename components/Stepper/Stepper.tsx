import React from "react";

interface Props {
  step: number;
}

const Stepper = ({ step }: Props) => {
  return (
    <section className="mb-8">
      <div className="flex gap-2">
        <p className="w-[46px] h-[46px] rounded-full bg-[#4256D0] flex items-center justify-center text-white">
          1
        </p>
        <p
          className=" mt-6 
        w-[97.169px]
         h-[0.517px]
          bg-[#1E1E1E]"
        ></p>
        <p
          className={`w-[46px] h-[46px] 
          rounded-full
          flex items-center
           justify-center
            border-[1px]
            border-solid
            border-[#1e1e1e]
            ${step === 2 ? "text-white bg-[#4256D0]" : "text-black bg-white"}
            `}
        >
          2
        </p>
      </div>
    </section>
  );
};

export default Stepper;
