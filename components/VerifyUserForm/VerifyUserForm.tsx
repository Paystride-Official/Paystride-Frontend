"use client";
import { useState } from "react";
import Button from "@/components/Button/Button";
import OtpInput from "react-otp-input";

import React from "react";

// type Props = {
//   step: number;
// };

const VerifyUserForm = () => {
  const [otp, setOtp] = useState<string>("");

  const handleChange = (data: string) => {
    setOtp(data);
  };
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="py-8 sm:w-[450px] md:w-[600px] lg:w-[620px] flex  flex-col items-center justify-center bg-[#F3F3F3] rounded-[15px]">
        <div className="mb-4 ">
          <h1 className="text-2xl font-bold leading-[normal] px-2 text-center capitalize">
            Verify you email
          </h1>
          <p className="text-center ">Enter the token sent to your emai,</p>
          <p className="text-center text-[#6366F1] ">amotola@gmail.com</p>
        </div>
        {/* <div className="w-[90%] flex flex-col gap-4 mx-auto"> */}
        <div className="flex gap-2 m-2 ">
          <OtpInput
            value={otp}
            onChange={handleChange}
            inputStyle="otp-input"
            numInputs={6}
            renderSeparator={<div className=" md:px-2 mx-1" />}
            renderInput={(props) => <input {...props} />}
          />
        </div>
        <Button
          type="button"
          text="continue"
          overide="w-[65%]"
        />
        <div className="flex gap-2">
          <span>Didn&apos;t get the code?</span>
          <span className="text-[#6366F1] capitalize">resend code</span>
        </div>
      </div>
    </section>
  );
};

export default VerifyUserForm;
