"use client";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Image from "next/image";
import Paystride from "../assets/Paystride.svg";

import React from "react";
import Link from "next/link";0

interface Props {}

const page = (props: Props) => {
  const handleClick = () => {};

  return (
    <section className=" h-screen flex flex-col items-center justify-center">
      <div className="py-8 md:w-[500px] lg:w-[620px] flex  flex-col items-center justify-center bg-[#F3F3F3] rounded-[15px]">
        <div className="mb-4 ">
          <Image src={Paystride} alt="Paystride" className="mx-auto" />
          <p>Welcome back, enter your login details</p>
        </div>
        <form action="" className="w-[90%] flex flex-col gap-4 mx-auto">
          <Input
            id="email"
            type="email"
            label="Email"
            placeholder=""
            required
          />

          <Input
            label="Password"
            id="password"
            placeholder="Enter at least 8 characters"
            type="password"
            required
          />

          <div className="w-[90%] flex mx-auto justify-between">
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="privacy"
                className="flex items-center mr-[0.3rem]"
              />
              <span>Remember me</span>
            </div>
            <Link href="/forgetpassword" className="capitalize text-[#091F8E] ">
              forget password?
            </Link>
          </div>

          <Button type="button" text="login" handleClick={handleClick} />
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
