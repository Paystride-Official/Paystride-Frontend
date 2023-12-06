import React from "react";
import Image from "next/image";
import BerryShop from "@/app/(marketing)/assets/image 8.svg";
import Atm from "@/app/(marketing)/assets/image 4.svg";
import PriceSettlement from "@/app/(marketing)/assets/image 14.svg";
import PayPoint from "@/app/(marketing)/assets/image 13.svg";
import AccordionItem from "@/components/FaqAccordion/AccordionItem/AccordionItem";
import Footer from "@/components/Footer/Footer";

type Props = {};

const Features = (props: Props) => {
    return (
        <>
            <div className="relative md:py-[3rem] lg:py-[6rem] w-[100%]">
                <div className="bg-[#d0d0df] pt-9 md:pt-11 pb-5 lg:pb-[6rem] w-[100%] md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-5 md:rounded-2xl">
                    <div className="md:pl-8 col-span-3 flex items-center w-[90%] md:w-auto mx-auto">
                        <div className="">
                            <h1 className="capitalize text-3xl md:text-5xl lg:text-[56px] font-bold">
                                small investment, exponential growth
                            </h1>
                            <div className="flex mt-6 mb-2 md:mt-8 gap-4">
                                <button className="text-white capitalize bg-[#091F8E] py-1 px-3 md:py-2 md:px-4 text-[12px] md:text-base xl:text-xl">
                                    try paystride for free
                                </button>
                                <button className="border border-solid border-[#21232a] py-1 px-3 md:py-2 md:px-4 text-[12px] md:text-base xl:text-lg capitalize">
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

            <div className="w-[90%] py-[5rem] grid grid-cols-1 md:grid-cols-2 items-center gap-4">
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
                            className="absolute w-[37%] bottom-[-2.5rem] md:top-[-3.5rem] md:right-5"
                        />
                        <Image
                            src={PayPoint}
                            alt="PayPointImage"
                            className="absolute w-[37%] top-[-2rem] right-0 md:left-0 md:top-[75%]"
                        />
                    </div>
                </div>
                <div className="pt-5 flex items-center">
                    <div className="pt-3 md:pt-0">
                        <h1 className="mb-3 font-bold text-4xl md:text-5xl lg:text-6xl">
                            2%
                        </h1>
                        <h2 className="text-[#6A8F9F] text-2xl md:text-3xl lg:text-4xl capitalize">
                            mobile transactions
                        </h2>

                        <p className="mt-3 mb-5 tracking-wide max-w-[50rem] md:mt-6 mx-auto md:text-lg text-start">
                            We charge 2% transaction fee or N2500 Cap for
                            transactions N100,000 and above.
                        </p>
                        <button className="text-white capitalize bg-[#091F8E] py-1 px-3 md:py-2 md:px-4 text-[12px] md:text-base xl:text-xl">
                            try paystride for free
                        </button>
                    </div>
                </div>
            </div>

            <AccordionItem />

            <Footer />
        </>
    );
};

export default Features;
