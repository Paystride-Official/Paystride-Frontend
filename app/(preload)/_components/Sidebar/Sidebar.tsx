import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/(preload)/assets/Group 10.svg";
import Paystride from "@/app/(preload)/assets/Paystride.svg";
import Vector from "@/app/(preload)/assets/VectorLines.svg";

type Props = {};

const Sidebar = (props: Props) => {
    return (
        <div className="hidden md:block md:w-[25%] md:fixed top-0 bottom-0 left-0 z-10 bg-[#051355]">
            <div className=" flex flex-col items-center py-3 md:pt-[15vh]">
                <div className="flex flex-row md:flex-col gap-x-2 sm:gap-x-4">
                    <Image
                        src={Logo}
                        alt="Logo"
                        className="w-4 sm:w-5 md:w-9  md:pb-4 mx-auto"
                    />
                    <Image
                        src={Paystride}
                        alt="LogoName"
                        className="w-20 sm:w-24 md:w-36"
                    />
                </div>
                <Image
                    src={Vector}
                    alt="Vector"
                    className="h-[60vh] absolute bottom-0 w-full hidden md:block"
                />
            </div>
        </div>
    );
};

export default Sidebar;
