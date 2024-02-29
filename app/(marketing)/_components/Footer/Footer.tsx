import Image from "next/image";
import React from "react";
import PaystrideWhite from "@/app/(marketing)/assets/image 11.svg";
import Facebook from "@/app/(marketing)/assets/Facebook.svg";
import Instagram from "@/app/(marketing)/assets/Instagram.svg";
import Twitter from "@/app/(marketing)/assets/Twitter.svg";
import LinkedIn from "@/app/(marketing)/assets/Linkedin.svg";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-[#091F8E] w-[100%] flex justify-center py-10 md:py-16">
      <div className="w-[90%] text-white">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex w-full md:w-[60%] lg:w-[50%] flex-col justify-between items-center h-[8rem] md:h-[15rem] mb-5 md:mb-0">
            <h1 className="text-2xl md:text-3xl lg:text-[40px] xl:text-5xl capitalize font-bold text-center leading-7 md:leading-10">
              Grow your business with Paystride now!
            </h1>
            <Link href="/paystride-lite">
              <button className="rounded-md text-black capitalize bg-white py-[6px] px-3 md:py-2 md:px-4 text-[12px] min-[360px]:text-sm sm:text-base xl:text-xl hover:bg-[#f9f8f8]">
                try paystride for free
              </button>
            </Link>
          </div>
          <div className="w-full md:w-[40%] lg:w-[34%] flex flex-col justify-between items-start h-[12rem] md:h-[15rem]">
            <Image src={PaystrideWhite} alt="LogoNameImage" />
            <div className="text-xs md:text-sm">
              <h3 className="font-semibold">Address:</h3>
              <p>50 Iberekodo street, Lagos State, Nigeria.</p>
            </div>
            <div className="text-xs md:text-sm">
              <h3 className="font-semibold">Contact:</h3>
              <p>0704 210 2954</p>
              <p>info@paystride.co</p>
            </div>
            <div className="flex gap-4">
              <Link href="">
                <Image src={Facebook} alt="FacebookIcon" />
              </Link>
              <Link href="">
                <Image src={Instagram} alt="InstagramIcon" />
              </Link>
              <Link href="">
                <Image src={Twitter} alt="TwitterIcon" />
              </Link>
              <Link href="">
                <Image src={LinkedIn} alt="LinkedInIcon" />
              </Link>
            </div>
          </div>
        </div>
        <hr className="mt-10" />
        <div className="text-xs md:text-sm capitalize flex flex-col md:flex-row justify-between">
          <div className="md:gap-4 flex pt-5 justify-evenly">
            <Link href="" className="underline">
              <p>privacy policy</p>
            </Link>
            <Link href="" className="underline">
              <p>terms of service</p>
            </Link>
            <Link href="" className="underline">
              <p>cookie settings</p>
            </Link>
          </div>
          <div className="pt-5 text-center md:text-end flex flex-col min-[1000px]:flex-row">
            <span>&copy; 2023 paystride. all rights reserved.</span>
            <span className="pl-[6px]">powered by topstride innovation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
