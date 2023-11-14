import Input from "@/components/Input/Input";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";

type Props = {};

const BusinessInfo = (props: Props) => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>();

  return (
    <section>
      <form className="w-[90%] flex flex-col justify-between mx-auto gap-4 ">
        <div className="w-[90%] mx-auto flex items-center gap-8">
          <Image
            src=""
            alt="profile"
            width={96}
            height={96}
            className="h-24 w-24 rounded-full bg-[#D9D9D9]"
          />
          <p className="capitalize bg-[#DDE2FD] rounded-md px-4 py-2 text-[10px] md:text-base ">
            upload logo
          </p>
        </div>
        <Input
          register={register}
          label="Business Name"
          id="business_name"
          placeholder=""
          type="text"
        />
        <Input
          register={register}
          id="email"
          type="email"
          label="Email"
          placeholder=""
        />

        <Input
          register={register}
          label="Phone Number"
          id="phone_number"
          placeholder=""
          type="number"
        />

        <Input
          register={register}
          label="Address"
          id="address1"
          placeholder=" line1"
          type="text"
        />
        <Input
          register={register}
          label=""
          id="address"
          placeholder="line2"
          type="text"
        />
        <Input
          register={register}
          label="No. of employees"
          id="no_employee"
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
