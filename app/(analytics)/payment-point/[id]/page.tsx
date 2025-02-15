"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Header from "../../_components/HeaderStat/Header";
import ModalPopUp from "@/components/Modal/Modal";
import Controllers from "@/components/Controllers/Controllers";
import { FieldValues } from "react-hook-form";
import { EditPayPoint } from "../_components/EditPayPoint/EditPayPoint";
import { AddPayPoint } from "../_components/AddPayPoint/AddPayPoint";
import { payPointCol } from "@/Utils/constants";
import { TableComponent } from "@/components/Table/Table";
import { FilterObject, NewUser } from "@/types/types";
import {
  useCreatePaymentPoint,
  useEditPaymentPoint,
  useGetAllPaypoint,
} from "../_slice/query";
import { getUser } from "@/ProtectedRoute/ProtectedRoute";
import DeletePaypoint from "../_components/DeletePaypoint/DeletePaypoint";
import Duty from "@/components/Filters/assets/onDuty.svg";
import Bank from "@/components/Filters/assets/bank.svg";
import Card from "@/components/Filters/assets/card.svg";
import Toogle from "@/components/Filters/assets/toggle.svg";

type Props = {};

const Paymentpoint = (props: Props) => {
  const paypointFilters = [
    { id: 4, name: "On-duty", Img: Duty },
    { id: 5, name: "Account Number", Img: Bank },
    { id: 6, name: "Payment Point", Img: Card },
    { id: 7, name: "Status", Img: Toogle },
  ];

  const [singleRow, setSingleRow] = useState<{ [key: string]: any }>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [addNewModal, setAddNewModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<FilterObject | null>(null);
  const [content, setContent] = useState<ReactNode>("");

  const { mutateAsync: createPaypoint } = useCreatePaymentPoint();
  const { mutateAsync: editPaypoint } = useEditPaymentPoint();

  // const { isLoading, data, isError } = useGetPaypoint();

  const { isLoading, data, isError } = useGetAllPaypoint();
  let payment_points: NewUser[] | [] = data?.success?.payment_points ?? [];

  console.log(data);

  // data?.success? toast.success("payment point create successfully"):toast.error("hey")

  const user = getUser();
  const addPaypoint = async (data: FieldValues) => {
    const { amount } = data;
    const amountInt = Number(amount);

    const updatedData = { ...data, amount: amountInt };

    const response = await createPaypoint(updatedData);
  };

  const handleEditPaypoint = async (data: FieldValues) => {
    const updatedData = { ...data, merchant_id: user.id };
    const response = await editPaypoint(updatedData);
    console.log(data);
  };

  const handleDeltePaypoint = async () => {};

  const closeModal = () => {
    setDeleteModal(false);
    setAddNewModal(false);
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
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
      } else if (deleteModal) {
        return <DeletePaypoint singleRow={singleRow} closeModal={closeModal} />;
      }

      return null;
    };

    setContent(determineContent());
  }, [isOpen, addNewModal, deleteModal]);

  const bankStat = [
    {
      name: "Active Payment Point",
      amount: String(payment_points.length) || "3",
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
            defaultFilters={paypointFilters}
          />
          <TableComponent
            rows={payment_points}
            columns={payPointCol}
            openModal={openModal}
            setSingleRow={setSingleRow}
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
          />
        </div>

        <div>
          <ModalPopUp
            isOpen={isOpen || addNewModal || deleteModal}
            closeModal={closeModal}
            body={content}
          />
        </div>
      </div>
    </section>
  );
};

export default Paymentpoint;
