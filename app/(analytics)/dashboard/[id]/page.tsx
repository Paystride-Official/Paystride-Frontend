"use client";
import { HeaderStatProps, OptionSelectProps, TabProps } from "@/types/types";
import React, { useCallback, useState } from "react";
// import Header from "../_components/HeaderStat/Header";
import PaypointChart from "@/components/Charts/PaypointChart/PaypointChart";
import SalesChart from "@/components/Charts/SalesChart/SalesChart";
import DonoughtChart from "@/components/Charts/DonoughtChart/DonoughtChart";
import Arrow from "@/app/assets/arrowup.svg";
import { dashboardCol, dashboardRow } from "@/Utils/constants";
import { TableComponent } from "@/components/Table/Table";
import Header from "../../_components/HeaderStat/Header";
import NewAccount from "../../settings/_component/NewAccount/NewAccount";

type DashboardProps = {};

const Dashboard = (props: DashboardProps) => {
  const headerStat: HeaderStatProps[] = [
    {
      name: "Sales",
      amount: ` ₦123456`,
      description: "/yesterday",
      count: 100,
      img: Arrow,
    },
    {
      name: "Settlement",
      amount: " ₦123456",
      description: "No. of settlement",
      count: 10,
    },
    {
      name: "Payment point",
      amount: " 6",
    },
  ];
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

  const chartToRender = useCallback(
    (key: string): React.JSX.Element | null => {
      switch (key) {
        case "sales":
          return <SalesChart />;

        case "paypoint":
          return <PaypointChart />;
        default:
          return null;
      }
    },
    [selectedOption]
  );

  return (
    <section className=" ">
      <Header headerStat={headerStat} />
      <div
        className="w-full
         bg-white
          mt-4 px-2 
          rounded-md 
          border-[2px]
          border-solid 
        border-[#eceef6]
"
      >
        <div className=" flex justify-between mt-4">
          <select
            className="border-[none] outline-none rounded text-[17px] sm:text-[21px] lg:text-[23.14px] font-bold w-[5.75rem] sm:w-28 lg:w-auto mb-1"
            onChange={handleSelectChange}
          >
            {optionSelectOption.map((option) => (
              <option className="" key={option.key}>
                {option.text}
              </option>
            ))}
          </select>
          <div className="flex gap-3 sm:gap-7 lg:gap-12 sm:mr-4">
            <div className="flex sm:gap-4 lg:gap-8 bg-[#F6F6F6] rounded-[12px] sm:px-1 py-1 ">
              {tabs.map((tab) => (
                <button
                  className="hover:bg-[#DDE2FD] text-xs sm:text-sm lg:text-base rounded-[10px] px-2 lg:px-4"
                  disabled={currentTab == tab.title}
                  key={tab.id}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="bg-[#F6F6F6] rounded-[10px] lg:rounded-[12px] sm:px-2 lg:px-4 sm:py-1 lg:py-2">
              <select className="bg-[#F6F6F6] border-none outline-none text-xs sm:text-sm lg:text-base w-[4.2rem] sm:w-[4.6rem] lg:w-auto">
                {optionSelectOption.map((option) => (
                  <option className="" key={option.key}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="">{chartToRender(selectedOption)}</div>
      </div>
      <div className=" lg:flex gap-4">
        <div
          className="
        w-full
        flex-[3]
       bg-white
        runded-md 
        mt-4 
        px-4 
        pt-4
        rounded-md 
        border-[2.066px]
        border-solid 
        border-[#eceef6]
        "
        >
          <h1 className="font-bold text-xl sm:text-2xl">Recent Transaction</h1>
          <TableComponent rows={dashboardRow} columns={dashboardCol} />
        </div>
        <div
          className="w-full
        flex-[2]
       bg-white
        runded-md 
        mt-4 px-2  
        border-[2.066px]
        border-solid 
        border-[#eceef6]
        "
        >
          <h1 className="px-3 pt-3 p-1 text-xl sm:text-3xl font-bold">
            Paypoint
          </h1>
          <DonoughtChart />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
