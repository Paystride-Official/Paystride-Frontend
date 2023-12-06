import Image from "next/image";
import React from "react";
import Menu from "@/app/(marketing)/assets/Menu.svg";
import Paystride from "@/app/assets/Paystride.svg";
type Props = {};

const Navbar = (props: Props) => {
    return (
        <div className="h-fit w-full sticky top-0 bg-white border-b-[#21232a] border-b border-solid z-[1000] ">
            <div className="flex items-center justify-between p-2">
                <div className="flex gap-2 items-center">
                    <Image
                        src={Paystride}
                        alt="Paystride"
                        className="h-12 flex items-center"
                    />
                    <h1 className="text-lg font-bold text-[#6A8F9F] ">
                        Paystride
                    </h1>
                </div>
                <div>
                    <Image src={Menu} alt="Menu" className="md:hidden" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
