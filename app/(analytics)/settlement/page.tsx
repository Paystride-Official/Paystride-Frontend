"use client";
import { transactionCol, transactionRow } from "@/Utils/constants";
import Controllers from "@/components/Controllers/Controllers";
import React, { useState } from "react";
import { TableComponent } from "@/components/Table/Table";
import { FilterObject } from "@/types/types";

type Props = {};

const SettlementPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<FilterObject | null>(null);

  return (
    <div>
      <div
        className="
          text-gray-600
            font-inter
            text-3xl
            leading-5
            font-bold
            mt-12
            "
      >
        <p>Settlement</p>
      </div>
      <div className="my-4 flex gap-6">
        <div className=" bg-white rounded-md py-3 px-4 max-w-[300px] border-[2.066px] border-solid border-[#ECEEF6]">
          <h1 className="text-[#343434] text-lg ">Available Balance</h1>
          <p className="font-bold text-[#232323] text-3xl">₦12340000</p>
        </div>
        <div className="flex items-end">
          <button className="px-4 py-2 rounde-md text-white bg-[#091F8E]">
            Authorize payoute
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
        />

        <TableComponent rows={transactionRow} columns={transactionCol} />
      </div>
    </div>
  );
};

export default SettlementPage;
