"use client";
import { useEffect, useState } from "react";
import Button from "@/components/Button/Button";
import OtpInput from "react-otp-input";

import React from "react";
import { useVerifyOtp } from "../../(auth)/register/_slice/query";
import { FieldValues } from "react-hook-form";

type Props = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  onSubmit: () => void;
  userData: FieldValues | undefined;
};

const VerifyUserForm = ({ setStep, step, userData }: Props) => {
  const [otp, setOtp] = useState<string>("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onBack = () => {
    setStep(step - 1);
  };

  const handleChange = (data: string) => {
    setOtp(data);
  };
  const { mutateAsync: verifyOtp } = useVerifyOtp();

  const handleSubmit = () => {
    if (!otp) {
      console.log("Please input your OTP");
      return;
    }

    const data = {
      otp,
      email: userData?.email,
    };
    verifyOtp(data);
  };

  return (
    <section className="flex flex-col items-center justify-center mx-2">
      <div className="py-8 min-w-[330px] sm:w-[500px]   flex  flex-col items-center justify-center bg-[#F3F3F3] rounded-[15px]">
        <div className="mb-4 ">
          <h1 className="text-2xl font-bold leading-[normal] px-2 text-center capitalize">
            Verify you email
          </h1>
          <p className="text-center ">Enter the token sent to your email,</p>
          <p className="text-center text-[#6366F1] ">{userData?.email}</p>
        </div>
        {/* <div className="w-[90%] flex flex-col gap-4 mx-auto"> */}
        <div className="flex gap-2 m-2 h-[4rem]">
          {isMounted && (
            <OtpInput
              value={otp}
              inputType="text"
              onChange={handleChange}
              inputStyle="otp-input"
              numInputs={6}
              renderSeparator={<div className=" md:px-2 mx-1 " />}
              renderInput={(props) => <input {...props} />}
            />
          )}
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="text-center bg-[#091f8e] text-[white] mx-auto my-4 w-[65%]  px-0 rounded-[37px] capitalize h-full pt-[15px] pb-4 outline-none"
        >
          continue
        </button>
        <div className="flex gap-2 text-sm">
          <span>Didn&apos;t get the code?</span>
          <span className="text-[#6366F1] capitalize cursor-pointer">
            resend code
          </span>
        </div>
      </div>
    </section>
  );
};

export default VerifyUserForm;
