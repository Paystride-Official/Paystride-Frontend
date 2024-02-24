import Image from "next/image";
import React from "react";
import Transfer from "@/app/(preload)/assets/Transfer.svg";
import Paystride from "@/app/assets/Paystride.svg";
import { PaymentLinkProps } from "../PaymentLink/PaymentLink";

type PrintCard = {
  //printItems: PaymentLinkProps[];
  accountNumber: string;
  bankName: string;
  businessName: string;
};
//type Props = {};

const PrintCard = ({ accountNumber, bankName, businessName }: PrintCard) => {
  console.log(bankName, accountNumber, businessName);
  return (
    <div className="flex justify-center mt-10">
      <div className="bg-gradient-to-r from-[#051355] to-[#0b2edc] rounded-lg w-[18.5rem]">
        <div className="bg-gradient-to-r from-[#bdc1d3] to-[#a1b1f8] rounded-t-lg flex items-center justify-center gap-5 p-4">
          <h2 className="uppercase font-bold text-blue-600 tracking-wider text-lg">
            pay with transfer
          </h2>
          <Image src={Transfer} alt="Transfer" width={24} />
        </div>
        <div className="flex flex-col gap-5 p-5">
          <div>
            <p className="text-xs text-[#dedcdc] font-semibold capitalize">
              account number
            </p>
            <p className="text-3xl text-white font-bold">{accountNumber}</p>
          </div>
          <div>
            <p className="text-xs text-[#dedcdc] font-semibold capitalize">
              account name
            </p>
            <p className="text-lg text-white font-bold">{businessName}</p>
          </div>
          <div>
            <p className="text-xs text-[#dedcdc] capitalize font-semibold">
              bank name
            </p>
            <p className="text-lg text-white font-bold">{bankName}</p>
          </div>
        </div>
        <hr className="bg-white h-[1px] w-[90%] mx-auto" />
        <div className="flex px-5 py-4">
          <div className="flex-[2] flex justify-center">
            <Image src={Paystride} alt="logo" className="w-6" />
          </div>
          <div className="flex-[5]">
            <div className="text-white text-[10px] flex flex-col gap-2">
              <p className="">
                10X swift transfer payments - 10x swift transfer collection.
              </p>
              <p className="font-bold">Zero waiting. Hassle free.</p>
            </div>
          </div>
        </div>
        <div className="text-center text-white text-xs py-3">
          <p>
            Powered by: <span className="font-bold">Paystride</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrintCard;
