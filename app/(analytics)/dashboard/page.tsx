"use client";
import { OptionSelectProps, TabProps } from "@/types";

import React, { useState } from "react";
import Header from "../_components/HeaderStat/Header";
import Barchart from "@/components/Charts/BarChart/Barchart";
import PaypointChart from "@/components/Charts/PaypointChart/PaypointChart";
import SalesChart from "@/components/Charts/SalesChart/SalesChart";
import { log } from "console";
import DonoughtChart from "@/components/Charts/DonoughtChart/DonoughtChart";

type DashboardProps = {};

const Dashboard = (props: DashboardProps) => {
  const optionSelectOption: OptionSelectProps[] = [
    {
      key: "sales",
      text: "Sales",
    },
    {
      key: "paymentPoint",
      text: "Paypoint",
    },
  ];

  const tabs: TabProps[] = [
    {
      id: "1",
      title: "Today",
    },
    { id: "2", title: "Week" },
    { id: "3", title: "Year" },
  ];

  const [selectedOption, setSelectedOption] = useState<string>("sales");
  const [currentTab, setCurrentTab] = useState<string>("sales");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value.toLowerCase());
  };

  const chartToRender = (key: string) => {
    switch (key) {
      case "sales":
        return <SalesChart />;

      case "paypoint":
        return <PaypointChart />;
    }
  };
  return (
    <section className=" ">
      <Header />

      <div
        className="w-full
         bg-white
         
          runded-md 
          mt-4 px-2 
          rounded-[6.198px] 
          border-[2.066px]
           border-solid 
           border-[#eceef6]
"
      >
        <div className=" flex justify-between mt-4">
          <select
            className="border-[none] outline-none rounded text-[23.14px] font-bold  "
            onChange={handleSelectChange}
          >
            {optionSelectOption.map((option) => (
              <option className="">{option.text}</option>
            ))}
          </select>
          <div className="flex gap-12 mr-4">
            <div className="flex gap-8 bg-[#F6F6F6] rounded-[12px] px-1 py-1 ">
              {tabs.map((tab) => (
                <button
                  className="hover:bg-[#DDE2FD] rounded-[10px] px-4"
                  disabled={currentTab == tab.id}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="bg-[#F6F6F6] rounded-[12px] px-4 py-2">
              <select className="bg-[#F6F6F6] border-none outline-none ">
                {optionSelectOption.map((option) => (
                  <option className="">{option.text}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {chartToRender(selectedOption)}
      </div>
      <div className="flex gap-4">
        <div
          className="w-full
          flex-[3]
        bg-white
        runded-md 
        mt-4 px-2 
        rounded-[6.198px] 
        border-[2.066px]
        border-solid 
        border-[#eceef6]
        "
        >
          hey
        </div>
        <div
          className="w-full
          flex-[2]
        bg-white
        runded-md 
        mt-4 px-2 
        rounded-[6.198px] 
        border-[2.066px]
        border-solid 
        border-[#eceef6]
        "
        >
          <DonoughtChart />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
