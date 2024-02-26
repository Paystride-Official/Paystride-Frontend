import Image from "next/image";
import React from "react";
import Success from "@/components/Navbar/assets/Success.svg";
import System from "@/components/Navbar/assets/System.svg";
import Failed from "@/components/Navbar/assets/Failed.svg";

type Props = {};

const NotificationPopOver = (props: Props) => {
  return (
    <div className="w-[80vw] md:w-[52vw] px-2 py-1">
      <div>
        <h2 className="font-bold text-base sm:text-lg mb-1">Notification</h2>
      </div>
      <hr />
      <div className="py-4 mb-1 font-semibold flex flex-col gap-y-4 text-[10px] sm:text-sm leading-3 sm:leading-5">
        <div className="flex justify-between items-start">
          <div className="flex capitalize gap-1 sm:gap-2 pr-1">
            <Image src={Success} alt="Success" className="w-3 sm:w-auto" />
            <span className="text-[#188f0f]">successful</span>
          </div>
          <div className="max-w-[52vw] min-w-[52vw] md:max-w-[37vw] md:min-w-[37vw]">
            <p className="text-[#3333337d]">
              The sum of NGN 350,000 has been settled into account 0018927400
              Zenith Bank on 12th June, 1984
            </p>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div className="flex capitalize gap-1 sm:gap-2 pr-1">
            <Image src={System} alt="System" className="w-3 sm:w-auto" />
            <span className="text-[#6b3795]">system message</span>
          </div>
          <div className="max-w-[52vw] min-w-[52vw] md:max-w-[37vw] md:min-w-[37vw]">
            <p className="text-[#3333337d]">
              We will Lorem ipsum is placeholder text commonly used in the
              graphic, print and publishing industries for previewing layouts
              and visual
            </p>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div className="flex capitalize gap-1 sm:gap-2 pr-1">
            <Image src={Failed} alt="Failed" className="w-3 sm:w-auto" />
            <span className="text-[#d90d0d]">failed</span>
          </div>
          <div className="max-w-[52vw] min-w-[52vw] md:max-w-[37vw] md:min-w-[37vw]">
            <p className="text-[#3333337d]">
              A sum of NGN 350,000 settlement was not succesful
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopOver;
