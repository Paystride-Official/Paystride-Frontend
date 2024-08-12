"use client";
import React, { useRef } from "react";
import { Tooltip } from "@nextui-org/react";
import ReactToPrint from "react-to-print";
import Image from "next/image";
import Logo from "@/app/(preload)/assets/Group 10.svg";
import Paystride from "@/app/(preload)/assets/Paystride.svg";
import Print from "@/app/(preload)/assets/PrintIcon.svg";
import Copy from "@/app/(preload)/assets/copyIcon.svg";
import Link from "next/link";
import { generateLink } from "@/Utils/constants";
import PrintCard from "./PrintCard/PrintCard";
import Sidebar from "./Sidebar/Sidebar";

export type PaymentLinkProps = {
  generatedLinks:
    | {
        token: string;
        virtual_account: {
          id: string;
          payment_point_id: string;
          merchant_id: string;
          status: boolean;
          name: string;
          account_number: string;
          business_name: string;
          bank_name: string;
          paymentLink: string;
        };
      }[]
    | null;
};

const PaymentLink = ({ generatedLinks }: PaymentLinkProps) => {
  const handleCopy = (key: string) => {
    const copiedLink = generateLink.find((link) => link.id === key);
    if (copiedLink) {
      navigator.clipboard.writeText(copiedLink.paymentLink);
    }
  };

  const componentRef = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className="   mt-8">
      <div className="flex flex-row md:flex-col items-center justify-center gap-x-2 sm:gap-x-4 pb-6 sm:pb-8 md:pb-10">
        <Image src={Logo} alt="Logo" className="w-4 sm:w-5 md:w-7 md:pb-2" />
        <Image
          src={Paystride}
          alt="LogoName"
          className="w-20 sm:w-24 md:w-32"
        />
      </div>
      <div className="gap-y-7 flex flex-col w-full justify-center items-center  mx-auto">
        {generatedLinks?.map((details, index: number) => {
          const { virtual_account, token } = details;
          return (
            <div key={virtual_account.id}>
              <div className="w-full h-full relative capitalize flex justify-between text-xs min-[550px]:text-sm lg:text-base text-[#7F7F7F]">
                <div className="sm:block hidden px-4">
                  <div className="flex flex-col justify-between py-3 h-full">
                    <p>{virtual_account.business_name}</p>
                    <ReactToPrint
                      key={index}
                      trigger={() => (
                        <button
                          type="button"
                          className="bg-[#091F8E] text-white gap-2 px-4 sm:px-6 py-2 flex items-center rounded"
                        >
                          <Image
                            src={Print}
                            alt="PrintIcon"
                            className="w-3 sm:w-5 md:w-6"
                          />
                          Print
                        </button>
                      )}
                      content={() => componentRef.current[index]}
                    />
                  </div>
                </div>

                <div className="bg-[#D2DDE2] full  p-5 gap-y-2 flex flex-col rounded-xl mx-auto sm:mx-0">
                  <div className="block sm:hidden">
                    <div className="flex justify-between">
                      <p>{virtual_account.business_name}</p>
                      <Tooltip content="Copy link" placement="top-start">
                        <div
                          onClick={() => handleCopy(virtual_account.id)}
                          className="bg-[#D0D0DF] p-2 rounded-full cursor-pointer"
                        >
                          <Image src={Copy} alt="CopyIcon" className="w-3" />
                        </div>
                      </Tooltip>
                    </div>
                  </div>

                  <Link
                    href={{
                      pathname: `paystride-lite/${token}`,
                      query: { name: virtual_account.bank_name },
                    }}
                    target="_blank"
                    className="underline text-[#727EC0] lowercase flex flex-wrap"
                  >
                    <p className="text-ellipsis overflow-hidden">
                      {virtual_account.id}
                    </p>
                  </Link>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-7">
                      <div>
                        <p>account number</p>
                        <p className="text-[#727EC0] font-bold">
                          {virtual_account.account_number}
                        </p>
                      </div>
                      <div>
                        <p>bank</p>
                        <p className="text-[#727EC0] font-bold">
                          {virtual_account.bank_name}
                        </p>
                      </div>
                    </div>
                    <Tooltip content="Copy link" placement="top-start">
                      <div
                        onClick={() => handleCopy(virtual_account.id)}
                        className="sm:block hidden bg-[#D0D0DF] p-2 rounded-full cursor-pointer"
                      >
                        <Image
                          src={Copy}
                          alt="CopyIcon"
                          className="w-3 sm:w-5"
                        />
                      </div>
                    </Tooltip>
                  </div>

                  <div className="block sm:hidden">
                    <ReactToPrint
                      key={index}
                      trigger={() => (
                        <button
                          type="button"
                          className="bg-[#091F8E] text-white gap-2 px-4 py-1 mt-1 ml-auto flex items-center rounded"
                        >
                          <Image src={Print} alt="PrintIcon" className="w-3" />
                          Print
                        </button>
                      )}
                      content={() => componentRef.current[index]}
                    />
                  </div>
                </div>
              </div>

              <div className="hidden">
                <div ref={(el) => (componentRef.current[index] = el)}>
                  <PrintCard {...virtual_account} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentLink;
