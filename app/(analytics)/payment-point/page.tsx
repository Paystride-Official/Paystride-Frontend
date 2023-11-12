"use client";
import React from "react";
import Header from "../_components/HeaderStat/Header";
import { DashboardTable } from "@/components/DashboardTable/DashboardTable";
import { payPointCol, payPointRow } from "@/Utils/constants";

type Props = {};

const Paymentpoint = (props: Props) => {
  const bankStat = [
    {
      name: "Active Payment Point",
      amount: "3",
    },
  ];
  return (
    <section>
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
          <DashboardTable rows={payPointRow} columns={payPointCol} />
        </div>
      </div>
    </section>
  );
};

export default Paymentpoint;
