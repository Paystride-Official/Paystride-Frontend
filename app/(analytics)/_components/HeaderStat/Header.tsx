import { HeaderStatProps } from "@/types/types";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

type Header = {
    headerStat: HeaderStatProps[];
};

//md:flex-wrap
const Header = ({ headerStat }: Header) => {
    return (
        <div className="w-full flex flex-wrap justify-center md:justify-start  gap-4">
            {headerStat.map((item) => {
                return (
                    <div
                        key={item.name}
                        className="
                        bg-white rounded-md py-3 px-4 h-[6.5rem] sm:h-[7.6rem] w-[8.5rem] sm:min-w-[180px] border-[2.066px] border-solid border-[#ECEEF6]
            "
                    >
                        <p
                            className="  
                text-[#343434] 
              text-[1.5rempx] 
               font-bold
              leading-[normal]
              tracking-[0.165px]
              mb-2 text-sm sm:text-base
              "
                        >
                            {item.name}
                        </p>
                        <p
                            className=" 
              text-[#343434] 
              text-[1.5rem] 
               font-bold
              leading-[normal]
              tracking-[2px] text-xl sm:text-3xl mb-2
                "
                        >
                            {item.amount}
                        </p>
                        <div className="flex justify-between items-center">
                            <p
                                className="
                text-[#949494]
                text-[8px] sm:text-xs
                  font-normal
                   tracking-[0.145px]"
                            >
                                {item.description}
                            </p>
                            <div
                                className={classNames({
                                    " flex px-1 pb-[2px] rounded-[51px] bg-[#23c10a26] ":
                                        item.count,
                                })}
                            >
                                {item.img && (
                                    <Image src={item.img} alt="arrow" />
                                )}
                                <p className="text-green-700 font-semibold text-[9px] sm:text-sm">
                                    {" "}
                                    {item.count}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Header;
