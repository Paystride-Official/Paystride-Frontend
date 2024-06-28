"use client";
import { settlementCol, settlementRow } from "@/Utils/constants";
import Controllers from "@/components/Controllers/Controllers";
import React, { ReactNode, useEffect, useState } from "react";
import { TableComponent } from "@/components/Table/Table";
import { FilterObject } from "@/types/types";
// import AuthorizePay from "../_components/AuthorizePay/AuthorizePay";
import AuthorizePay from "../_components/AuthorizePay/AuthorizePay";
import ModalPopUp from "@/components/Modal/Modal";
import DateRange from "@/components/Filters/assets/date.svg";
import Bank from "@/components/Filters/assets/bank.svg";
import GreaterEqual from "@/components/Filters/assets/greatequals.svg";

//import NumberFormat from "@/components/NumberFormat/NumberFormat";

type Props = {};

const SettlementPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<FilterObject | null>(null);
  const [addAuthorizeModal, setAddAuthorizeModal] = useState(false);
  const [content, setContent] = useState<ReactNode>("");

  const settlementFilters = [
    { id: 1, name: "Date", Img: DateRange },
    { id: 5, name: "Account Number", Img: Bank },
    { id: 2, name: "Amount", Img: GreaterEqual },
  ];

  const closeModal = () => {
    setAddAuthorizeModal(false);
  };

  useEffect(() => {
    const determineContent = () => {
      if (addAuthorizeModal) {
        return <AuthorizePay closeModal={closeModal} />;
      }

      return null;
    };

    setContent(determineContent());
  }, [addAuthorizeModal]);

  return (
    <div>
      <div
        className="
          text-gray-600
            font-inter
            text-[27px] sm:text-3xl
            leading-5
            font-bold
            mt-12
            "
      >
        <p>Settlement</p>
      </div>
      <div className="my-4 flex justify-between items-end">
        {/* <NumberFormat number={"12345679876543"} /> */}
        <div className=" bg-white rounded-md py-3 px-4 max-w-[300px] border-[2.066px] border-solid border-[#ECEEF6]">
          <h1 className="text-[#343434] text-base sm:text-lg ">
            Available Balance
          </h1>
          <p className="font-bold text-[#232323] text-[22px] sm:text-3xl">
            ₦12340000
          </p>
        </div>
        <div className="">
          <button
            onClick={() => setAddAuthorizeModal(true)}
            className="px-2 sm:px-4 py-2 rounded-md text-white bg-[#091F8E] text-sm sm:text-base"
          >
            Authorize payout
          </button>
        </div>
      </div>

      <div
        className="    
           bg-white  
            rounded-[6.198px]
            border-[2.066px]
            border-solid
            border-[#eceef6]
            mt-8
            px-4
            "
      >
        <Controllers
          search={search}
          setSearch={setSearch}
          filters={filters}
          setFilters={setFilters}
          defaultFilters={settlementFilters}
        />

        <TableComponent rows={settlementRow} columns={settlementCol} />
      </div>
      <div>
        <ModalPopUp
          isOpen={addAuthorizeModal}
          closeModal={closeModal}
          body={content}
        />
      </div>
    </div>
  );
};

export default SettlementPage;
