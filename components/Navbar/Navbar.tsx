"use client";
import React, { useState } from "react";
import Logout from "@/components/Navbar/assets/Logout.svg";
import Notification from "@/components/Navbar/assets/Notification.svg";
import Image from "next/image";
import Menu from "@/components/Navbar/assets/Menu.svg";
import Paystride from "@/app/assets/Paystride.svg";
import NotificationPopOver from "./NotificationPopOver/NotificationPopOver";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import Sidebar from "../Sidebar/Sidebar";

type Props = {};

const Navbar = (props: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <section className="bg-white h-[3.5rem] sticky top-0 z-10 px-5 md:px-0">
            <div className="flex justify-between md:justify-end items-center">
                <div className="flex items-center md:hidden gap-2">
                    <div className="block md:hidden">
                        <div className="flex h-[3.5rem]  items-center  bg-white">
                            <Image
                                src={Paystride}
                                alt="Paystride"
                                className="h-[2.5rem]"
                            />
                            <h1 className="ml-1 text-lg font-bold text-[#6A8F9F] flex items-center justify-center">
                                Paystride
                            </h1>
                        </div>
                    </div>
                    <div
                        onClick={() => setOpen(!open)}
                        className="block md:hidden"
                    >
                        <Image src={Menu} alt="Menu" />
                    </div>
                </div>
                <div className="flex gap-4 md:mr-4">
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
                <div
                    className={`absolute md:hidden duration-[500ms] w-fit h-screen top-[100%] ${
                        open ? "left-0 " : "left-[-100%]"
                    }`}
                >
                    <div onClick={() => setOpen(!open)} className="fixed">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
