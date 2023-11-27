import Image from "next/image";
import React, { useState } from "react";
import xls from "@/components/Export/assets/xls.svg";
import classNames from "classnames";

type Props = {};

const Export = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border border-solid border-[#DDE2FD] px-4 py-1 rounded-md bg-[#DDE2FD]"
      >
        Export
      </button>

      <div
        className={classNames({
          block: isOpen,
          hidden: !isOpen,
          "flex flex-col absolute top-6 w-fit px-4 py-2 rounded-md z-50 bg-white border border-solid border-[#D9D9D9]":
            true,
        })}
      >
        <button className="flex items-center gap-2">
          <Image src={xls} alt="xls" width={12} height={12} />
          <span>xls</span>
        </button>
        <button className="flex items-center gap-2">
          <Image src={xls} alt="xls" width={12} height={12} />
          <span>pdf</span>
        </button>
      </div>
    </div>
  );
};

export default Export;
