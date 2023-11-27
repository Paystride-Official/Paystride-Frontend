"use client";
import React, { ReactNode, useState } from "react";
import "./paypoint.css";
import Header from "../_components/HeaderStat/Header";
import { DashboardTable } from "@/components/DashboardTable/DashboardTable";
import { payPointCol, payPointRow } from "@/Utils/constants";
import ModalPopUp from "@/components/Modal/Modal";
import Controllers from "@/components/Controllers/Controllers";
import { FieldValues, useForm } from "react-hook-form";

type Props = {};

const Paymentpoint = (props: Props) => {
  const { handleSubmit, register } = useForm();
  const [singleRow, setSingleRow] = useState<{ [key: string]: any }>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<string>("");
  const onSubmit = (data: FieldValues) => console.log(data);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const title = <h1> {singleRow?.payPoint}</h1>;

  const ModalBody: ReactNode = (
    <div>
      <p>staff</p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <select
          className=" block border-[0.889px] border-solid
        border-[#D9D9D9] px-2 py-2 outline-none max-w-[10rem] rounded-sm"
          {...register("example")}
        >
          <option value="option1">{singleRow?.onDuty}</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        <select
          className=" block border-[0.889px] border-solid border-[#D9D9D9] px-2 py-2 outline-none w-fit rounded-sm"
          {...register("example2")}
        >
          <option value={singleRow?.status}>{singleRow?.status}</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <div className="flex gap-4 justify-center w-full mb-2">
          <button
            type="submit"
            className="text-white bg-[#091F8E] px-4 py-1 capitalize rounded"
          >
            update
          </button>
          <button className=" border-[0.615px] border-solid border-[#DDE2FD] px-4 py-1 rounded">
            cancel
          </button>
        </div>
      </form>
    </div>
    // <div>
    //   <p>staff</p>
    //   <div>
    //     <form className="flex flex-col gap-4">
    //       <select
    //         name=""
    //         id=""
    //         className=" block border-[0.889px] border-solid border-[#D9D9D9] px-2 py-2 outline-none max-w-[10rem] rounded-sm"
    //       >
    //         <option value="">{singleRow?.onDuty}</option>
    //       </select>
    //       <select
    //         name=""
    //         id=""
    //         className=" block border-[0.889px] border-solid border-[#D9D9D9] px-2 py-2 outline-none w-fit rounded-sm"
    //       >
    //         <option value="">Active</option>
    //         <option value="">Inactive</option>
    //       </select>
    //     </form>
    //   </div>
    // </div>
  );

  const footer: ReactNode = (
    <h1>.</h1>
    // <div className="flex gap-4 justify-center w-full mb-4">
    //   <button className="text-white bg-[#091F8E] px-4 py-1 capitalize rounded">
    //     update
    //   </button>
    //   <button className=" border-[0.615px] border-solid border-[#DDE2FD] px-4 py-1 rounded">
    //     cancel
    //   </button>
    // </div>
  );

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
          />
          <DashboardTable
            rows={payPointRow}
            columns={payPointCol}
            openModal={openModal}
            setSingleRow={setSingleRow}
          />
        </div>

        <div>
          <ModalPopUp
            isOpen={isOpen}
            closeModal={closeModal}
            body={ModalBody}
            title={title}
            footer={footer}
          />
        </div>
      </div>
    </section>
  );
};

export default Paymentpoint;
