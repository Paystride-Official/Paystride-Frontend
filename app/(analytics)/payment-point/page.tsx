"use client";
import React, { ReactNode, useEffect, useState } from "react";
import "./paypoint.css";
import Header from "../_components/HeaderStat/Header";
import ModalPopUp from "@/components/Modal/Modal";
import Controllers from "@/components/Controllers/Controllers";
import { FieldValues, useForm } from "react-hook-form";
import { EditPayPoint } from "./_components/EditPayPoint/EditPayPoint";
import { AddPayPoint } from "./_components/AddPayPoint/AddPayPoint";
import { payPointCol, payPointRow } from "@/Utils/constants";
import { TableComponent } from "@/components/Table/Table";
import { FilterObject } from "@/types/types";
import {
  useCreatePaymentPoint,
  useEditPaymentPoint,
  useGetAllPaypoint,
  useGetPaypoint,
} from "./_slice/query";

type Props = {};

const Paymentpoint = (props: Props) => {
  const [singleRow, setSingleRow] = useState<{ [key: string]: any }>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [addNewModal, setAddNewModal] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<FilterObject | null>(null);
  const [content, setContent] = useState<ReactNode>("");

  const { mutateAsync: createPaypoint } = useCreatePaymentPoint();
  const { mutateAsync: editPaypoint } = useEditPaymentPoint();
  const { isLoading, data, isError } = useGetPaypoint();
  const {} = useGetAllPaypoint();

  const merchant_id = "1";
  const addPaypoint = async (data: FieldValues) => {
    const updatedData = { ...data, merchant_id };

    console.log(data);
    const response = await createPaypoint(updatedData);

    console.log(response);
  };

  const handleEditPaypoint = async (data: FieldValues) => {
    const updatedData = { ...data, merchant_id };
    const response = await editPaypoint(updatedData);
    console.log(data);
  };

  const closeModal = () => {
    setAddNewModal(false);
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const openAddNewMOdal = () => {
    setAddNewModal(true);
  };

  useEffect(() => {
    const determineContent = () => {
      if (addNewModal) {
        return <AddPayPoint onSubmit={addPaypoint} closeModal={closeModal} />;
      } else if (isOpen) {
        return (
          <EditPayPoint
            singleRow={singleRow}
            onSubmit={handleEditPaypoint}
            closeModal={closeModal}
          />
        );
      }

      return null;
    };

    setContent(determineContent());
  }, [isOpen, addNewModal]);

  const bankStat = [
    {
      name: "Active Payment Point",
      amount: "3",
    },
  ];

  return (
    <section className="">
      <div className="mt-8">
        <h1 className="text-[#333] text-xl font-bold pb-4">Payment Point</h1>
        {/* <div className="flex"> */}
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
            addNewModal={addNewModal}
            setAddNewModal={setAddNewModal}
          />
          <TableComponent
            rows={payPointRow}
            columns={payPointCol}
            openModal={openModal}
            setSingleRow={setSingleRow}
          />
        </div>

        <div>
          <ModalPopUp
            isOpen={isOpen || addNewModal}
            closeModal={closeModal}
            body={content}
          />
        </div>
      </div>
    </section>
  );
};

export default Paymentpoint;
