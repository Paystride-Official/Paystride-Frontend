"use client";
import classNames from "classnames";
import React, { useState } from "react";
import DateRange from "@/components/Filters/assets/date.svg";
import GreaterEqual from "@/components/Filters/assets/greatequals.svg";
import ArrowRight from "@/components/Filters/assets/rightArrow.svg";
import Transfer from "@/components/Filters/assets/transfer.svg";
import Image from "next/image";
// import DateRangePicker from "../DateRange/DateRangePicker";
import Amount from "./Amount/Amount";
import Method from "./Method/Method";
import DateRangePicker from "../DateRange/DateRangePicker";

type Props = {
  filters: FilterObject | null;
  setFilters: React.Dispatch<React.SetStateAction<FilterObject | null>>;
};
interface FilterObject {
  [key: string]: any;
}
const Filters = ({ filters, setFilters }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [key, setKey] = useState<string>("date");

  const stepToRender = (key: string) => {
    switch (key) {
      case "date":
        return <DateRangePicker filters={filters} setFilters={setFilters} />;
      case "amount":
        return <Amount filters={filters} setFilters={setFilters} />;
      case "method":
        return <Method filters={filters} setFilters={setFilters} />;

      default:
        break;
    }
  };

  const Filters = [
    { id: 1, name: "Date", Img: DateRange },
    { id: 2, name: "Amount", Img: GreaterEqual },
    { id: 3, name: "Method", Img: Transfer },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border border-solid border-[#DDE2FD] px-4 py-1 rounded-md"
      >
        Filters
      </button>

      <div
        className={classNames({
          block: isOpen,
          hidden: !isOpen,
          " w-[600px]  flex gap-8 px-2 py-8 absolute right-10 rounded-md z-50 bg-[#FAFAFA] shadow-[0px_2.552px_17.016px_0px_rgba(0,0,0,0.25)]":
            true,
        })}
      >
        <div className="flex flex-col flex-[2] gap-3 mb-8">
          {Filters.map((filter) => {
            const isActive = filter.name.toLocaleLowerCase() === key;

            return (
              <div
                key={filter.id}
                onClick={() => setKey(filter.name.toLocaleLowerCase())}
                className={classNames(
                  "w-full flex items-center justify-between px-3 py-2 rounded-md cursor-pointer",
                  {
                    "bg-white": !isActive,
                    "bg-[#DDE2FD]": isActive,
                  }
                )}
              >
                <div className="flex gap-4">
                  <Image src={filter.Img} alt={filter.Img} />
                  <button className="text-xl ">{filter.name}</button>
                </div>
                <Image src={ArrowRight} alt="ArrowRight" />
              </div>
            );
          })}
        </div>
        <div className="flex-[3]">{stepToRender(key)}</div>
      </div>
    </div>
  );
};

export default Filters;
