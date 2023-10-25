"use client"

import React from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";


const Stepper = () => {
    const address = usePathname()
  return (
    <section className="mb-8">
      <div className="flex gap-2">
        <Link href="/register" className="w-[46px] h-[46px] rounded-full bg-[#4256D0] flex items-center justify-center text-white">
          1
        </Link>
        <p
          className=" mt-6 
        w-[97.169px]
         h-[0.517px]
          bg-[#1E1E1E]"
        ></p>
        <Link href="/register/verify"
          className={`w-[46px] h-[46px] 
          rounded-full
          flex items-center
           justify-center
            border-[1px]
            border-solid
            border-[#1e1e1e]
            ${address === '/register/verify' ? "text-white bg-[#4256D0]" : "text-black bg-white"}
            `}
        >
          2
        </Link>
      </div>
    </section>
  );
};

export default Stepper;
