"use client";
import React, { useEffect, useState } from "react";

type Props = {
    filters: FilterObject | null;
    setFilters: React.Dispatch<React.SetStateAction<FilterObject | null>>;
};
interface FilterObject {
    [key: string]: any;
}

const Amount = ({ filters, setFilters }: Props) => {
    const [selectedOption, setSelectedOption] = useState("highestToLowest");

    useEffect(() => {
        const updatedFilters = { ...filters, amount: selectedOption };
        setFilters(updatedFilters); // Update parent filter object
    }, [selectedOption]);

    return (
        <div>
            <div className="capitalize">
                <p className="mb-4">filter by</p>
            </div>
            <div className="flex flex-col gap-4 text-[#333333B2]">
                <div className="flex gap-2">
                    <input
                        type="radio"
                        id="bank"
                        name="paymentOption"
                        value="highestToLowest"
                        checked={selectedOption === "highestToLowest"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    <p>Highest To Lowest</p>
                </div>
                <div className="flex gap-2">
                    <input
                        type="radio"
                        id="pos"
                        name="paymentOption"
                        value="lowestToHighest"
                        checked={selectedOption === "lowestToHighest"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    <span>Lowest To Highest</span>
                </div>
            </div>
        </div>
    );
};

export default Amount;
