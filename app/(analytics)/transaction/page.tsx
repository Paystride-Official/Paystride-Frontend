"use client";
import { useState } from "react";
import { transactionCol, transactionRow } from "@/Utils/constants";
import Controllers from "@/components/Controllers/Controllers";
import { TableComponent } from "@/components/Table/Table";

type Props = {};

const Transaction = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<string>("");

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
        />

        <TableComponent rows={transactionRow} columns={transactionCol} />
      </div>
    </div>
  );
};

export default Transaction;
