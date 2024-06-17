import React from "react";
import Image from "next/image";
import Cart from "@/app/(preload)/assets/Buy.svg";
import Sidebar from "../_components/Sidebar/Sidebar";

type Props = {};

const cartHistory = (props: Props) => {
  return (
    <>
      <div className="h-[100vh]">
        <Sidebar />

        <div className="bg-white md:bg-[#FBFBFB] relative md:w-[75%] text-[#7F7F7F] md:ml-[25%] h-[100vh]">
          <div className="bg-white flex justify-center">
            <div className="pt-4 pb-3 md:flex items-baseline justify-between w-[100%] md:w-[80%] lg:w-[75%]">
              <div className="text-center md:text-start pb-3 md:pb-0">
                <h2 className="text-xl sm:text-2xl lg:text-[32px] md:font-bold capitalize tracking-wide">
                  Ebeano supermarket
                </h2>
                <p className="text-xs sm:text-sm mt-1 md:mt-2">
                  payment point - 1
                </p>
              </div>
              <div className="text-center md:text-end bg-[#FBFBFB] md:bg-transparent flex flex-col-reverse md:flex-col py-5">
                <h1 className="text-3xl lg:text-[42px] font-Poppins text-[#2C2C63] tracking-tighter">
                  NGN 82,500
                </h1>
                <p className="text-xs sm:text-sm capitalize md:mt-2 mb-1 md:mb-0">
                  most recent payment
                </p>
              </div>
            </div>
          </div>

          <div className="md:bg-[#FBFBFB] flex justify-center pb-28">
            <div className="w-[90%] md:w-[80%] lg:w-[75%] relative">
              <p className="py-4 text-sm md:text-base">Last 5 payments</p>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[19px] hidden md:flex items-center">
                  <span className="bg-[#32a7e21a] w-[60px] h-[60px] mr-[6px] flex items-center justify-center rounded-[20px]">
                    <Image src={Cart} alt="Cart" />
                  </span>
                  12.32pm
                </p>
                <p className="capitalize text-xl font-medium text-black hidden md:block">
                  grocery
                </p>

                {/* mobile view */}
                <div className="block md:hidden">
                  <div className="flex items-center">
                    <span className="bg-[#32a7e21a] w-12 h-12 sm:w-[60px] sm:h-[60px] mr-[6px] flex items-center justify-center rounded-2xl sm:rounded-[20px]">
                      <Image src={Cart} alt="Cart" className="w-7 sm:w-auto" />
                    </span>
                    <div>
                      <p className="capitalize text-base sm:text-xl font-medium text-black">
                        grocery
                      </p>
                      <p className="text-sm md:text-[19px]">12.32pm</p>
                    </div>
                  </div>
                </div>
                {/* end of mobile view */}

                <p className="capitalize text-base sm:text-xl font-medium text-black">
                  NGN 32,600
                </p>
              </div>
            </div>
          </div>

          <div className=" flex justify-center md:ml-[25%]">
            <div className="fixed bottom-0 w-[90%] md:w-[80%] lg:w-[75%] md:bg-[#FBFBFB]">
              <div>
                <button
                  type="button"
                  className="bg-[#091F8E] text-xs sm:text-[15px] md:my-5 font-semibold py-3 md:px-20 rounded-3xl text-white w-full md:w-auto tracking-[2px] uppercase"
                >
                  tap to refresh
                </button>
                <p className="font-bold block md:hidden text-sm text-black tracking-wider text-center my-2">
                  Powered by Paystride
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default cartHistory;
