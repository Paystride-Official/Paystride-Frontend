"use client";
import { useEffect, useState } from "react";

type Props = {
  filters: FilterObject | null;
  setFilters: React.Dispatch<React.SetStateAction<FilterObject | null>>;
};
interface FilterObject {
  [key: string]: any;
}

const DateRangePicker = ({ filters, setFilters }: Props) => {
  const getDefaultDate = (id: string) => {
    if (filters?.dateRange) {
      return id === "starDate"
        ? filters?.dateRange[0] || ""
        : filters?.dateRange[1] || "";
    }
  };

  const [startDate, setStartDate] = useState(getDefaultDate("startDate"));
  const [endDate, setEndDate] = useState(getDefaultDate("endDate"));

  useEffect(() => {
    if (startDate && endDate) {
      const updatedFilters = { ...filters, dateRange: [startDate, endDate] };
      setFilters(updatedFilters); //
    }
  }, [startDate, endDate]);

  return (
    <section>
      <p className="mb-4">Show transaction for</p>
      <div className="w-[70%] flex justify-between capitalize text-[#333333B2]">
        <p>from</p>
        <p>to</p>
      </div>

      <div className="flex gap-6">
        <div>
          <input
            type="date"
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
            value={startDate}
            className=" outline-none px-4 py-2 rounded-lg bg-[#D4CECE]"
          />
        </div>
        <div>
          <input
            type="date"
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
            value={endDate}
            className=" outline-none px-4 py-2 rounded-lg bg-[#D4CECE]"
          />
        </div>
      </div>
    </section>
  );
};

export default DateRangePicker;
