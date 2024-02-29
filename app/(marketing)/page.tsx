import React from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/app/(marketing)/assets/image 2.svg";
import Atm from "@/app/(marketing)/assets/image 4.svg";
import Settle from "@/app/(marketing)/assets/Image 15.svg";
import Slider1 from "@/app/(marketing)/assets/Slider1.svg";
import SliderChima from "@/app/(marketing)/assets/SliderImg1.jpg";
import SliderAlex from "@/app/(marketing)/assets/SliderImg2.jpg";
import Webflow from "@/app/(marketing)/assets/Black.svg";
import Laptop from "@/app/(marketing)/assets/Laptop1.svg";
import Footer from "@/app/(marketing)/_components/Footer/Footer";
import Accordion from "@/app/(marketing)/_components/Accordion/Accordion";
import Carousel from "@/app/(marketing)/_components/Carousel/Carousel";

export default function Home() {
  const slides = [
    {
      image: SliderChima,
      star: 4,
      text: "We have experienced a 20% increase in returning shoppers since we started using paystride.",
      name: "Emmanuel",
      surname: "Chima",
      position: "Manager",
      companyName: "Gojik Mall",
      //companyLogo: Webflow,
    },
    {
      image: SliderAlex,
      star: 5,
      text: "Due to our new swift checkout and seamless customer experience, we have seen a rise in newly organic referral dinners.",
      name: "Alex",
      surname: "Oamen",
      position: "CFO",
      companyName: "Restaurant Business",
      //companyLogo: Webflow,
    },
    {
      image: SliderChima,
      star: 4,
      text: "We have experienced a 20% increase in returning shoppers since we started using paystride.",
      name: "Emmanuel",
      surname: "Chima",
      position: "Manager",
      companyName: "Gojik Mall",
      //companyLogo: Webflow,
    },
    {
      image: SliderAlex,
      star: 5,
      text: "Due to our new swift checkout and seamless customer experience, we have seen a rise in newly organic referral dinners.",
      name: "Alex",
      surname: "Oamen",
      position: "CFO",
      companyName: "Restaurant Business",
      //companyLogo: Webflow,
    },
    {
      image: SliderChima,
      star: 4,
      text: "We have experienced a 20% increase in returning shoppers since we started using paystride.",
      name: "Emmanuel",
      surname: "Chima",
      position: "Manager",
      companyName: "Gojik Mall",
      //companyLogo: Webflow,
    },
  ];

  return (
    <>
      <main className="w-[90%] mx-auto">
        <div className="">
          <div className="py-10">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl mt-8 font-extrabold text-center capitalize p-4 max-w-[27rem] mx-auto sm:max-w-[40rem] lg:max-w-[48rem] ">
              streamline your payment process
            </h1>

            <p className="mt-3 tracking-wide max-w-[50rem] md:mt-6 mx-auto md:text-lg text-center">
              Effortlessly Accept and Confirm Large Scale Transfers! Empower
              your store sales rep(s) to instantly confirm transfer payments -
              no calls needed, no customer delays.
            </p>

            <div className="flex mt-6 mb-2 md:mt-8 gap-4 justify-center">
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
          <div className="relative w-full max-w-[80rem] aspect-square mx-auto">
            <Image
              src={Banner}
              alt="Banner"
              fill
              priority
              className="mt-[-1.5rem] sm:mt-[-5rem] md:mt-[-7rem] lg:mt-[-10rem] z-[-2]"
            />
          </div>
          <div className="mt-[-6rem] sm:mt-[-15rem] md:mt-[-18rem] lg:mt-[-25rem] xl:mt-[-30rem]  md:text-4xl  font-extrabold text-center p-4 max-w-[27rem] mx-auto md:max-w-[40rem]  ">
            <h1 className="text-2xl md:text-3xl lg:text-4xl">
              Unleash the power of mobile payments in your business
            </h1>
          </div>

          <div className="w-full flex flex-col md:flex-row  items-center gap-4 py-5 my-4">
            <div className="flex-[1] flex items-center order-2 md:order-1">
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
            <div className=" flex-[1] relative w-full  max-w-[80rem] aspect-square mx-auto md:order-2">
              <Image
                src={Atm}
                alt="AtmImage"
                fill
                priority
                className="z-[-1]  lg:max-w-[500px]  mx-auto bg-white"
              />
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row  items-center gap-6 py-5 my-4">
            <div className=" flex-[1] relative w-full  max-w-[80rem] aspect-square mx-auto ">
              <Image
                src={Settle}
                alt="SettlementImage"
                fill
                priority
                className="z-[-1]  lg:max-w-[500px]  mx-auto bg-white"
              />
            </div>
            <div className="flex-[1] flex items-center mr-auto order-2 md:order-1">
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
                    <li>
                      Assign accounts to specific stores or payment points
                    </li>
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

          <div className="w-full flex flex-col md:flex-row items-center gap-4 py-5 my-4">
            <div className="flex-[1] flex items-center mr-auto order-2 md:order-1">
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
            <div className=" flex-[1] relative w-full  max-w-[80rem] aspect-square mx-auto md:order-2">
              <Image
                src={Laptop}
                alt="DashboardImage"
                fill
                priority
                className="z-[-1]  lg:max-w-[500px]  mx-auto bg-white"
              />
            </div>
          </div>
        </div>
      </main>

      <div className="bg-[#d2dde2] w-full mt-2 md:mt-5">
        <div className="w-[90%] mx-auto">
          <h1 className="text-[7vw] min-[485px]:text-4xl md:text-5xl lg:text-6xl font-bold text-center pb-4 pt-6">
            What our customers say...
          </h1>
          <Carousel slides={slides} />
        </div>
      </div>

      <div className="w-full py-10">
        <div className="w-[90%] mx-auto md:p-10 ">
          <p className="text-[6vw] min-[390px]:text-2xl lg:text-3xl text-center my-4 font-bold">
            <i>Paystride - Powering Your Favourite Payments Experience</i>
          </p>
          {/* <div className="flex flex-wrap items-center justify-center gap-5 md:gap-10">
            <Image
              src={Webflow}
              width={15}
              height={15}
              className="w-[5.2rem] md:w-[7.5rem] h-auto"
              alt="WebflowLogo"
            />
          </div> */}
        </div>
      </div>

      <Accordion
        bgcolor={{ backgroundColor: "white" }}
        border={{ borderColor: "black" }}
      />

      <Footer />
    </>
  );
}
