"use client";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Image from "next/image";

import Input from "@/components/Input/Input";
import { useGetBusinessInfo, useUpdataBusinessInfo } from "../../_slice/qurey";
import FileInput from "@/components/FileInput/FilleInput";

type Props = {};
let businessInfo: any;
const BusinessInfo = (props: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const { data, isLoading, isError } = useGetBusinessInfo();
  const { mutateAsync: updateBusinessInfo } = useUpdataBusinessInfo();

  if (data?.success) {
    const { businessInformation } = data?.success;
    businessInfo = businessInformation;
    console.log(businessInfo);
  }

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>({
    defaultValues: {
      business_name: data?.success ? businessInfo.business_name : "",
      email: data?.success ? businessInfo.email : "",
      phone_number: data?.success ? businessInfo.phone_number : "",
      bvn: data?.success ? businessInfo.bvn : "",
      address1: data?.success ? businessInfo.address1 : "",
      address2: data?.success ? businessInfo.address1 : "",
      no_of_employee: data?.success ? businessInfo.no_of_employee : "",
    },
  });
  // const { mutateAsync: getBusinessInfo} = useGetBusinessInfo()

  const handleOnSubmit = async (data: FieldValues) => {
    const response = await updateBusinessInfo(data);
    // console.log(response);
  };

  return (
    <section>
      <form
        className="w-[90%] flex flex-col justify-between mx-auto gap-4  "
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <div className="w-[90%] mx-auto flex items-center gap-8">
          <Image
            src=""
            alt="profile"
            width={96}
            height={96}
            className="h-24 w-24 rounded-full bg-[#D9D9D9]"
          />
          <div className="relative cursor-pointer">
            <p className=" cursor-pointer capitalize bg-[#DDE2FD] rounded-md px-4 py-2 text-[10px] w-fit md:text-base ">
              upload logo
            </p>
            <FileInput file={file} setFile={setFile} />
          </div>
        </div>
        <Input
          register={register}
          label="Business Name"
          id="business_name"
          placeholder=""
          type="text"
          required
        />
        <Input
          register={register}
          id="email"
          type="email"
          label="Email"
          placeholder=""
          required
        />

        <Input
          register={register}
          label="Phone Number"
          id="phone_number"
          placeholder=""
          type="number"
          required
        />
        <Input
          register={register}
          label="Bvn"
          id="bvn"
          placeholder=""
          type="number"
          required
        />

        <Input
          register={register}
          label="Address"
          id="address1"
          placeholder=" line1"
          type="text"
          required
        />
        <Input
          register={register}
          label=""
          id="address2"
          placeholder="line2"
          type="text"
        />
        <Input
          register={register}
          label="No. of employees"
          id="no_of_employee"
          placeholder=""
          type="number"
        />

        <div className="w-[90%] mx-auto mt-4 text-[14px] sm:text-base">
          <p>How would you like to receive you notification</p>
          <p className="flex items-center gap-2">
            <input type="checkbox" />
            <span>SMS</span>
          </p>
          <p className="flex items-center gap-2">
            <input type="checkbox" />
            <span> WhatsApp</span>
          </p>
        </div>
        <div className=" w-[90%] mx-auto mt-4">
          <button className="bg-[#091F8E] rounded-md text-white py-2 px-4">
            update User
          </button>
        </div>
      </form>
    </section>
  );
};

export default BusinessInfo;
