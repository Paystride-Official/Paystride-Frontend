"use client";
import { FilterObject } from "@/types/types";
import React, { useEffect, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

type Props = {
    filters: FilterObject | null;
    setFilters: React.Dispatch<React.SetStateAction<FilterObject | null>>;
};

const OnDuty = ({ filters, setFilters }: Props) => {
    const [selectedOption, setSelectedOption] = useState("");

    const { handleSubmit, register, resetField, getValues } = useForm();

    const handleOnSubmit = (data: FieldValues) => {
        console.log(getValues());
    };

    //console.log("filters", filters);

    useEffect(() => {
        const updatedFilters = { ...filters, onDuty: selectedOption };
        setFilters(updatedFilters); // Update parent filter object
    }, [selectedOption]);

    const options = [
        { value: "Jumat", option: "Jumat Adeogun" },
        { value: "Chima", option: "Emmanuel Chima" },
    ];

    return (
        <div>
            <div className="capitalize">
                <p className="mb-4">filter by</p>
                <p className="text-[#333333B2] mb-1">member on-duty</p>
            </div>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <select
                    className="bg-[#ECECEC] block border-[0.889px] border-solid border-[#D9D9D9] px-2 py-2 outline-none min-w-[12rem] rounded-md"
                    {...register("onDuty")}
                >
                    {options.map((opt, index) => (
                        <option key={index} value={opt.value}>
                            {opt.option}
                        </option>
                    ))}
                </select>

                <div className="flex gap-4 justify-end w-full mb-2 mt-32 pr-3">
                    <button
                        type="button"
                        onClick={() => resetField("onDuty")}
                        className=" border-[0.615px] border-solid border-[#DDE2FD] px-5 py-1 rounded"
                    >
                        Clear
                    </button>
                    <button
                        type="submit"
                        className="text-white bg-[#091F8E] px-5 py-1 capitalize rounded"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default OnDuty;
