import Image from "next/image";
import React from "react";
import Transfer from "@/app/(preload)/assets/Transfer.svg";
import Paystride from "@/app/assets/Paystride.svg";
import { PaymentLinkProps } from "../../payment-link/page";

type PrintCard = {
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

const PrintCard = ({ account_number, bank_name, business_name }: PrintCard) => {
  return (
    <div className="flex justify-center mt-16">
      <div className="bg-gradient-to-r from-[#051355] to-[#0b2edc] rounded-lg w-[30rem]">
        <div className="bg-gradient-to-r from-[#bdc1d3] to-[#a1b1f8] rounded-t-lg flex items-center justify-center gap-7 p-4">
          <h2 className="uppercase font-bold text-blue-600 tracking-wider text-[27px]">
            pay with transfer
          </h2>
          <Image src={Transfer} alt="Transfer" width={30} />
        </div>
        <div className="flex flex-col gap-8 py-8 px-10">
          <div>
            <p className="text-sm text-[#dedcdc] font-semibold capitalize">
              account number
            </p>
            <p className="text-4xl text-white font-bold">{account_number}</p>
          </div>
          <div>
            <p className="text-sm text-[#dedcdc] font-semibold capitalize">
              account name
            </p>
            <p className="text-2xl text-white font-bold">{business_name}</p>
          </div>
          <div>
            <p className="text-sm text-[#dedcdc] capitalize font-semibold">
              bank name
            </p>
            <p className="text-2xl text-white font-bold">{bank_name}</p>
          </div>
        </div>
        <hr className="bg-white h-[1px] w-[90%] mx-auto" />
        <div className="flex justify-center items-center px-5 py-7">
          <div className="flex-[2] flex justify-center">
            <Image src={Paystride} alt="logo" className="w-8" />
          </div>
          <div className="flex-[5]">
            <div className="text-white text-xs flex flex-col gap-2">
              <p className="">
                10X swift transfer payments - 10x swift transfer collection.
              </p>
              <p className="font-bold">Zero waiting. Hassle free.</p>
            </div>
          </div>
        </div>
        <div className="text-center text-white text-sm py-4 mb-3">
          <p>
            Powered by: <span className="font-bold">Paystride</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrintCard;
