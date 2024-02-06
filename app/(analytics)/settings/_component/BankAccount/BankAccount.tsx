"use client";
import Header from "@/app/(analytics)/_components/HeaderStat/Header";
import Controllers from "@/components/Controllers/Controllers";
import { TableComponent } from "@/components/Table/Table";
import React, { useState } from "react";
import Staff from "../Staff/Staff";
import { FilterObject } from "@/types/types";
import { staffCol, staffRow } from "@/Utils/constants";

type Props = {};

const BankAccount = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<FilterObject | null>(null);
  const [singleRow, setSingleRow] = useState<{ [key: string]: any }>([]);
  const bankStat = [
    {
      name: "Active count",
      amount: "3",
    },
  ];
  function openModal(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <section>
      <Header headerStat={bankStat} />

      <div
        className="    
           bg-white  
            rounded-[6.198px]
            border-[2.066px]
            border-solid
            border-[#eceef6]
            mt-4
            "
      >
        <Controllers
          search={search}
          setSearch={setSearch}
          filters={filters}
          setFilters={setFilters}
          addNew
          // addNewModal={addNewModal}
          // setAddNewModal={setAddNewModal}
        />
        <TableComponent
          // rows={staffRow}
          rows={staffRow}
          columns={staffCol}
          // openModal={openModal}
          // deleteModal={deleteModal}
          // setDeleteModal={setDeleteModal}
          // setSingleRow={setSingleRow}
        />
      </div>
    </section>
  );
};

export default BankAccount;
