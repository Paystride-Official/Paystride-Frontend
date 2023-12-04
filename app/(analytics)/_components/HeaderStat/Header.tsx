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
    <div className="w-full  md:flex   gap-4">
      {headerStat.map((item) => {
        return (
          <div
            key={item.name}
            className="
              md:w-2/5
              lg:w-60
              bg-white  
            rounded-md
            border-[2.066px]
            border-solid
            border-[#eceef6]
            p-4
            "
          >
            <p
              className="  
                text-[#343434] 
              text-[1.5rempx] 
               font-bold
              leading-[normal]
              tracking-[0.165px]
              mb-2
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
              tracking-[2px]
                "
            >
              {item.amount}
            </p>
            <div className="flex gap-8 items-center">
              <p
                className="
                text-[#949494]
                 text-[14.461px]
                  font-normal
                   tracking-[0.145px]"
              >
                {item.description}
              </p>
              <div
                className={classNames({
                  " flex gap-2 pl-[10px] pr-[11px] pt-[3px] pb-[4.725px] rounded-[51px] bg-[#23c10a26] ":
                    item.count,
                })}
              >
                {item.img && <Image src={item.img} alt="arrow" />}
                <p> {item.count}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
