"use client";
import React, { useEffect, useState } from "react";

type Props = {
  filters: FilterObject | null;
  setFilters: React.Dispatch<React.SetStateAction<FilterObject | null>>;
};
interface FilterObject {
  [key: string]: any;
}

const Method = ({ setFilters, filters }: Props) => {
  const [selectedOption, setSelectedOption] = useState("bank");
  // filters.paymentOption || "bank";

  useEffect(() => {
    const updatedFilters = { ...filters, paymentOption: selectedOption };
    setFilters(updatedFilters); // Update parent filter object
  }, [selectedOption]);
  console.log(selectedOption);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <input
          type="radio"
          id="bank"
          name="paymentOption"
          value="bank"
          checked={selectedOption === "bank"}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
        <p>Bank Transfer</p>
      </div>
      <div className="flex gap-2">
        <input
          type="radio"
          id="pos"
          name="paymentOption"
          value="pos"
          checked={selectedOption === "pos"}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
        <span>POS</span>
      </div>
    </div>
  );
};

export default Method;
