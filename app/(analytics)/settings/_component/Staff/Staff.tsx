"use client";
import React, { ReactNode, useState } from "react";
import Header from "@/app/(analytics)/_components/HeaderStat/Header";
import Controllers from "@/components/Controllers/Controllers";
import { FilterObject } from "@/types/types";
import { staffCol, staffRow } from "@/Utils/constants";
import { TableComponent } from "@/components/Table/Table";
import { FieldValues } from "react-hook-form";

type Props = {
  setAddNewModal: React.Dispatch<React.SetStateAction<boolean>>;
  addNewModal: boolean | undefined;
  openModal: () => void;
};

const Staff = ({ setAddNewModal, addNewModal }: Props) => {
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<FilterObject | null>(null);
  const [content, setContent] = useState<ReactNode>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setAddNewModal(true);
  };

  const staffStat = [
    {
      name: "Employee",
      amount: "9",
    },
    {
      name: "Department",
      amount: "3",
    },
  ];
  return (
    <section>
      <Header headerStat={staffStat} />
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
          addNewModal={addNewModal}
          setAddNewModal={setAddNewModal}
        />
        <TableComponent rows={staffRow} columns={staffCol} />
      </div>
    </section>
  );
};

export default Staff;
