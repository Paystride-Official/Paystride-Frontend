"use client";
import classNames from "classnames";
import React, { useState } from "react";
import ArrowRight from "@/components/Filters/assets/rightArrow.svg";
import Image from "next/image";
import Amount from "./Amount/Amount";
import Method from "./Method/Method";
import DateRangePicker from "../DateRange/DateRangePicker";
import OnDuty from "./OnDuty/OnDuty";
import AccountNumber from "./AccountNumber/AccountNumber";
import PaymentPoint from "./PaymentPoint/PaymentPoint";
import Status from "./Status/Status";
import Department from "./Department/Department";
import Role from "./Role/Role";

type Props = {
  filters: FilterObject | null;
  setFilters: React.Dispatch<React.SetStateAction<FilterObject | null>>;
  defaultFilters?: {
    id: number;
    name: string;
    Img: any;
  }[];
};
interface FilterObject {
  [key: string]: any;
}
const Filters = ({ filters, setFilters, defaultFilters }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [key, setKey] = useState<string | undefined>(
    defaultFilters?.[0].name.toLocaleLowerCase()
  );

  const stepToRender = (key: string | undefined) => {
    switch (key) {
      case "date":
        return <DateRangePicker filters={filters} setFilters={setFilters} />;
      case "amount":
        return <Amount filters={filters} setFilters={setFilters} />;
      case "method":
        return <Method filters={filters} setFilters={setFilters} />;
      case "on-duty":
        return <OnDuty filters={filters} setFilters={setFilters} />;
      case "account number":
        return <AccountNumber filters={filters} setFilters={setFilters} />;
      case "payment point":
        return <PaymentPoint filters={filters} setFilters={setFilters} />;
      case "status":
        return <Status filters={filters} setFilters={setFilters} />;
      case "department":
        return <Department filters={filters} setFilters={setFilters} />;
      case "role":
        return <Role filters={filters} setFilters={setFilters} />;

      default:
        break;
    }
  };

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
          " w-[600px] flex gap-8 px-2 py-8 absolute right-10 rounded-md z-50 bg-[#FAFAFA] shadow-[0px_2.552px_17.016px_0px_rgba(0,0,0,0.25)]":
            true,
        })}
      >
        <div className="flex flex-col flex-[2] gap-3 mb-8">
          {defaultFilters &&
            defaultFilters.map((filter) => {
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
                  <div className="flex gap-2">
                    <Image src={filter.Img} alt={filter.Img} />
                    <button className="text-lg whitespace-nowrap px-2">
                      {filter.name}
                    </button>
                  </div>
                  <div>
                    <Image src={ArrowRight} alt="ArrowRight" className="" />
                  </div>
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
