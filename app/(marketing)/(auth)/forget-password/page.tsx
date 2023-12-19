"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { FieldValues, useForm } from "react-hook-form";
import { useForgotPassword } from "./_slice/query";

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

  const { mutateAsync: forgotPassword } = useForgotPassword();

  const handleClick = async (data: FieldValues) => {
    if (!data.email) {
      console.log("please input your email");
      return;
    }

    const response: any = await forgotPassword(data);
    if (response.success) {
      // router.push("/reset-password");
      reset();
    } else {
      console.log(response.error);
    }
  };

  return (
    <section className="h-fit mt-12 flex flex-col items-center justify-center">
      <div className="py-8 sm:w-[350px] md:w-[500px] flex  flex-col items-center justify-center bg-[#F3F3F3] rounded-[15px]">
        <div className="mb-4 ">
          <h1 className="font-bold text-2xl">Forgot Password</h1>
        </div>
        <form
          className="w-[90%] flex flex-col gap-4 mx-auto"
          onSubmit={handleSubmit(handleClick)}
        >
          <Input
            register={register}
            id="email"
            type="email"
            label="Email"
            placeholder=""
          />
          <Button type="submit" text="reset password" disabled={isSubmitting} />
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
