import React from "react";
import Image from "next/image";
import Link from "next/link";
import BerryShop from "@/app/(marketing)/assets/Pricing.svg";
import Atm from "@/app/(marketing)/assets/image 4.svg";
import PriceSettlement from "@/app/(marketing)/assets/settlement.svg";
import PayPoint from "@/app/(marketing)/assets/paypointstat.svg";
import Footer from "@/app/(marketing)/_components/Footer/Footer";
import Accordion from "@/app/(marketing)/_components/Accordion/Accordion";

type Props = {};

const Pricing = (props: Props) => {
  return (
    <>
      <div className="relative md:py-[3rem] lg:py-[6rem] w-[100%]">
        <div className="bg-[#d0d0df] pt-9 md:pt-11 pb-5 lg:pb-[6rem] w-[100%] md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-5 md:rounded-2xl">
          <div className="md:pl-8 col-span-3 flex items-center w-[90%] md:w-auto mx-auto">
            <div className="">
              <h1 className="capitalize text-3xl md:text-5xl lg:text-[56px] font-bold">
                accept transfer payments seamlessly
              </h1>
              <div className="flex mt-6 mb-2 md:mt-8 gap-4">
                <Link href="/paystride-lite">
                  <button className="rounded-md text-white capitalize bg-[#091F8E] py-[6px] px-3 md:py-2 md:px-4 text-[12px] min-[360px]:text-sm sm:text-base xl:text-lg hover:bg-[#051359]">
                    try paystride for free
                  </button>
                </Link>
                <button className="rounded-md border border-solid border-[#21232a] py-[6px] px-3 md:py-2 md:px-4 text-[12px] min-[360px]:text-sm sm:text-base xl:text-lg capitalize hover:bg-[#f9f8f8]">
                  Discover in 1 minute
                </button>
              </div>
            </div>
          </div>

          <div className="mx-auto py-5 top-[4%] xl:top-[2%] col-span-2 w-[90%] md:w-auto right-[7%] xl:right-[10%] lg:absolute ">
            <Image
              alt="BerryShopImage"
              src={BerryShop}
              priority
              className="rounded-2xl max-h-[300px] md:max-h-[400px] w-full lg:w-[340px] lg:max-h-[450px] xl:w-[380px] xl:max-h-[480px]"
            />
          </div>
        </div>
      </div>

      <div className="w-[90%] pt-[5rem] pb-[3rem] md:py-[5rem] grid grid-cols-1 md:grid-cols-2 items-center gap-4">
        <div>
          <div className="relative w-full  max-w-[80rem] mx-auto">
            <Image
              src={Atm}
              alt="AtmImage"
              className="w-full h-[100%] rounded-none lg:max-w-[480px]"
            />
            <Image
              src={PriceSettlement}
              alt="PriceSettlementImage"
              className="absolute w-[37%] bottom-[-3rem] md:top-[-3rem] md:right-5"
            />
            <Image
              src={PayPoint}
              alt="PayPointImage"
              className="absolute w-[37%] top-[-3rem] right-0 md:left-0 md:top-[80%]"
            />
          </div>
        </div>
        <div className="pt-5 flex items-center">
          <div className="pt-3 md:pt-0">
            <h1 className="mb-3 font-bold text-4xl md:text-5xl lg:text-6xl">
              1%
            </h1>
            <h2 className="text-[#6A8F9F] text-2xl md:text-3xl lg:text-4xl capitalize">
              mobile transactions
            </h2>

            <p className="my-3 md:mb-5 tracking-wide max-w-[50rem] md:mt-6 mx-auto md:text-lg text-start">
              We charge 1% transaction fee or N1500 Cap for transactions
              N100,000 and above.
            </p>
            <Link href="/paystride-lite">
              <button className="rounded-md text-white capitalize bg-[#091F8E] py-[6px] px-3 md:py-2 md:px-4 text-[12px] min-[360px]:text-sm sm:text-base xl:text-lg hover:bg-[#051359]">
                try paystride for free
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Accordion
        bgcolor={{ backgroundColor: "#D2DDE2" }}
        border={{ borderColor: "#D2DDE2" }}
      />

      <Footer />
    </>
  );
};

export default Pricing;
