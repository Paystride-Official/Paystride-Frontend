import React from "react";
import Logout from "@/components/Navbar/assets/Logout.svg";
import Notification from "@/components/Navbar/assets/Notification.svg";
import Image from "next/image";
import NotificationPopOver from "./NotificationPopOver/NotificationPopOver";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <>
            <section className=" h-[3.5rem]  flex justify-end sticky top-0 bg-white shadow-sm z-10">
                <div className="flex gap-4 px-4 mr-4">
                    <Popover placement="bottom-end" backdrop="opaque">
                        <PopoverTrigger>
                            <Image
                                src={Notification}
                                alt="Notification"
                                className="bg-[#ECECEC] w-[50px] h-[40px] my-2 rounded-[5px] p-2 cursor-pointer"
                            />
                        </PopoverTrigger>
                        <PopoverContent className="rounded-[4px]">
                            <NotificationPopOver />
                        </PopoverContent>
                    </Popover>

                    <Image
                        src={Logout}
                        alt="Logout"
                        className="bg-[#ECECEC] w-[50px] h-[40px] my-2 rounded-[5px] p-2"
                    />
                </div>
            </section>
        </>
    );
};

export default Navbar;
