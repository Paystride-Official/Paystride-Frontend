"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Menu from "@/app/(marketing)/assets/Menu.svg";
import Paystride from "@/app/(marketing)/assets/image 10.svg";
import PaystrideWhite from "@/app/(marketing)/assets/image 11.svg";
import Close from "@/app/(marketing)/assets/Close.svg";
import Cmark from "@/app/(marketing)/assets/Cmark.svg";
import TopMark from "@/app/(marketing)/assets/TopMark.svg";
import Wavy from "@/app/(marketing)/assets/Wavy.svg";
import BottomMark from "@/app/(marketing)/assets/BottomMark.svg";

type Props = {};

const Navbar = (props: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="h-fit w-full sticky top-0 bg-white border-b-[#21232a] border-b border-solid z-[1000]">
            <div className="flex items-center justify-between px-2 py-4 md:py-5 w-[90%] mx-auto">
                <div className="flex gap-2 items-center">
                    <Link href="/">
                        <Image
                            src={Paystride}
                            alt="Paystride"
                            className="h-10 md:h-12 w-[100%] flex items-center"
                        />
                    </Link>
                </div>
                <div>
                    <ul className="hidden md:flex items-center gap-5">
                        <li>
                            <Link href="/features">Features</Link>
                        </li>
                        <li>
                            <Link href="/pricing">Pricing</Link>
                        </li>
                        <li>
                            <Link href="/login">
                                <button
                                    type="button"
                                    className="border border-solid border-[#21232a] py-1 px-3 md:py-2 md:px-4 text-[12px] md:text-base xl:text-xl capitalize"
                                >
                                    Login
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/paystride-lite">
                                <button
                                    type="button"
                                    className="text-white capitalize bg-[#091F8E] py-2 px-4 text-base xl:text-xl"
                                >
                                    try paystride for free
                                </button>
                            </Link>
                        </li>
                    </ul>
                    <div
                        className="md:hidden cursor-pointer"
                        onClick={() => setOpen(!open)}
                    >
                        <Image src={Menu} alt="Menu" />
                    </div>

                    {/* mobile view */}
                    <div
                        className={`absolute md:hidden bg-[#051355] text-white w-full h-[100vh] top-0 left-0 duration-0 ${
                            open ? "left-0 " : "left-[-200%]"
                        }`}
                    >
                        <div className="px-[5%] border-b-white border-b border-solid relative z-20">
                            <div className="flex justify-between items-center px-2 py-4">
                                <Link href="/" onClick={() => setOpen(!open)}>
                                    <Image
                                        src={PaystrideWhite}
                                        alt="Paystride"
                                        className="h-10 w-full"
                                    />
                                </Link>
                                <Image
                                    onClick={() => setOpen(!open)}
                                    src={Close}
                                    alt="Close"
                                    className="cursor-pointer w-[30px] h-[30px]"
                                />
                            </div>
                        </div>
                        <ul className="relative text-center py-7 px-[5%] z-20">
                            <li className="hover:font-bold hover:text-[#d0d0df] w-full py-3">
                                <Link
                                    href="/features"
                                    onClick={() => setOpen(!open)}
                                >
                                    Features
                                </Link>
                            </li>
                            <li className="hover:font-bold hover:text-[#d0d0df] w-full py-3">
                                <Link
                                    href="/pricing"
                                    onClick={() => setOpen(!open)}
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li className="hover:font-bold hover:text-[#d0d0df] w-full py-3">
                                <Link
                                    href="/login"
                                    onClick={() => setOpen(!open)}
                                >
                                    <button className="border-none py-1 px-3 md:py-2 md:px-4 text-base xl:text-lg capitalize">
                                        Login
                                    </button>
                                </Link>
                            </li>
                            <li className="hover:font-bold w-full py-5">
                                <Link
                                    href="/paystride-lite"
                                    onClick={() => setOpen(!open)}
                                >
                                    <button className="text-black capitalize bg-white py-[6px] px-3 text-base">
                                        try paystride for free
                                    </button>
                                </Link>
                            </li>
                        </ul>
                        <Image
                            src={Cmark}
                            alt="Vector"
                            className="absolute top-0 left-0"
                        />
                        <Image
                            src={TopMark}
                            alt="Vector"
                            className="absolute top-20 left-[55%] z-10"
                        />
                        <Image
                            src={Wavy}
                            alt="Vector"
                            className="absolute top-10 left-[10%] h-full w-[90%]"
                        />
                        <Image
                            src={BottomMark}
                            alt="Vector"
                            className="absolute bottom-10 left-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
