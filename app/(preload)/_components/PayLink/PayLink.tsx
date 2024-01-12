import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Image from "next/image";
import Logo from "@/app/(preload)/assets/Group 10.svg";
import Paystride from "@/app/(preload)/assets/Paystride.svg";
import Print from "@/app/(preload)/assets/PrintIcon.svg";
import Copy from "@/app/(preload)/assets/copyIcon.svg";
import Link from "next/link";

type PayLinkProps = {
    bankAccount: string;
    bankName: string;
    points: any;
    link: any;
};

const PayLink = ({ bankAccount, bankName, points, link }: PayLinkProps) => {
    const base = "www.paystride.com/";
    const links = base + link;

    const copyLink = () => {
        navigator.clipboard.writeText(links);
        // window.alert("copied");
    };

    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Paystride payment point",
    });

    return (
        <>
            <div className="">
                <div className="flex flex-row md:flex-col items-center justify-center gap-x-2 sm:gap-x-4 pb-6 sm:pb-8 md:pb-12">
                    <Image
                        src={Logo}
                        alt="Logo"
                        className="w-4 sm:w-5 md:w-7 md:pb-2"
                    />
                    <Image
                        src={Paystride}
                        alt="LogoName"
                        className="w-20 sm:w-24 md:w-32"
                    />
                </div>
                <div className="gap-y-7 flex flex-col">
                    {Array.from({ length: points }).map((_, index) => (
                        <div
                            {...points}
                            key={index}
                            ref={componentRef}
                            className="min-[550px]:block hidden"
                        >
                            <div className="capitalize flex justify-between text-xs  sm:text-sm lg:text-base text-[#7F7F7F]">
                                <div className="flex flex-col justify-between py-3">
                                    <p>payment point {index + 1}</p>
                                    <button
                                        onClick={handlePrint}
                                        className="bg-[#091F8E] text-white gap-2 px-4 sm:px-6 py-2 flex items-center rounded"
                                    >
                                        <Image
                                            src={Print}
                                            alt="PrintIcon"
                                            className="w-3 sm:w-5 md:w-6"
                                        />
                                        Print
                                    </button>
                                </div>
                                <div className="bg-[#D2DDE2] max-w-[80%] p-5 gap-y-2 flex flex-col rounded-xl">
                                    <Link
                                        href={links}
                                        className="underline text-[#727EC0] lowercase flex flex-wrap"
                                    >
                                        <p className="text-ellipsis overflow-hidden">
                                            {links}
                                        </p>
                                    </Link>
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-7">
                                            <div>
                                                <p>account number</p>
                                                <p className="text-[#727EC0] font-bold">
                                                    {bankAccount}
                                                </p>
                                            </div>
                                            <div>
                                                <p>bank</p>
                                                <p className="text-[#727EC0] font-bold">
                                                    {bankName}
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            onClick={copyLink}
                                            className="bg-[#D0D0DF] p-2 rounded-full cursor-pointer"
                                        >
                                            <Image
                                                src={Copy}
                                                alt="CopyIcon"
                                                className="w-3 sm:w-5"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* mobile view */}
                    {Array.from({ length: points }).map((_, index) => (
                        <div
                            {...points}
                            key={index}
                            ref={componentRef}
                            className="max-[550px]:block hidden"
                        >
                            <div className="bg-[#D2DDE2] text-sm capitalize text-[#7F7F7F] p-3 rounded-xl">
                                <div className="flex justify-between">
                                    <p>payment point {index + 1}</p>
                                    <div
                                        onClick={copyLink}
                                        className="bg-[#D0D0DF] p-2 rounded-full cursor-pointer"
                                    >
                                        <Image
                                            src={Copy}
                                            alt="CopyIcon"
                                            className="w-3"
                                        />
                                    </div>
                                </div>
                                <div className="px-3 py-2 gap-y-2 flex flex-col rounded-xl">
                                    <Link
                                        href={links}
                                        className="underline text-[#727EC0] lowercase flex flex-wrap"
                                    >
                                        <p className="text-ellipsis overflow-hidden">
                                            {links}
                                        </p>
                                    </Link>
                                    <div className="flex items-center gap-7">
                                        <div>
                                            <p>account number</p>
                                            <p className="text-[#727EC0] font-bold">
                                                {bankAccount}
                                            </p>
                                        </div>
                                        <div>
                                            <p>bank</p>
                                            <p className="text-[#727EC0] font-bold">
                                                {bankName}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={handlePrint}
                                    className="bg-[#091F8E] text-white gap-2 px-4 py-1 mt-1 ml-auto flex items-center rounded"
                                >
                                    <Image
                                        src={Print}
                                        alt="PrintIcon"
                                        className="w-3"
                                    />
                                    Print
                                </button>
                            </div>
                        </div>
                    ))}
                    {/* end of mobile view */}
                </div>
            </div>
        </>
    );
};

export default PayLink;
