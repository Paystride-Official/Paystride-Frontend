"use client";
import React from "react";
import { useForm, FieldValues } from "react-hook-form";

import SupportLog from "../_components/SupportLog/SupportLog";
import { useGetAllPastIssues, useSubmitRequest } from "../_slice/query";

type Props = {};

const SupportPage = (props: Props) => {
  const { mutateAsync: submitRequest } = useSubmitRequest();
  const { handleSubmit, register, getValues, reset } = useForm();

  const { isLoading, data, isError } = useGetAllPastIssues();

  const handleOnSubmit = async (data: FieldValues) => {
    const formData = getValues();
    const response = await submitRequest(formData);
  };

  const TopicOption = [
    { value: "dashboard", topic: "Dashboard" },
    { value: "transactions", topic: "Transactions" },
    { value: "payment point", topic: "Payment Point" },
    { value: "settlements", topic: "Settlements" },
    { value: "staff", topic: "Staff" },
    { value: "settings", topic: "Settings" },
  ];

  return (
    <div className="mx-3">
      <div>
        <p className="text-black text-xl sm:text-[24px] font-semibold leading-9">
          Need Help?
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-4">
        <div className="flex-[1]">
          <div>
            <p className="text-black text-base sm:text-[18.856px] font-semibold leading-9">
              Please fill out the form below.
            </p>
          </div>
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <div className="min-[500px]:flex gap-7 text-black text-sm sm:text-[16px]">
              <div className="mt-2">
                <p className="font-semibold leading-9">
                  First Name <span className="text-red-700">*</span>
                </p>
                <input
                  className="text-gray-700 font-medium leading-tight py-[4px] px-[16px] h-[35px] sm:h-[43px] outline-none"
                  type="text"
                  {...register("first_name")}
                />
              </div>

              <div className="mt-2">
                <p className="font-semibold leading-9">
                  Last Name <span className="text-red-700">*</span>
                </p>
                <input
                  className="text-gray-700 font-medium leading-tight py-[4px] px-[16px] h-[35px] sm:h-[43px] outline-none"
                  type="text"
                  {...register("last_name")}
                />
              </div>
            </div>

            <div className="text-black text-sm sm:text-[16px] mt-2">
              <p className="font-semibold leading-9 ">
                Email <span className="text-red-700">*</span>
              </p>
              <input
                className="text-gray-700 font-medium leading-tight py-[4px] px-[16px] h-[35px] sm:h-[43px] w-full min-[500px]:w-[418px] outline-none"
                type="text"
                {...register("email")}
              />
            </div>

            <div className="text-black text-sm sm:text-[16px] mt-2">
              <p className="font-semibold leading-9">
                Topic <span className="text-red-700">*</span>
              </p>
              <select
                className="text-gray-700 font-medium leading-tight py-[5px] px-[15px] h-[35px] sm:h-[43px] w-[210px] sm:w-[230px] outline-none"
                {...register("topic")}
              >
                {TopicOption.map((opt, index) => (
                  <option key={index} value={opt.value} className="capitalize">
                    {opt.topic}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-black text-sm sm:text-[16px] mt-2">
              <p className="font-semibold leading-9">
                Message <span className="text-red-700">*</span>
              </p>
              <textarea
                {...register("message")}
                className="rounded-sm border-1 border-gray-300 dark:border-gray-700 bg-white h-[203px] w-full outline-none"
              />
            </div>

            <div className="mt-7">
              <button
                type="submit"
                className="bg-[#091F8E] py-[6px] sm:py-[10px] px-[10px] sm:px-[15px] text-white rounded-b text-sm sm:text-[16px]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="flex-[1] mt-5 lg:mt-0">
          <SupportLog />
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
