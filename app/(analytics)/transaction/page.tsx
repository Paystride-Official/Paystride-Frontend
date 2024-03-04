"use client";
import { useState } from "react";
import { transactionCol, transactionRow } from "@/Utils/constants";
import Controllers from "@/components/Controllers/Controllers";
import { TableComponent } from "@/components/Table/Table";
import { FilterObject } from "@/types/types";
import Transfer from "@/components/Filters/assets/transfer.svg";

import DateRange from "@/components/Filters/assets/date.svg";
import GreaterEqual from "@/components/Filters/assets/greatequals.svg";

type Props = {};

const Transaction = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<FilterObject | null>(null);
  const transactionFilters = [
    { id: 1, name: "Date", Img: DateRange },
    { id: 2, name: "Amount", Img: GreaterEqual },
    { id: 3, name: "Method", Img: Transfer },
  ];

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
        <p>Transactions</p>
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
          defaultFilters={transactionFilters}
        />

        <TableComponent rows={transactionRow} columns={transactionCol} />
      </div>
    </div>
  );
};

export default Transaction;
