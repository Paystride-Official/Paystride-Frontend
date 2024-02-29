import React from "react";
import Image from "next/image";
import Link from "next/link";
import Basket from "@/app/(marketing)/assets/buying.svg";
import Atm from "@/app/(marketing)/assets/image 4.svg";
import Settle from "@/app/(marketing)/assets/Image 15.svg";
import Dash from "@/app/(marketing)/assets/Laptop1.svg";
import Footer from "@/app/(marketing)/_components/Footer/Footer";
import Accordion from "@/app/(marketing)/_components/Accordion/Accordion";

type Props = {};

const Features = (props: Props) => {
  return (
    <>
      <div className="relative md:py-[3rem] lg:py-[6rem] w-[100%]">
        <div className="bg-[#d0d0df] pt-9 md:pt-11 pb-5 lg:pb-12 w-[100%] md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-5 md:rounded-2xl min-[1466px]:mt-6">
          <div className="md:pl-8 col-span-3 flex items-center w-[90%] md:w-auto mx-auto">
            <div className="">
              <h1 className="text-3xl md:text-5xl lg:text-[56px] font-bold">
                Unleash the power of mobile payments in your business
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
          <div className="mx-auto py-5 top-[4.5%] xl:top-[2%] col-span-2 w-[90%] md:w-auto right-[7%] xl:right-[10%] lg:absolute ">
            <Image
              alt="BasketImage"
              src={Basket}
              priority
              className="rounded-2xl max-h-[300px] md:max-h-[400px] w-full lg:w-[340px] lg:max-h-[450px] xl:w-[380px] xl:max-h-[480px]"
            />
          </div>
        </div>
      </div>

      <main className="w-[90%] mx-auto">
        <div className="w-full flex flex-col md:flex-row  items-center gap-4 h-25 my-4 py-5">
          <div className=" flex-[1] relative w-full  max-w-[80rem] aspect-square mx-auto">
            <Image
              src={Atm}
              alt="AtmImage"
              fill
              priority
              className="z-[-1]  lg:max-w-[500px]  mx-auto bg-white"
            />
          </div>
          <div className="flex-[1] flex items-center">
            <div>
              <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
                Receive mobile transfer notifications{" "}
                <span className="text-[#6A8F9F]">instantly</span>
              </h1>
              <p className="my-3 tracking-wide max-w-[50rem] md:mt-6 mx-auto md:text-lg text-start">
                When customers make payments to your virtual account, you
                receive confirmations via a simple notification page and on
                Whatsapp, so that you can monitor your transactions. You can
                also view transactions on your dashboard.
              </p>
              <Link href="/paystride-lite">
                <button className="rounded-md text-white capitalize bg-[#091F8E] py-[6px] px-3 md:py-2 md:px-4 text-[12px] min-[360px]:text-sm sm:text-base xl:text-lg hover:bg-[#051359]">
                  try paystride for free
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row  items-center gap-6 h-25 my-4 py-5">
          <div className="flex-[1] flex items-center order-2 md:order-1">
            <div>
              <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
                Manage settlements with{" "}
                <span className="text-[#6A8F9F]">ease</span>
              </h1>
              <div className="my-3 max-w-[50rem] md:mt-6 md:text-lg text-start mx-auto">
                <p className="tracking-wide mb-1">
                  Managing settlements can be less tedious
                </p>
                <ul className="list-outside list-disc ml-7">
                  <li>Customise account names</li>
                  <li>Scale payment notifications</li>
                  <li>Easily create as many accounts as you need</li>
                  <li>Assign accounts to specific stores or payment points</li>
                </ul>
              </div>
              <Link href="/paystride-lite">
                <button className="rounded-md text-white capitalize bg-[#091F8E] py-[6px] px-3 md:py-2 md:px-4 text-[12px] min-[360px]:text-sm sm:text-base xl:text-lg hover:bg-[#051359]">
                  try paystride for free
                </button>
              </Link>
            </div>
          </div>
          <div className=" flex-[1] relative w-full  max-w-[80rem] aspect-square mx-auto  md:order-2">
            <Image
              src={Settle}
              alt="SettlementImage"
              fill
              priority
              className="z-[-1]  lg:max-w-[500px]  mx-auto bg-white"
            />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row  items-center gap-4 h-25 my-4 py-5">
          <div className=" flex-[1] relative w-full  max-w-[80rem] aspect-square mx-auto">
            <Image
              src={Dash}
              alt="DashboardImage"
              fill
              priority
              className="z-[-1]  lg:max-w-[500px]  mx-auto bg-white"
            />
          </div>
          <div className="flex-[1] flex items-center">
            <div>
              <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
                Make
                <span className="text-[#6A8F9F]"> smarter, data-driven </span>
                decisions with dashboard
              </h1>
              <div className="my-3 max-w-[50rem] md:mt-6 mx-auto md:text-lg text-start">
                <p className="tracking-wide">
                  Our intuitive dashboard will empower you to:
                </p>
                <ul className="list-outside list-disc ml-7">
                  <li>Create payment points</li>
                  <li>Easily reconcile sales</li>
                  <li>Empower your employees</li>
                  <li>Assign staff to roles and permissions</li>
                  <li>Track payments and avoid confirmation delays</li>
                </ul>
              </div>
              <Link href="/paystride-lite">
                <button className="rounded-md text-white capitalize bg-[#091F8E] py-[6px] px-3 md:py-2 md:px-4 text-[12px] min-[360px]:text-sm sm:text-base xl:text-lg hover:bg-[#051359]">
                  try paystride for free
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Accordion
        bgcolor={{ backgroundColor: "#D2DDE2" }}
        border={{ borderColor: "#D2DDE2" }}
      />

      <Footer />
    </>
  );
};

export default Features;
