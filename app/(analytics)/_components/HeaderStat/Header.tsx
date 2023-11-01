import { HeaderStatProps } from "@/types";
import classNames from "classnames";
import React from "react";

const Header = () => {
  const headerStat: HeaderStatProps[] = [
    {
      name: "Sales",
      amount: ` ₦123456`,
      description: "/yesterday",
      count: 100,
    },
    {
      name: "Settlement",
      amount: " ₦123456",
      description: "No. of settlement",
      count: 10,
    },
    {
      name: "Payment point",
      amount: " 6",
    },
  ];

  return (
    <div className="w-full  md:flex  md:flex-wrap gap-4">
      {headerStat.map((item) => {
        return (
          <div
            className="
              h-[143px]
              md:w-2/5
              lg:w-60
              bg-white  
            rounded-[6.198px]
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
              <p
                className={classNames({
                  "pl-[10.329px] pr-[11.186px] pt-[3.099px] pb-[4.725px] rounded-[51.647px] bg-[#23c10a26] ":
                    item.count,
                })}
              >
                {item.count}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
