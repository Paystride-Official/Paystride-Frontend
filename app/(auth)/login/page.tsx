"use client";
import { z } from "zod";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Image from "next/image";
import Paystride from "@/app/assets/Paystride.svg";

import React from "react";
import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LogInSchema } from "@/Utils/Schemas";

interface Props {}
//http://localhost:3000/register?businessName=&name=&email=&phoneNumber=&password=&aboutUs=
const page = (props: Props) => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(LogInSchema),
  });

  const handleOnSubmit = (data: FieldValues) => {
    const formData = getValues();
    console.log(formData);

    reset();
  };

  return (
    <section className=" h-screen flex flex-col items-center justify-center">
      <div className="py-8 md:w-[500px]  flex  flex-col items-center justify-center bg-[#F3F3F3] rounded-[15px] mx-4">
        <div className="mb-4 w-[90%] mx-auto">
          <Image src={Paystride} alt="Paystride" className="mx-auto" />
          <p className="text-center">Welcome back, enter your login details</p>
        </div>
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="w-[90%] flex flex-col justify-between mx-auto gap-2"
        >
          <Input
            register={register}
            id="email"
            type="email"
            label="Email"
            placeholder=""
          />

          <Input
            register={register}
            label="Password"
            id="password"
            placeholder="Enter at least 8 characters"
            type="password"
          />

          <div className="w-[90%] flex mx-auto justify-between">
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="privacy"
                className=" text-sm flex items-center mr-[0.3rem]"
              />
              <span className="text-sm">Remember me</span>
            </div>
            <Link
              href="/forgetpassword"
              className=" text-sm capitalize text-[#091F8E] "
            >
              forget password?
            </Link>
          </div>

          {errors.password && (
            <p className="text-red-500 w-[90%] mx-auto my-0 ">
              {`Invalid email/password`}
            </p>
          )}

          <Button type="submit" text="login" disabled={isSubmitting} />
        </form>

        <p>
          Are you new to Paystride?
          <Link
            href="/register"
            className="text-[#091F8E] underline capitalize px-1"
          >
            sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default page;
