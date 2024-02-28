"use client";
import { FilterObject } from "@/types/types";
import React, { useEffect, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

type Props = {
    filters: FilterObject | null;
    setFilters: React.Dispatch<React.SetStateAction<FilterObject | null>>;
};

const AccountNumber = ({ filters, setFilters }: Props) => {
    const [selectedOption, setSelectedOption] = useState("");

    const { handleSubmit, register, reset, resetField, getValues } = useForm();

    const handleOnSubmit = (data: FieldValues) => {
        console.log(getValues());
    };

    //console.log("filters", filters);

    useEffect(() => {
        const updatedFilters = { ...filters, accountNumber: selectedOption };
        setFilters(updatedFilters); // Update parent filter object
    }, [selectedOption]);

    return (
        <div>
            <div className="capitalize">
                <p className="mb-4">filter by</p>
                <p className="text-[#333333B2] mb-1">account number</p>
            </div>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <input
                    type="tel"
                    {...register("accountNumber")}
                    className=" outline-none px-4 py-2 rounded-lg bg-[#ECECEC]"
                />

                <div className="flex gap-4 justify-end w-full mb-2 mt-32 pr-3">
                    <button
                        type="button"
                        onClick={() => reset()}
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

export default AccountNumber;
