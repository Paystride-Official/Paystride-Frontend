"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useForm } from "react-hook-form";

type Props = {};

const ForgotPassword = (props: Props) => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({});
  const router = useRouter();

  const handleClick = () => {
    router.push("/reset-password");
  };

  return (
    <section className="h-fit mt-12 flex flex-col items-center justify-center">
      <div className="py-8 sm:w-[350px] md:w-[500px] flex  flex-col items-center justify-center bg-[#F3F3F3] rounded-[15px]">
        <div className="mb-4 ">
          <h1 className="font-bold text-2xl">Forgot Password</h1>
        </div>
        <form action="" className="w-[90%] flex flex-col gap-4 mx-auto">
          <Input
            register={register}
            id="email"
            type="email"
            label="Email"
            placeholder=""
          />
          <Button
            type="button"
            text="reset password"
            handleClick={handleClick}
          />
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
