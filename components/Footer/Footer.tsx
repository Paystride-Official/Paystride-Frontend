import Image from "next/image";
import React from "react";
import LogoName from "@/app/(marketing)/assets/image11.svg";
import Facebook from "@/app/(marketing)/assets/Facebook.svg";
import Instagram from "@/app/(marketing)/assets/Instagram.svg";
import Twitter from "@/app/(marketing)/assets/Twitter.svg";
import LinkedIn from "@/app/(marketing)/assets/Linkedin.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-[#091F8E] w-[100%] flex justify-center py-10 md:py-16">
      <div className="w-[90%] text-white">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex w-full md:w-[60%] lg:w-[50%] flex-col justify-between items-center h-[8rem] md:h-[15rem] mb-5 md:mb-0">
            <h1 className="text-2xl md:text-3xl lg:text-[40px] xl:text-5xl capitalize font-bold text-center leading-7 md:leading-10">
              Growth your business with Paystride solution now!
            </h1>
            <button className="text-black capitalize bg-white py-1 px-3 md:py-2 md:px-4 text-[12px] md:text-base xl:text-xl">
              try paystride for free
            </button>
          </div>
          {/* <div className="hidden md:col-span-1"></div> */}
          <div className="w-full md:w-[40%] lg:w-[34%] flex flex-col justify-between items-start h-[12rem] md:h-[15rem]">
            <Image src={LogoName} alt="LogoNameImage" />
            <div className="text-xs md:text-sm">
              <h3 className="font-semibold">Address:</h3>
              <p>Level 1, 12 Sample St, Sydney NSW 2000</p>
            </div>
            <div className="text-xs md:text-sm">
              <h3 className="font-semibold">Contact:</h3>
              <p>1800 123 4567</p>
              <p>info@relume.io</p>
            </div>
            <div className="flex gap-4">
              <Image src={Facebook} alt="FacebookIcon" />
              <Image src={Instagram} alt="InstagramIcon" />
              <Image src={Twitter} alt="TwitterIcon" />
              <Image src={LinkedIn} alt="LinkedInIcon" />
            </div>
          </div>
        </div>
        <hr className="mt-8" />
        <div className="text-xs md:text-sm capitalize flex flex-col md:flex-row justify-between">
          <div className="gap-2 md:gap-4 flex pt-4">
            <p>privacy policy</p>
            <p>terms of service</p>
            <p>cookie settings</p>
          </div>
          <div className="pt-4">&copy; 2023 paystride. all rights reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
