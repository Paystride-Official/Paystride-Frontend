import Image from "next/image";
import React from "react";
import PaystrideWhite from "@/app/(marketing)/assets/image 11.svg";
import Facebook from "@/app/(marketing)/assets/Facebook.svg";
import Instagram from "@/app/(marketing)/assets/Instagram.svg";
import Twitter from "@/app/(marketing)/assets/Twitter.svg";
import LinkedIn from "@/app/(marketing)/assets/LinkedIn.svg";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
    return (
        <div className="bg-[#091F8E] w-[100%] flex justify-center pt-10 pb-3 md:pt-16 md:pb-5">
            <div className="w-[90%] text-white">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex w-full md:w-[60%] lg:w-[50%] flex-col justify-between items-center h-[8rem] md:h-[15rem] mb-5 md:mb-0">
                        <h1 className="text-2xl md:text-3xl lg:text-[40px] xl:text-5xl capitalize font-bold text-center leading-7 md:leading-10">
                            Growth your business with Paystride solution now!
                        </h1>

                        <button className="text-black capitalize bg-white py-[6px] px-3 md:py-2 md:px-4 text-[12px] min-[360px]:text-sm sm:text-base xl:text-xl">
                            try paystride for free
                        </button>
                    </div>
                    <div className="w-full md:w-[40%] lg:w-[34%] flex flex-col justify-between items-start h-[12rem] md:h-[15rem]">
                        <Image src={PaystrideWhite} alt="LogoNameImage" />
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
                <hr className="mt-8" />
                <div className="text-xs md:text-sm capitalize flex flex-col md:flex-row justify-between">
                    <div className="gap-2 md:gap-4 flex pt-4">
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
                    <div className="pt-4">
                        &copy; 2023 paystride. all rights reserved
                    </div>
                </div>
                <p className="font-bold capitalize text-xs md:text-sm text-center pt-7 md:pt-11">
                    powered by topstride
                </p>
            </div>
        </div>
    );
};

export default Footer;
